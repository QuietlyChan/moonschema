///|
/// ajv 风格入口：把一份 JSON Schema 文档编译为可复用的 `Schema`。
///
/// 布尔模式 `true` / `false` 也是合法的 schema（2020-12）。
///
/// ```moonbit nocheck
/// let v = compile(
///   @json.parse!(#|{ "type": "string", "minLength": 1 }#|),
/// )
/// v.check(Json::string("hi")) // true
/// ```
pub fn compile(
  schema : Json,
  options? : CompileOptions = CompileOptions::new(),
) -> Schema raise CompileError {
  let ctx : Ctx = {
    root: schema,
    strict: options.strict,
    assert_format: options.assert_format,
    cache: Map([], capacity=16),
  }
  let node = compile_node(schema, ctx, ["#"])
  { node, ctx }
}

///|
fn compile_schema(
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Schema raise CompileError {
  let node = compile_node(v, ctx, spath)
  { node, ctx }
}

///|
fn compile_node(
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Node raise CompileError {
  match v {
    True => BoolNode(true)
    False => BoolNode(false)
    Object(_) => SchemaNode(compile_keywords(v, ctx, spath))
    _ =>
      raise InvalidSchema(
        schema_pointer(spath),
        "a schema must be an object or a boolean",
      )
  }
}

///|
fn compile_subschema(
  kw_name : String,
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Schema raise CompileError {
  spath.push(kw_name)
  let s = compile_schema(v, ctx, spath)
  ignore(spath.pop())
  s
}

///|
fn compile_schema_list(
  kw_name : String,
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Array[Schema] raise CompileError {
  let path = schema_pointer(spath)
  guard v is Array(arr) else {
    raise InvalidSchema(path, "\"\{kw_name}\" must be an array of schemas")
  }
  let list : Array[Schema] = []
  for i in 0..<arr.length() {
    spath.push(kw_name)
    spath.push(i.to_string())
    list.push(compile_schema(arr[i], ctx, spath))
    ignore(spath.pop())
    ignore(spath.pop())
  }
  list
}

///|
fn compile_string_list(
  kw_name : String,
  v : Json,
  spath : Array[String],
) -> Array[String] raise CompileError {
  let path = schema_pointer(spath)
  guard v is Array(arr) else {
    raise InvalidSchema(path, "\"\{kw_name}\" must be an array of strings")
  }
  let list : Array[String] = []
  for i in 0..<arr.length() {
    list.push(get_str(kw_name, arr[i], path))
  }
  list
}

///|
fn compile_string_map(
  kw_name : String,
  v : Json,
  spath : Array[String],
) -> Map[String, Array[String]] raise CompileError {
  guard v is Object(m) else {
    raise InvalidSchema(
      schema_pointer(spath),
      "\"\{kw_name}\" must be an object",
    )
  }
  let out : Map[String, Array[String]] = Map([], capacity=16)
  for k, arr in m {
    spath.push(kw_name)
    spath.push(k)
    out[k] = compile_string_list(kw_name, arr, spath)
    ignore(spath.pop())
    ignore(spath.pop())
  }
  out
}

///|
fn compile_schema_map(
  kw_name : String,
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Map[String, Schema] raise CompileError {
  guard v is Object(m) else {
    raise InvalidSchema(
      schema_pointer(spath),
      "\"\{kw_name}\" must be an object",
    )
  }
  let out : Map[String, Schema] = Map([], capacity=16)
  for k, sub in m {
    spath.push(kw_name)
    spath.push(k)
    out[k] = compile_schema(sub, ctx, spath)
    ignore(spath.pop())
    ignore(spath.pop())
  }
  out
}

///|
fn compile_count(
  kw_name : String,
  v : Json,
  spath : Array[String],
) -> Int raise CompileError {
  let path = schema_pointer(spath)
  guard v is Number(d, ..) else {
    raise InvalidSchema(path, "\"\{kw_name}\" must be a non-negative integer")
  }
  if d.is_nan() || !(d >= 0.0 && d <= 9.0e15 && d == d.floor()) {
    raise InvalidSchema(path, "\"\{kw_name}\" must be a non-negative integer")
  }
  d.to_int()
}

///|
fn compile_number(
  kw_name : String,
  v : Json,
  spath : Array[String],
) -> Double raise CompileError {
  let path = schema_pointer(spath)
  guard v is Number(d, ..) else {
    raise InvalidSchema(path, "\"\{kw_name}\" must be a number")
  }
  d
}

///|
fn get_str(
  kw_name : String,
  v : Json,
  path : String,
) -> String raise CompileError {
  guard v is String(s) else {
    raise InvalidSchema(path, "\"\{kw_name}\" must be a string")
  }
  s
}

///|
fn has_str_prefix(s : String, prefix : String) -> Bool {
  if s.length() < prefix.length() {
    return false
  }
  let pc = prefix.to_array()
  let sc = s.to_array()
  for i in 0..<pc.length() {
    if sc[i] != pc[i] {
      return false
    }
  }
  true
}

///|
fn compile_keywords(
  v : Json,
  ctx : Ctx,
  spath : Array[String],
) -> Keywords raise CompileError {
  let path = schema_pointer(spath)
  let kw = Keywords::empty()
  let map = match v {
    Object(m) => m
    _ => raise InvalidSchema(path, "internal: expected an object schema")
  }
  for name, kv in map {
    match name {
      // 元数据与 annotation：合法但不参与校验
      "$schema"
      | "$id"
      | "$comment"
      | "$defs"
      | "definitions"
      | "title"
      | "description"
      | "default"
      | "examples"
      | "deprecated"
      | "readOnly"
      | "writeOnly"
      | "contentEncoding"
      | "contentMediaType"
      | "contentSchema" => ()
      "type" =>
        match kv {
          String(s) => kw.typ = Some([JsonType::parse(s, path)])
          Array(a) => {
            let ts : Array[JsonType] = []
            for i in 0..<a.length() {
              match a[i] {
                String(s) => ts.push(JsonType::parse(s, path))
                _ =>
                  raise InvalidSchema(
                    path, "\"type\" array must contain type names",
                  )
              }
            }
            kw.typ = Some(ts)
          }
          _ =>
            raise InvalidSchema(
              path, "\"type\" must be a string or an array of strings",
            )
        }
      "enum" =>
        match kv {
          Array(a) => kw.enum_ = Some(a)
          _ => raise InvalidSchema(path, "\"enum\" must be a non-empty array")
        }
      "const" => kw.const_ = Some(kv)
      "multipleOf" => {
        let d = compile_number("multipleOf", kv, spath)
        if !(d > 0.0) {
          raise InvalidSchema(path, "\"multipleOf\" must be > 0")
        }
        kw.multiple_of = Some(d)
      }
      "maximum" => kw.maximum = Some(compile_number("maximum", kv, spath))
      "exclusiveMaximum" =>
        kw.exclusive_maximum = Some(
          compile_number("exclusiveMaximum", kv, spath),
        )
      "minimum" => kw.minimum = Some(compile_number("minimum", kv, spath))
      "exclusiveMinimum" =>
        kw.exclusive_minimum = Some(
          compile_number("exclusiveMinimum", kv, spath),
        )
      "minLength" => kw.min_length = Some(compile_count("minLength", kv, spath))
      "maxLength" => kw.max_length = Some(compile_count("maxLength", kv, spath))
      "format" => kw.format = Some(get_str("format", kv, path))
      "minItems" => kw.min_items = Some(compile_count("minItems", kv, spath))
      "maxItems" => kw.max_items = Some(compile_count("maxItems", kv, spath))
      "uniqueItems" =>
        match kv {
          True => kw.unique_items = Some(true)
          False => kw.unique_items = Some(false)
          _ => raise InvalidSchema(path, "\"uniqueItems\" must be a boolean")
        }
      "prefixItems" =>
        kw.prefix_items = Some(
          compile_schema_list("prefixItems", kv, ctx, spath),
        )
      "items" =>
        match kv {
          // draft-07 的数组形式在 2020-12 已更名为 prefixItems，直接指出避免歧义
          Array(_) =>
            raise InvalidSchema(
              path, "\"items\" must be a single schema in 2020-12; the array form was renamed to \"prefixItems\"",
            )
          _ => kw.items = Some(compile_subschema("items", kv, ctx, spath))
        }
      "contains" =>
        kw.contains = Some(compile_subschema("contains", kv, ctx, spath))
      "minContains" =>
        kw.min_contains = Some(compile_count("minContains", kv, spath))
      "maxContains" =>
        kw.max_contains = Some(compile_count("maxContains", kv, spath))
      "minProperties" =>
        kw.min_properties = Some(compile_count("minProperties", kv, spath))
      "maxProperties" =>
        kw.max_properties = Some(compile_count("maxProperties", kv, spath))
      "required" =>
        kw.required = Some(compile_string_list("required", kv, spath))
      "properties" =>
        kw.properties = Some(compile_schema_map("properties", kv, ctx, spath))
      "propertyNames" =>
        kw.property_names = Some(
          compile_subschema("propertyNames", kv, ctx, spath),
        )
      "additionalProperties" =>
        match kv {
          True => ()
          False => kw.additional_closed = Some(true)
          _ =>
            kw.additional = Some(
              compile_subschema("additionalProperties", kv, ctx, spath),
            )
        }
      "dependentRequired" =>
        kw.dependent_required = Some(
          compile_string_map("dependentRequired", kv, spath),
        )
      "dependentSchemas" =>
        kw.dependent_schemas = Some(
          compile_schema_map("dependentSchemas", kv, ctx, spath),
        )
      "allOf" => kw.all_of = Some(compile_schema_list("allOf", kv, ctx, spath))
      "anyOf" => kw.any_of = Some(compile_schema_list("anyOf", kv, ctx, spath))
      "oneOf" => kw.one_of = Some(compile_schema_list("oneOf", kv, ctx, spath))
      "not" => kw.not_ = Some(compile_subschema("not", kv, ctx, spath))
      "if" => kw.if_ = Some(compile_subschema("if", kv, ctx, spath))
      "then" => kw.then_ = Some(compile_subschema("then", kv, ctx, spath))
      "else" => kw.else_ = Some(compile_subschema("else", kv, ctx, spath))
      // 2020-12：$ref 可与其他关键词并存，校验时先解析 ref，再验证其余关键词
      "$ref" => {
        let r = get_str("$ref", kv, path)
        if !has_str_prefix(r, "#") {
          raise InvalidSchema(
            path,
            "only local \"$ref\" targets (\"#/...\") are supported in v0, got \"\{r}\"",
          )
        }
        kw.ref_ = Some(r)
      }
      other =>
        // strict 模式（ajv 风格）：不认识的关键词直接报错，`x-` 前缀的厂商扩展除外
        if ctx.strict && !has_str_prefix(other, "x-") {
          raise UnsupportedKeyword(path, other)
        }
    }
  }
  kw
}
