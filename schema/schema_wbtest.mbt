///|
fn p(s : String) -> Json raise {
  parse(s)
}

///|
test "type: 单类型 / 类型数组 / integer" {
  let s1 =
    #|{ "type": "string" }
  inspect(compile(p(s1)).check(Json::string("hi")), content="true")
  inspect(compile(p(s1)).check(Json::number(1)), content="false")
  let s2 =
    #|{ "type": ["string", "null"] }
  let v2 = compile(p(s2))
  inspect(v2.check(Json::null()), content="true")
  inspect(v2.check(Json::number(1)), content="false")
  let s3 =
    #|{ "type": "integer" }
  let v3 = compile(p(s3))
  inspect(v3.check(Json::number(3)), content="true")
  inspect(v3.check(Json::number(3.5)), content="false")
  inspect(
    summarize(v3.validate(Json::number(3.5))),
    content=(
      #|(root): must be integer [type @ #/type]
    ),
  )
}

///|
test "enum / const" {
  let s =
    #|{ "enum": ["red", "green", 1] }
  let v = compile(p(s))
  inspect(v.check(Json::string("green")), content="true")
  inspect(v.check(Json::number(1)), content="true")
  inspect(v.check(Json::string("blue")), content="false")
  let sc =
    #|{ "const": 42 }
  let c = compile(p(sc))
  inspect(c.check(Json::number(42)), content="true")
  inspect(c.check(Json::number(43)), content="false")
}

///|
test "数值关键词" {
  let s =
    #|{
    #|  "type": "number",
    #|  "minimum": 0,
    #|  "exclusiveMaximum": 10,
    #|  "multipleOf": 2
    #|}
  let v = compile(p(s))
  inspect(v.check(Json::number(8)), content="true")
  inspect(v.check(Json::number(0)), content="true")
  inspect(
    summarize(v.validate(Json::number(-1))),
    content=(
      #|(root): must be multiple of 2 [multipleOf @ #/multipleOf]
      #|(root): must be >= 0 [minimum @ #/minimum]
    ),
  )
  inspect(
    summarize(v.validate(Json::number(10))),
    content=(
      #|(root): must be < 10 [exclusiveMaximum @ #/exclusiveMaximum]
    ),
  )
  inspect(
    summarize(v.validate(Json::number(3))),
    content=(
      #|(root): must be multiple of 2 [multipleOf @ #/multipleOf]
    ),
  )
}

///|
test "字符串长度" {
  let s =
    #|{ "type": "string", "minLength": 2, "maxLength": 3 }
  let v = compile(p(s))
  inspect(v.check(Json::string("ab")), content="true")
  inspect(
    summarize(v.validate(Json::string("a"))),
    content=(
      #|(root): must NOT have fewer than 2 characters [minLength @ #/minLength]
    ),
  )
  inspect(
    summarize(v.validate(Json::string("abcd"))),
    content=(
      #|(root): must NOT have more than 3 characters [maxLength @ #/maxLength]
    ),
  )
}

///|
test "对象: required / properties / additionalProperties" {
  let s =
    #|{
    #|  "type": "object",
    #|  "required": ["name"],
    #|  "properties": {
    #|    "name": { "type": "string" },
    #|    "age": { "type": "integer", "minimum": 0 }
    #|  },
    #|  "additionalProperties": false
    #|}
  let v = compile(p(s))
  let good =
    #|{"name": "Alice", "age": 1}
  inspect(v.check(p(good)), content="true")
  let bad =
    #|{"age": -1, "extra": 1}
  inspect(
    summarize(v.validate(p(bad))),
    content=(
      #|(root): must have required property "name" [required @ #/required]
      #|/age: must be >= 0 [minimum @ #/properties/age/minimum]
      #|(root): must NOT have additional properties ("extra") [additionalProperties @ #/additionalProperties]
    ),
  )
  // additionalProperties 为模式时，多余字段也要通过该模式
  let s2 =
    #|{
    #|  "properties": { "kind": { "enum": ["a"] } },
    #|  "additionalProperties": { "type": "string" }
    #|}
  let v2 = compile(p(s2))
  let g2 =
    #|{"kind": "a", "note": "ok"}
  inspect(v2.check(p(g2)), content="true")
  let b2 =
    #|{"note": 1}
  inspect(v2.check(p(b2)), content="false")
}

