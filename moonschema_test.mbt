///|
/// 端到端黑盒测试：模拟使用者视角的完整流程（解析 → 编译 → 校验）。
test "ajv 风格 API 端到端" {
  let schema_text =
    #|{
    #|  "type": "object",
    #|  "required": ["name", "age"],
    #|  "properties": {
    #|    "name": { "type": "string", "minLength": 2 },
    #|    "age": { "type": "integer", "minimum": 0 }
    #|  },
    #|  "additionalProperties": false
    #|}
  let v = @moonschema.compile(@moonschema.parse(schema_text))
  let good =
    #|{"name": "Alice", "age": 30}
  inspect(v.check(@moonschema.parse(good)), content="true")
  let bad =
    #|{"name": "A", "age": -1, "extra": 1}
  inspect(
    @moonschema.validate_to_string(v, @moonschema.parse(bad)),
    content=(
      #|/name: must NOT have fewer than 2 characters [minLength @ #/properties/name/minLength]
      #|/age: must be >= 0 [minimum @ #/properties/age/minimum]
      #|(root): must NOT have additional properties ("extra") [additionalProperties @ #/additionalProperties]
    ),
  )
}

///|
/// 编译后的 Schema 可复用：编译一次，校验多次。
test "编译一次, 校验多次" {
  let schema_text =
    #|{ "type": "integer", "minimum": 1 }
  let v = @moonschema.compile(@moonschema.parse(schema_text))
  let mut all_ok = true
  for x in [Json::number(1), Json::number(2), Json::number(3)] {
    if !v.check(x) {
      all_ok = false
    }
  }
  inspect(all_ok, content="true")
  inspect(v.check(Json::number(0)), content="false")
}

///|
/// 递归模式（树/链表）通过惰性 $ref 支持。
test "递归 $ref 端到端" {
  let schema_text =
    #|{
    #|  "type": "object",
    #|  "required": ["value"],
    #|  "properties": {
    #|    "value": { "type": "integer" },
    #|    "next": { "$ref": "#" }
    #|  }
    #|}
  let v = @moonschema.compile(@moonschema.parse(schema_text))
  let chain =
    #|{ "value": 1, "next": { "value": 2, "next": { "value": 3 } } }
  inspect(v.check(@moonschema.parse(chain)), content="true")
  let broken =
    #|{ "value": 1, "next": { "value": "two" } }
  inspect(v.check(@moonschema.parse(broken)), content="false")
}

///|
/// strict 模式：未知关键词在编译期报错，而不是被静默忽略。
test "strict 模式在门面层同样生效" {
  let raised = try {
    let schema_text =
      #|{ "tipe": "string" }
    ignore(@moonschema.compile(@moonschema.parse(schema_text)))
    false
  } catch {
    _ => true
  }
  inspect(raised, content="true")
}
