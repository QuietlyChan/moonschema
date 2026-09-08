///|
/// Playground 的浏览器 API：一次调用完成 "解析 schema → 编译 → 校验"，
/// 返回结构化 JSON 结果文本（与 JS 侧零 FFI 摩擦——JS 后端字符串原生互通）。
///
/// 返回格式：
/// - 成功：`{"valid":bool,"errors":[{keyword,instance_path,schema_path,message}...]}`
/// - 实例 JSON 非法：`{"valid":false,"data_parse_error":"..."}`
/// - schema 非法：`{"schema_error":"..."}`
pub fn validate_json(schema_text : String, data_text : String) -> String {
  let schema = @moonschema.parse(schema_text) catch {
    e => return wrap_error("schema_error", Json::string("\{e}").stringify())
  }
  let v = @moonschema.compile(schema) catch {
    e => return wrap_error("schema_error", Json::string("\{e}").stringify())
  }
  let data = @moonschema.parse(data_text) catch {
    e => return wrap_error("data_parse_error", Json::string("\{e}").stringify())
  }
  let errors = v.validate(data)
  let err_json : Array[Json] = []
  for e in errors {
    err_json.push(
      Json::object({
        "keyword": Json::string(e.keyword),
        "instance_path": Json::string(e.instance_path),
        "schema_path": Json::string(e.schema_path),
        "message": Json::string(e.message),
      }),
    )
  }
  Json::object({
    "valid": Json::boolean(errors.is_empty()),
    "errors": Json::array(err_json),
  }).stringify()
}

///|
/// `value_json` 已是合法 JSON 字面量文本，直接拼进结果对象。
fn wrap_error(field : String, value_json : String) -> String {
  let b = StringBuilder()
  b.write_string("{\"valid\": false, \"")
  b.write_string(field)
  b.write_string("\": ")
  b.write_string(value_json)
  b.write_string("}")
  b.to_string()
}

///|
/// 版本号，供页面展示。
pub fn version() -> String {
  "0.1.0"
}

///|
/// 编译句柄注册表：ajv 式 "编译一次、校验多次" 的宿主侧用法。
let registry : Map[Int, @moonschema.Schema] = Map([], capacity=8)

///|
priv struct HandleCounter {
  mut val : Int
}

///|
let next_handle : HandleCounter = { val: 1, }

///|
/// 编译 schema 文本，返回句柄（失败返回 -1）。
pub fn compile_schema(schema_text : String) -> Int {
  let schema = @moonschema.parse(schema_text) catch { _ => return -1 }
  let v = @moonschema.compile(schema) catch { _ => return -1 }
  let h = next_handle.val
  next_handle.val += 1
  registry[h] = v
  h
}

///|
/// 用已编译的句柄校验实例文本；句柄无效返回 `{"error":"bad handle"}`。
pub fn validate_with(handle : Int, data_text : String) -> String {
  let v = match registry.get(handle) {
    Some(v) => v
    None => return "{\"error\":\"bad handle\"}"
  }
  let data = @moonschema.parse(data_text) catch {
    e => return wrap_error("data_parse_error", Json::string("\{e}").stringify())
  }
  let errors = v.validate(data)
  let err_json : Array[Json] = []
  for e in errors {
    err_json.push(
      Json::object({
        "keyword": Json::string(e.keyword),
        "instance_path": Json::string(e.instance_path),
        "schema_path": Json::string(e.schema_path),
        "message": Json::string(e.message),
      }),
    )
  }
  Json::object({
    "valid": Json::boolean(errors.is_empty()),
    "errors": Json::array(err_json),
  }).stringify()
}

///|
/// 布尔快速通道：只判定是否通过，不构造错误对象（热路径最低开销）。
pub fn check_with(handle : Int, data_text : String) -> Bool {
  let v = match registry.get(handle) {
    Some(v) => v
    None => return false
  }
  let data = @moonschema.parse(data_text) catch { _ => return false }
  v.check(data)
}
