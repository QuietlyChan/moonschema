///|
/// 官方 JSON-Schema-Test-Suite（draft2020-12）一致性跑分器。
/// 运行：`moon run cmd/conformance`
///
/// 统计口径：
/// - pass   ：校验结论与官方期望一致
/// - fail   ：校验结论与官方期望不一致（引擎 bug）
/// - skip   ：模式含本引擎尚不支持的关键词，strict 模式编译期拒绝
///            （跳过整组，计入透明报告而非伪装成失败）
fn main {
  let mut pass = 0
  let mut fail = 0
  let mut skip = 0
  let mut groups = 0
  let mut compile_err_groups = 0
  let failures : Array[String] = []
  let skip_reasons : Array[String] = []
  let per_file : Array[String] = []
  for pair in suite_files {
    let (name, content) = pair
    let mut f_pass = 0
    let mut f_fail = 0
    let mut f_skip = 0
    let groups_json : Json? = Some(@moonschema.parse(content)) catch {
      _ => None
    }
    let groups_json = match groups_json {
      Some(g) => g
      None => {
        per_file.push("\{name}: SUITE PARSE ERROR")
        continue
      }
    }
    guard groups_json is Array(file_groups) else {
      per_file.push("\{name}: SUITE SHAPE ERROR")
      continue
    }
    for g in file_groups {
      guard g is Object(gobj) else { continue }
      groups += 1
      let gdesc = match gobj.get("description") {
        Some(String(s)) => s
        _ => "?"
      }
      let schema = match gobj.get("schema") {
        Some(s) => s
        None => continue
      }
      let tests = match gobj.get("tests") {
        Some(Array(t)) => t
        _ => continue
      }
      let compiled : @moonschema.Schema? = Some(@moonschema.compile(schema)) catch {
        e => {
          compile_err_groups += 1
          if skip_reasons.length() < 12 {
            let where_ = "\{name}/\{gdesc}"
            skip_reasons.push("\{where_} -> \{e}")
          }
          None
        }
      }
      for t in tests {
        guard t is Object(tobj) else { continue }
        let expect = match tobj.get("valid") {
          Some(True) => true
          Some(False) => false
          _ => continue
        }
        let data = tobj.get("data") |> get_or(Json::null())
        match compiled {
          Some(v) => {
            let actual = v.check(data)
            if actual == expect {
              pass += 1
              f_pass += 1
            } else {
              fail += 1
              f_fail += 1
              if failures.length() < 25 {
                let tdesc = match tobj.get("description") {
                  Some(String(s)) => s
                  _ => "?"
                }
                failures.push(
                  "\{name} / \{gdesc} / \{tdesc}: expected \{expect}, got \{actual} [data=\{data.stringify()}]",
                )
              }
            }
          }
          None => {
            skip += 1
            f_skip += 1
          }
        }
      }
    }
    per_file.push("\{name}: \{f_pass} pass, \{f_fail} fail, \{f_skip} skip")
  }
  println("== JSON-Schema-Test-Suite (draft2020-12) ==")
  println("")
  for line in per_file {
    println("  \{line}")
  }
  println("")
  println("groups: \{groups} (compile-rejected: \{compile_err_groups})")
  println("pass: \{pass}  fail: \{fail}  skip: \{skip}")
  let judged = pass + fail
  if judged > 0 {
    let rate = pass.to_double() * 100.0 / judged.to_double()
    println("pass rate (of judged \{judged}): \{rate}%")
  }
  if skip_reasons.length() > 0 {
    println("")
    println("compile rejection samples:")
    for r in skip_reasons {
      println("  \{r}")
    }
  }
  if failures.length() > 0 {
    println("")
    println("failure samples:")
    for r in failures {
      println("  \{r}")
    }
  }
}

///|
fn get_or(v : Json?, default : Json) -> Json {
  match v {
    Some(x) => x
    None => default
  }
}