///|
test "数组: items / prefixItems / uniqueItems / contains" {
  let s =
    #|{
    #|  "type": "array",
    #|  "prefixItems": [ { "type": "string" } ],
    #|  "items": { "type": "integer" },
    #|  "uniqueItems": true,
    #|  "contains": { "const": 9 },
    #|  "minContains": 1
    #|}
  let v = compile(p(s))
  let dup =
    #|["x", 1, 9, 9]
  inspect(v.check(p(dup)), content="false")
  inspect(
    summarize(v.validate(p(dup))),
    content=(
      #|(root): must NOT have duplicate items [uniqueItems @ #/uniqueItems]
    ),
  )
  let noc =
    #|["x", 2, 3]
  inspect(
    summarize(v.validate(p(noc))),
    content=(
      #|(root): must contain at least 1 valid item(s) [contains @ #/contains]
    ),
  )
  let badhead =
    #|[1, 2]
  inspect(
    summarize(v.validate(p(badhead))),
    content=(
      #|/0: must be string [type @ #/prefixItems/0/type]
      #|(root): must contain at least 1 valid item(s) [contains @ #/contains]
    ),
  )
}

///|
test "组合器: oneOf / anyOf / not / if-then-else" {
  let s1 =
    #|{ "oneOf": [ { "type": "string" }, { "type": "integer" } ] }
  let oneof = compile(p(s1))
  inspect(oneof.check(Json::string("a")), content="true")
  inspect(
    summarize(oneof.validate(Json::number(1.5))),
    content=(
      #|(root): must match exactly one schema in oneOf (matched 0) [oneOf @ #/oneOf]
    ),
  )
  let s2 =
    #|{ "anyOf": [ { "const": 1 }, { "const": 2 } ] }
  let anyof = compile(p(s2))
  inspect(anyof.check(Json::number(2)), content="true")
  inspect(
    summarize(anyof.validate(Json::number(3))),
    content=(
      #|(root): must match a schema in anyOf [anyOf @ #/anyOf]
    ),
  )
  let s3 =
    #|{ "not": { "type": "string" } }
  let not = compile(p(s3))
  inspect(not.check(Json::number(1)), content="true")
  inspect(not.check(Json::string("a")), content="false")
  let s4 =
    #|{
    #|  "if": { "properties": { "kind": { "const": "int" } }, "required": ["kind"] },
    #|  "then": { "required": ["value"] },
    #|  "else": { "required": ["text"] }
    #|}
  let ite = compile(p(s4))
  let ok1 =
    #|{"kind": "int", "value": 1}
  let ok2 =
    #|{"kind": "str", "text": "x"}
  let bad1 =
    #|{"kind": "int"}
  let bad2 =
    #|{"kind": "str"}
  inspect(ite.check(p(ok1)), content="true")
  inspect(ite.check(p(ok2)), content="true")
  inspect(ite.check(p(bad1)), content="false")
  inspect(ite.check(p(bad2)), content="false")
}

///|
test "$ref: 递归结构与 $defs 引用" {
  let s =
    #|{
    #|  "type": "object",
    #|  "required": ["value"],
    #|  "properties": {
    #|    "value": { "type": "integer" },
    #|    "children": { "type": "array", "items": { "$ref": "#" } }
    #|  }
    #|}
  let v = compile(p(s))
  let tree =
    #|{
    #|  "value": 1,
    #|  "children": [ { "value": 2, "children": [ { "value": 3 } ] } ]
    #|}
  inspect(v.check(p(tree)), content="true")
  let bad =
    #|{
    #|  "value": 1,
    #|  "children": [ { "value": "bad" } ]
    #|}
  inspect(
    summarize(v.validate(p(bad))),
    content=(
      #|/children/0/value: must be integer [type @ #/properties/children/items/properties/value/type]
    ),
  )
  let sd =
    #|{
    #|  "$defs": { "name": { "type": "string", "minLength": 2 } },
    #|  "properties": { "a": { "$ref": "#/$defs/name" } },
    #|  "required": ["a"]
    #|}
  let d = compile(p(sd))
  let ok =
    #|{"a": "ok"}
  inspect(d.check(p(ok)), content="true")
  let short =
    #|{"a": "x"}
  inspect(
    summarize(d.validate(p(short))),
    content=(
      #|/a: must NOT have fewer than 2 characters [minLength @ #/properties/a/minLength]
    ),
  )
}

