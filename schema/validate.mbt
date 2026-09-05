///|
fn err(
  keyword : String,
  ipath : Array[String],
  spath : Array[String],
  message : String,
) -> ValidationError {
  {
    keyword,
    instance_path: instance_pointer(ipath),
    // ajv 风格：schema_path 以触发错误的关键词名结尾，如 "#/properties/age/minimum"
    schema_path: "\{schema_pointer(spath)}/\{escape_pointer_token(keyword)}",
    message,
  }
}

///|
/// `false schema` 等特殊情况：关键词名不是模式里的路径段。
fn err_no_leaf(
  keyword : String,
  ipath : Array[String],
  spath : Array[String],
  message : String,
) -> ValidationError {
  {
    keyword,
    instance_path: instance_pointer(ipath),
    schema_path: schema_pointer(spath),
    message,
  }
}

///|
fn validate_node(
  root : Schema,
  node : Node,
  v : Json,
  ipath : Array[String],
  spath : Array[String],
  errors : Array[ValidationError],
) -> Bool {
  match node {
    BoolNode(true) => true
    BoolNode(false) => {
      errors.push(
        err_no_leaf("false schema", ipath, spath, "boolean schema is false"),
      )
      false
    }
    SchemaNode(kw) => validate_keywords(root, kw, v, ipath, spath, errors)
  }
}

///|
/// `$ref` 惰性解析：首次校验时编译被引用的子模式并缓存，递归模式因此安全。
fn get_or_compile_ref(root : Schema, pointer : String) -> Schema? {
  let ctx = root.ctx
  match ctx.cache.get(pointer) {
    Some(s) => Some(s)
    None =>
      match parse_local_ref(pointer) {
        Some(tokens) =>
          match resolve_pointer(ctx.root, tokens) {
            Some(target) => {
              let spath : Array[String] = ["#"]
              for t in tokens {
                spath.push(t)
              }
              let node : Node? = Some(compile_node(target, ctx, spath)) catch {
                _ => None
              }
              match node {
                Some(n) => {
                  let s : Schema = { node: n, ctx }
                  ctx.cache[pointer] = s
                  Some(s)
                }
                None => None
              }
            }
            None => None
          }
        None => None
      }
  }
}

