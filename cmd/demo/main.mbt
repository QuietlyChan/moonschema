///|
/// moonschema 可运行示例：同一引擎的两种用法。
/// 运行：`moon run cmd/demo`
fn main {
  println("== moonschema demo ==")
  run() catch {
    e => println("demo failed: \{e}")
  }
}

///|
fn run() -> Unit raise {
  println("")
  println("[1] ajv 风格：编译标准 JSON Schema 文档")
  let v = @moonschema.compile(
    @moonschema.parse(
      (
        #|{
        #|  "type": "object",
        #|  "required": ["id", "email"],
        #|  "properties": {
        #|    "id": { "type": "integer", "minimum": 1 },
        #|    "email": { "type": "string" },
        #|    "tags": { "type": "array", "items": { "type": "string" }, "uniqueItems": true }
        #|  },
        #|  "additionalProperties": false
        #|}
      ),
    ),
  )
  let req = @moonschema.parse(
    (
      #|{
      #|  "id": -3,
      #|  "email": 42,
      #|  "tags": ["a", "a"],
      #|  "extra": true
      #|}
    ),
  )
  println("valid: \{v.check(req)}")
  println(@moonschema.validate_to_string(v, req))
  println("")
  println("[2] zod 风格：流式构建器（字段默认必填）")
  let user = @builder.object({
    "name": @builder.string().min_len(1).max_len(50),
    "age": @builder.integer().min(0).max(150).optional(),
    "email": @builder.string().email(),
  }).strict()
  println("lowered schema: \{user.to_schema().stringify()}")
  let uv = user.compile()
  let u1_json =
    #|{"name": "Alice", "email": "alice@example.com"}
  let u2_json =
    #|{"name": "Bob", "email": "not-an-email", "extra": 1}
  let u1 = @moonschema.parse(u1_json)
  let u2 = @moonschema.parse(u2_json)
  println("user1 valid: \{uv.check(u1)}")
  println("user2 valid: \{uv.check(u2)}")
  println(@moonschema.validate_to_string(uv, u2))
}