///|
test "strict 模式: 未知关键词报错, x- 扩展放行" {
  let bad =
    #|{ "type": "strng" }
  let msg = try {
    ignore(compile(p(bad)))
    "(no error)"
  } catch {
    InvalidSchema(_, m) => m
    UnsupportedKeyword(_, k) => k
    _ => "(unexpected error)"
  }
  inspect(msg, content="invalid type name \"strng\"")
  let ext =
    #|{ "x-custom": 1, "type": "string" }
  inspect(compile(p(ext)).check(Json::string("a")), content="true")
  let lax_s =
    #|{ "unknownKeyword": true, "type": "string" }
  let lax = compile(p(lax_s), options=CompileOptions::new(strict=false))
  inspect(lax.check(Json::string("a")), content="true")
}

///|
test "draft-07 的 items 数组形式给出迁移提示" {
  let s =
    #|{ "items": [ { "type": "string" } ] }
  let msg = try {
    ignore(compile(p(s)))
    "(no error)"
  } catch {
    InvalidSchema(_, m) => m
    UnsupportedKeyword(_, k) => k
    _ => "(unexpected error)"
  }
  inspect(
    msg,
    content="\"items\" must be a single schema in 2020-12; the array form was renamed to \"prefixItems\"",
  )
}

///|
test "布尔模式与 false schema" {
  let t =
    #|true
  let any_inst =
    #|{"anything": 1}
  inspect(compile(p(t)).check(p(any_inst)), content="true")
  let f =
    #|false
  let fs = compile(p(f))
  inspect(fs.check(Json::null()), content="false")
  inspect(
    summarize(fs.validate(Json::null())),
    content=(
      #|(root): boolean schema is false [false schema @ #]
    ),
  )
}

///|
test "propertyNames / dependentRequired / dependentSchemas / 属性数量" {
  let s =
    #|{
    #|  "type": "object",
    #|  "minProperties": 1,
    #|  "maxProperties": 2,
    #|  "propertyNames": { "maxLength": 3 },
    #|  "dependentRequired": { "credit_card": [ "billing_address" ] },
    #|  "dependentSchemas": { "tag": { "required": ["tag_len"] } }
    #|}
  let v = compile(p(s))
  let ok =
    #|{"abc": 1}
  inspect(v.check(p(ok)), content="true")
  let empty =
    #|{}
  inspect(
    summarize(v.validate(p(empty))),
    content=(
      #|(root): must NOT have fewer than 1 properties [minProperties @ #/minProperties]
    ),
  )
  let longkey =
    #|{"abcd": 1}
  inspect(
    summarize(v.validate(p(longkey))),
    content="/abcd: must NOT have more than 3 characters [maxLength @ #/propertyNames/maxLength]",
  )
  let cc =
    #|{"a": 1, "credit_card": "x"}
  inspect(
    summarize(v.validate(p(cc))),
    content=(
      #|/credit_card: must NOT have more than 3 characters [maxLength @ #/propertyNames/maxLength]
      #|(root): must have property "billing_address" when property "credit_card" is present [dependentRequired @ #/dependentRequired]
    ),
  )
  let tag =
    #|{"a": 1, "tag": "t"}
  inspect(
    summarize(v.validate(p(tag))),
    content=(
      #|(root): must have required property "tag_len" [required @ #/dependentSchemas/tag/required]
    ),
  )
}

///|
test "format: 默认 annotation, 开启 assert_format 后断言" {
  let s =
    #|{ "type": "string", "format": "email" }
  let ann = compile(p(s))
  inspect(ann.check(Json::string("not-an-email")), content="true")
  let asserting = compile(p(s), options=CompileOptions::new(assert_format=true))
  inspect(asserting.check(Json::string("a@b.co")), content="true")
  inspect(asserting.check(Json::string("no-at-sign")), content="false")
  // 未知 format 始终是 annotation
  let su =
    #|{ "type": "string", "format": "x-anything" }
  let unknown = compile(p(su), options=CompileOptions::new(assert_format=true))
  inspect(unknown.check(Json::string("whatever")), content="true")
}
