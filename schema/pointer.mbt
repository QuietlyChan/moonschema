///|
/// JSON Pointer（RFC 6901）token 转义：`~` → `~0`，`/` → `~1`。
fn escape_pointer_token(t : String) -> String {
  let b = StringBuilder::new()
  for c in t {
    if c == '~' {
      b.write_string("~0")
    } else if c == '/' {
      b.write_string("~1")
    } else {
      b.write_char(c)
    }
  }
  b.to_string()
}

///|
fn unescape_pointer_token(t : String) -> String {
  let b = StringBuilder::new()
  let mut pending_escape = false
  for c in t {
    if pending_escape {
      if c == '0' {
        b.write_char('~')
      } else if c == '1' {
        b.write_char('/')
      } else {
        // 非法转义，宽容处理
        b.write_char(c)
      }
      pending_escape = false
    } else if c == '~' {
      pending_escape = true
    } else {
      b.write_char(c)
    }
  }
  b.to_string()
}

///|
/// 实例路径渲染为 JSON Pointer；根为空字符串。
fn instance_pointer(path : Array[String]) -> String {
  let b = StringBuilder::new()
  for t in path {
    b.write_string("/")
    b.write_string(escape_pointer_token(t))
  }
  b.to_string()
}

///|
/// 模式路径渲染为以 `#` 开头的 JSON Pointer 形式。
fn schema_pointer(path : Array[String]) -> String {
  let b = StringBuilder::new()
  for i in 0..<path.length() {
    if i == 0 {
      b.write_string(path[0])
    } else {
      b.write_string("/")
      b.write_string(escape_pointer_token(path[i]))
    }
  }
  b.to_string()
}

///|
/// 解析本地 `$ref` 目标（`"#"` 或 `"#/a/b"`），返回去掉 `#` 的 token 列表。
/// 非本地引用返回 `None`。
fn parse_local_ref(pointer : String) -> Array[String]? {
  if pointer == "#" {
    return Some([])
  }
  let chars = pointer.to_array()
  if chars.length() < 2 || chars[0] != '#' || chars[1] != '/' {
    return None
  }
  let tokens : Array[String] = []
  let cur = StringBuilder::new()
  let mut i = 2
  while i < chars.length() {
    let c = chars[i]
    if c == '/' {
      tokens.push(unescape_pointer_token(cur.to_string()))
      cur.reset()
    } else {
      cur.write_char(c)
    }
    i += 1
  }
  tokens.push(unescape_pointer_token(cur.to_string()))
  Some(tokens)
}

///|
fn parse_pointer_index(s : String) -> Int? {
  let chars = s.to_array()
  if chars.length() == 0 {
    return None
  }
  if chars.length() > 1 && chars[0] == '0' {
    // 规范要求数组索引不允许前导零
    return None
  }
  let mut v = 0
  for i in 0..<chars.length() {
    let c = chars[i]
    if c < '0' || c > '9' {
      return None
    }
    v = v * 10 + (c.to_int() - '0'.to_int())
    if v > 100000000 {
      return None
    }
  }
  Some(v)
}

///|
/// 按 token 列表在文档中取值。
fn resolve_pointer(root : Json, tokens : Array[String]) -> Json? {
  let mut cur : Json? = Some(root)
  for t in tokens {
    let key = unescape_pointer_token(t)
    let next : Json? = match cur {
      Some(Object(m)) => m.get(key)
      Some(Array(a)) =>
        match parse_pointer_index(key) {
          Some(i) => if i < a.length() { Some(a[i]) } else { None }
          None => None
        }
      _ => None
    }
    cur = next
  }
  cur
}
