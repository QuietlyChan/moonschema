///|
/// 解析 JSON 文本为 `Json` 值。
///
/// 在 core `@json.parse` 之上修复整数路径 |n| >= 2^53 误产出 Infinity 的
/// 上游 bug（见 schema/api.mbt），语义与 JS 的 `JSON.parse` 一致。
pub fn parse(text : String) -> Json raise @json.ParseError {
  @schema.parse(text)
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
/// 编译产物的类型别名，便于使用者标注签名。
pub type Schema = @schema.Schema

///|
/// 校验错误类型别名。
pub type ValidationError = @schema.ValidationError

///|
/// 校验并把错误渲染为多行文本（演示 / 日志 / 测试快照友好）。
pub fn validate_to_string(v : @schema.Schema, instance : Json) -> String {
  @schema.summarize(v.validate(instance))
}
