///|
test "validate_json: 合法/非法/各错误通路" {
  let schema =
    #|{
    #|  "type": "object",
    #|  "required": ["name"],
    #|  "properties": { "name": { "type": "string", "minLength": 2 } },
    #|  "additionalProperties": false,
    #|  "x-rules": [ "name != \"forbidden\"" ]
    #|}
  let good =
    #|{"name": "Alice"}
  inspect(
    validate_json(schema, good).contains("\"valid\":true"),
    content="true",
  )
  let bad =
    #|{"name": "A", "extra": 1}
  let out = validate_json(schema, bad)
  inspect(out.contains("\"valid\":false"), content="true")
  inspect(out.contains("minLength"), content="true")
  inspect(out.contains("instance_path"), content="true")
  // 规则未被违反时不出现在错误里（缺失即藐视通过 + 条件成立）
  inspect(out.contains("x-rules"), content="false")
  // 规则被违反时报告 x-rules 错误
  let rule_bad =
    #|{"name": "forbidden"}
  inspect(validate_json(schema, rule_bad).contains("x-rules"), content="true")
  // 实例 JSON 解析失败
  inspect(
    validate_json(schema, "{broken").contains("data_parse_error"),
    content="true",
  )
  // schema 编译失败（strict 模式拦截未知关键词）
  inspect(
    validate_json("{ \"tipe\": 1 }", "null").contains("schema_error"),
    content="true",
  )
  // schema 语法错误
  inspect(
    validate_json("{ no json", "null").contains("schema_error"),
    content="true",
  )
}

///|
test "version 非空" {
  inspect(version().length() > 0, content="true")
}
