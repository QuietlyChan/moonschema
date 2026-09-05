///|
/// 便捷入口：解析 JSON 文本为 `Json` 值（转发到 `@json.parse`）。
///
/// 让使用者只依赖本包即可完成 "解析 → 编译 → 校验" 全流程。
pub fn parse(text : String) -> Json raise @json.ParseError {
  @json.parse(text)
}
