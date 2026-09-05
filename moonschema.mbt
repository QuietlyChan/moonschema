///|
/// 解析 JSON 文本为 `Json` 值（转发到 core 的 `@json.parse`）。
///
/// 让使用者只依赖 `QuietlyChan/moonschema` 一个包即可完成全流程。
pub fn parse(text : String) -> Json raise @json.ParseError {
  @json.parse(text)
}

///|
/// ajv 风格入口：把一份 JSON Schema 文档编译为可复用的 `Schema`。
///
/// 编译一次、校验任意多次；布尔模式 `true` / `false` 也是合法 schema。
///
/// ```moonbit nocheck
/// let v = compile(
///   parse!(#|{ "type": "object", "required": ["id"] }#|),
/// )
/// v.check(parse!(#|{"id": 1}#|)) // true
/// ```
pub fn compile(
  schema : Json,
  options? : @schema.CompileOptions = @schema.CompileOptions::new(),
) -> @schema.Schema raise @schema.CompileError {
  @schema.compile(schema, options~)
}

///|
/// 校验并把错误渲染为多行文本（演示 / 日志 / 测试快照友好）。
pub fn validate_to_string(v : @schema.Schema, instance : Json) -> String {
  @schema.summarize(v.validate(instance))
}