///|
fn validate_keywords(
  root : Schema,
  kw : Keywords,
  v : Json,
  ipath : Array[String],
  spath : Array[String],
  errors : Array[ValidationError],
) -> Bool {
  let start_len = errors.length()
  // 2020-12：$ref 与其余关键词并存，先验证 ref 目标，再验证本地关键词
  match kw.ref_ {
    Some(r) =>
      match get_or_compile_ref(root, r) {
        Some(s) => {
          let _ = validate_node(root, s.node, v, ipath, spath, errors)
        }
        None =>
          errors.push(err("$ref", ipath, spath, "cannot resolve $ref \"\{r}\""))
      }
    None => ()
  }
  match kw.typ {
    Some(ts) => {
      let mut ok = false
      for i in 0..<ts.length() {
        if v.matches_type(ts[i]) {
          ok = true
        }
      }
      if !ok {
        let b = StringBuilder::new()
        for i in 0..<ts.length() {
          if i > 0 {
            if i == ts.length() - 1 {
              b.write_string(" or ")
            } else {
              b.write_string(", ")
            }
          }
          b.write_string(ts[i].label())
        }
        errors.push(err("type", ipath, spath, "must be \{b.to_string()}"))
      }
    }
    None => ()
  }
  match kw.const_ {
    Some(c) =>
      if !(v == c) {
        errors.push(err("const", ipath, spath, "must be equal to constant"))
      }
    None => ()
  }
  match kw.enum_ {
    Some(vals) => {
      let mut ok = false
      for i in 0..<vals.length() {
        if v == vals[i] {
          ok = true
        }
      }
      if !ok {
        errors.push(
          err(
            "enum", ipath, spath, "must be equal to one of the allowed values",
          ),
        )
      }
    }
    None => ()
  }
  if v is Number(n, ..) {
    match kw.multiple_of {
      Some(m) =>
        if !(n % m == 0.0) {
          errors.push(
            err("multipleOf", ipath, spath, "must be multiple of \{m}"),
          )
        }
      None => ()
    }
    match kw.maximum {
      Some(m) =>
        if n > m {
          errors.push(err("maximum", ipath, spath, "must be <= \{m}"))
        }
      None => ()
    }
    match kw.exclusive_maximum {
      Some(m) =>
        if n >= m {
          errors.push(err("exclusiveMaximum", ipath, spath, "must be < \{m}"))
        }
      None => ()
    }
    match kw.minimum {
      Some(m) =>
        if n < m {
          errors.push(err("minimum", ipath, spath, "must be >= \{m}"))
        }
      None => ()
    }
    match kw.exclusive_minimum {
      Some(m) =>
        if n <= m {
          errors.push(err("exclusiveMinimum", ipath, spath, "must be > \{m}"))
        }
      None => ()
    }
  }
  if v is String(sv) {
    match kw.min_length {
      Some(ml) =>
        if sv.length() < ml {
          errors.push(
            err(
              "minLength",
              ipath,
              spath,
              "must NOT have fewer than \{ml} characters",
            ),
          )
        }
      None => ()
    }
    match kw.max_length {
      Some(ml) =>
        if sv.length() > ml {
          errors.push(
            err(
              "maxLength",
              ipath,
              spath,
              "must NOT have more than \{ml} characters",
            ),
          )
        }
      None => ()
    }
    match kw.format {
      Some(f) =>
        if root.ctx.assert_format {
          match check_format(f, sv) {
            Some(false) =>
              errors.push(
                err("format", ipath, spath, "must match format \"\{f}\""),
              )
            _ => ()
          }
        }
      None => ()
    }
  }
  if v is Array(arr) {
    match kw.min_items {
      Some(m) =>
        if arr.length() < m {
          errors.push(
            err("minItems", ipath, spath, "must NOT have fewer than \{m} items"),
          )
        }
      None => ()
    }
    match kw.max_items {
      Some(m) =>
        if arr.length() > m {
          errors.push(
            err("maxItems", ipath, spath, "must NOT have more than \{m} items"),
          )
        }
      None => ()
    }
    match kw.unique_items {
      Some(true) => {
        let n = arr.length()
        let mut dup_found = false
        let mut i = 0
        while i < n {
          if dup_found {
            break
          }
          let mut j = 0
          while j < i {
            if arr[i] == arr[j] {
              dup_found = true
              break
            }
            j += 1
          }
          i += 1
        }
        if dup_found {
          errors.push(
            err("uniqueItems", ipath, spath, "must NOT have duplicate items"),
          )
        }
      }
      _ => ()
    }
    // 2020-12：prefixItems 约束前缀，items 约束其余元素
    let pcount = match kw.prefix_items {
      Some(p) => p.length()
      None => 0
    }
    for i in 0..<arr.length() {
      ipath.push(i.to_string())
      if i < pcount {
        let p = kw.prefix_items.unwrap()[i]
        spath.push("prefixItems")
        spath.push(i.to_string())
        let _ = validate_node(root, p.node, arr[i], ipath, spath, errors)
        ignore(spath.pop())
        ignore(spath.pop())
      } else {
        match kw.items {
          Some(it) => {
            spath.push("items")
            let _ = validate_node(root, it.node, arr[i], ipath, spath, errors)
            ignore(spath.pop())
          }
          None => ()
        }
      }
      ignore(ipath.pop())
    }
    match kw.contains {
      Some(cs) => {
        let min_c = kw.min_contains.unwrap_or(1)
        let mut count = 0
        for i in 0..<arr.length() {
          let sub : Array[ValidationError] = []
          ipath.push(i.to_string())
          spath.push("contains")
          let ok = validate_node(root, cs.node, arr[i], ipath, spath, sub)
          ignore(spath.pop())
          ignore(ipath.pop())
          if ok {
            count += 1
          }
        }
        if count < min_c {
          errors.push(
            err(
              "contains",
              ipath,
              spath,
              "must contain at least \{min_c} valid item(s)",
            ),
          )
        }
        match kw.max_contains {
          Some(mc) =>
            if count > mc {
              errors.push(
                err(
                  "maxContains",
                  ipath,
                  spath,
                  "must contain no more than \{mc} valid item(s)",
                ),
              )
            }
          None => ()
        }
      }
      None => ()
    }
  }
  if v is Object(obj) {
    match kw.min_properties {
      Some(m) =>
        if obj.length() < m {
          errors.push(
            err(
              "minProperties",
              ipath,
              spath,
              "must NOT have fewer than \{m} properties",
            ),
          )
        }
      None => ()
    }
    match kw.max_properties {
      Some(m) =>
        if obj.length() > m {
          errors.push(
            err(
              "maxProperties",
              ipath,
              spath,
              "must NOT have more than \{m} properties",
            ),
          )
        }
      None => ()
    }
    match kw.required {
      Some(req) =>
        for i in 0..<req.length() {
          let p = req[i]
          if !obj.contains(p) {
            errors.push(
              err(
                "required",
                ipath,
                spath,
                "must have required property \"\{p}\"",
              ),
            )
          }
        }
      None => ()
    }
    match kw.properties {
      Some(props) =>
        for k, sub in props {
          match obj.get(k) {
            Some(pv) => {
              ipath.push(k)
              spath.push("properties")
              spath.push(k)
              let _ = validate_node(root, sub.node, pv, ipath, spath, errors)
              ignore(spath.pop())
              ignore(spath.pop())
              ignore(ipath.pop())
            }
            None => ()
          }
        }
      None => ()
    }
    match kw.additional_closed {
      Some(true) =>
        for k, _ov in obj {
          let known = match kw.properties {
            Some(p) => p.contains(k)
            None => false
          }
          if !known {
            errors.push(
              err(
                "additionalProperties",
                ipath,
                spath,
                "must NOT have additional properties (\"\{k}\")",
              ),
            )
          }
        }
      _ => ()
    }
    match kw.additional {
      Some(add) =>
        for k, ov in obj {
          let known = match kw.properties {
            Some(p) => p.contains(k)
            None => false
          }
          if !known {
            ipath.push(k)
            spath.push("additionalProperties")
            let _ = validate_node(root, add.node, ov, ipath, spath, errors)
            ignore(spath.pop())
            ignore(ipath.pop())
          }
        }
      None => ()
    }
    match kw.property_names {
      Some(pn) =>
        for k, _ov in obj {
          ipath.push(k)
          spath.push("propertyNames")
          let _ = validate_node(
            root,
            pn.node,
            Json::string(k),
            ipath,
            spath,
            errors,
          )
          ignore(spath.pop())
          ignore(ipath.pop())
        }
      None => ()
    }
    match kw.dependent_required {
      Some(m) =>
        for k, deps in m {
          if obj.contains(k) {
            for i in 0..<deps.length() {
              let d = deps[i]
              if !obj.contains(d) {
                errors.push(
                  err(
                    "dependentRequired",
                    ipath,
                    spath,
                    "must have property \"\{d}\" when property \"\{k}\" is present",
                  ),
                )
              }
            }
          }
        }
      None => ()
    }
    match kw.dependent_schemas {
      Some(m) =>
        for k, ds in m {
          if obj.contains(k) {
            spath.push("dependentSchemas")
            spath.push(k)
            let _ = validate_node(root, ds.node, v, ipath, spath, errors)
            ignore(spath.pop())
            ignore(spath.pop())
          }
        }
      None => ()
    }
  }
  match kw.all_of {
    Some(list) =>
      for i in 0..<list.length() {
        spath.push("allOf")
        spath.push(i.to_string())
        let _ = validate_node(root, list[i].node, v, ipath, spath, errors)
        ignore(spath.pop())
        ignore(spath.pop())
      }
    None => ()
  }
  match kw.any_of {
    Some(list) => {
      let mut matched = false
      for i in 0..<list.length() {
        let sub : Array[ValidationError] = []
        spath.push("anyOf")
        spath.push(i.to_string())
        let ok = validate_node(root, list[i].node, v, ipath, spath, sub)
        ignore(spath.pop())
        ignore(spath.pop())
        if ok {
          matched = true
        }
      }
      if !matched {
        errors.push(err("anyOf", ipath, spath, "must match a schema in anyOf"))
      }
    }
    None => ()
  }
  match kw.one_of {
    Some(list) => {
      let mut pass_count = 0
      for i in 0..<list.length() {
        let sub : Array[ValidationError] = []
        spath.push("oneOf")
        spath.push(i.to_string())
        let ok = validate_node(root, list[i].node, v, ipath, spath, sub)
        ignore(spath.pop())
        ignore(spath.pop())
        if ok {
          pass_count += 1
        }
      }
      if !(pass_count == 1) {
        errors.push(
          err(
            "oneOf",
            ipath,
            spath,
            "must match exactly one schema in oneOf (matched \{pass_count})",
          ),
        )
      }
    }
    None => ()
  }
  match kw.not_ {
    Some(n) => {
      let sub : Array[ValidationError] = []
      spath.push("not")
      let ok = validate_node(root, n.node, v, ipath, spath, sub)
      ignore(spath.pop())
      if ok {
        errors.push(err("not", ipath, spath, "must NOT be valid"))
      }
    }
    None => ()
  }
  match kw.if_ {
    Some(i) => {
      let sub : Array[ValidationError] = []
      spath.push("if")
      let ok = validate_node(root, i.node, v, ipath, spath, sub)
      ignore(spath.pop())
      if ok {
        match kw.then_ {
          Some(t) => {
            spath.push("then")
            let _ = validate_node(root, t.node, v, ipath, spath, errors)
            ignore(spath.pop())
          }
          None => ()
        }
      } else {
        match kw.else_ {
          Some(e) => {
            spath.push("else")
            let _ = validate_node(root, e.node, v, ipath, spath, errors)
            ignore(spath.pop())
          }
          None => ()
        }
      }
    }
    None => ()
  }
  errors.length() == start_len
}
