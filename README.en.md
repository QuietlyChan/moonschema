# moonschema

[简体中文](./README.md) | [English](./README.en.md)

[![CI](https://github.com/QuietlyChan/moonschema/actions/workflows/ci.yml/badge.svg)](https://github.com/QuietlyChan/moonschema/actions/workflows/ci.yml)
[![Playground](https://img.shields.io/badge/Playground-Try%20it%20live-4f46e5)](https://quietlychan.github.io/moonschema/)
[![mooncakes.io](https://img.shields.io/badge/mooncakes.io-QuietlyChan%2Fmoonschema-9333ea)](https://mooncakes.io/docs/#/QuietlyChan/moonschema/)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](./LICENSE)

**▶ [Online Playground](https://quietlychan.github.io/moonschema/)** — edit a schema and data right in your browser and instantly see errors with dual paths. No install, just open it.

**One engine, two APIs**: a JSON Schema 2020-12 validator written in pure MoonBit, offering both [ajv](https://ajv.js.org/)-style schema compilation and a [zod](https://zod.dev/)-style fluent builder. Compiles to **WASM-GC / JS / Native**, naturally covering both web and server scenarios.

![moonschema playground demo](docs/demo.gif)

## Why moonschema

- **Two API layers, one engine**: ajv-style "compile a JSON Schema document → reuse the validator" fits frontend/backend contract validation; the zod-style "fields required by default + fluent constraints" fits inline modeling in MoonBit business code. Both lower into the same internal representation with identical semantics.
- **Cross-field rule DSL**: form-level constraints like `"end > start"` or `"items[0].price * items[0].qty == total"` that declarative JSON Schema cannot express. Expressions are parsed at **compile time** (syntax errors surface immediately).
- **Visible, localizable errors**: every error carries `keyword`, `instance_path` (RFC 6901 JSON Pointer) and `schema_path`; validation messages ship in English and Chinese (switch with `locale=ZH`).
- **Strict mode** (ajv-style, on by default): a misspelled keyword fails at **compile time** instead of being silently ignored.
- **Recursive `$ref` works**: tree/linked-list schemas are supported via lazy resolution + a compile cache.
- **Pure MoonBit, zero third-party dependencies**: only `moonbitlang/core`, naturally portable across WASM-GC / JS / Native.

## Install

```bash
moon add QuietlyChan/moonschema
```

## Quick start

### ajv style: compile a standard JSON Schema

```moonbit
// moon.pkg: import "QuietlyChan/moonschema" @moonschema
let schema_text =
  #|{
  #|  "type": "object",
  #|  "required": ["id", "email"],
  #|  "properties": {
  #|    "id": { "type": "integer", "minimum": 1 },
  #|    "email": { "type": "string" }
  #|  },
  #|  "additionalProperties": false
  #|}
let v = @moonschema.compile(@moonschema.parse(schema_text))
let req =
  #|{ "id": -3, "email": 42, "extra": true }
let ok = v.check(@moonschema.parse(req)) // false
println(@moonschema.validate_to_string(v, @moonschema.parse(req)))
// /id: must be >= 1 [minimum @ #/properties/id/minimum]
// /email: must be string [type @ #/properties/email/type]
// (root): must NOT have additional properties ("extra") [additionalProperties @ #/additionalProperties]
```

Runnable example: `moon run cmd/demo`

### zod style: fluent builder

```moonbit
// moon.pkg: import "QuietlyChan/moonschema/builder" @builder
let user = @builder.object({
  "name": @builder.string().min_len(1).max_len(50),   // required by default, like zod
  "age": @builder.integer().min(0).max(150).optional(),
  "email": @builder.string().email(),                 // builder asserts format by default
}).strict()                                           // reject undeclared fields

let v = user.compile()        // a moonschema validator
let doc = user.to_schema()    // a standard JSON Schema 2020-12 document, interoperable with any language
```

### Three ways to consume results

```moonbit
let ok : Bool = v.check(instance)                      // verdict only
let errors : Array[@moonschema.ValidationError] = v.validate(instance)
for e in errors {
  println("\{e.instance_path}: \{e.message}")          // structured consumption
}
```

## Running it in the browser (Playground)

The playground compiles the engine to a JS (ESM) module that runs directly in the browser:

```bash
bash playground/build.sh        # moon build --target js --release --strip + copy artifact
cd playground/web && python -m http.server 8080   # or npx serve .
# open http://localhost:8080
```

The page ships three editable presets (basic keywords / `x-rules` cross-field rules / recursive `$ref`), validates live, and lists errors with both `instance_path` and `schema_path`. Tested in Chromium.

Host-side integration API (`playground/api.mbt`, exported via `link: { js: { exports: [...] } }` in `moon.pkg`):

| Export | Purpose |
|---|---|
| `validate_json(schemaText, dataText)` | parse → compile → validate in one call, returns a structured JSON result |
| `compile_schema(schemaText) -> handle` | ajv-style compile-once (handle, -1 on failure) |
| `check_with(handle, dataText) -> bool` | boolean fast path |
| `validate_with(handle, dataText) -> string` | validate and return the full error JSON |
| `version()` | version string for display |

> On wasm-gc: the engine is verified to compile and export numeric functions under wasm-gc (`link.wasm-gc.exports`, tested with Node 24 `WebAssembly.instantiate`); strings, however, are GC objects opaque to JS at the wasm-gc boundary and must cross via the byte-chunk protocol (verified — see the appendix below). The playground therefore uses the JS backend, where strings interop natively.

## Benchmarks (vs ajv / zod)

Node 24, an order-shaped nested schema, 5000 instances per round × 7 rounds, best-of (reproduce with `cd benchmark && npm i && node bench.mjs`; see [benchmark/RESULTS.md](benchmark/RESULTS.md)):

| Implementation / workload | ops/s | µs per validate |
|---|---|---|
| ajv valid (pre-parsed object) | 3,079,576 | 0.32 |
| zod valid (pre-parsed object) | 407,807 | 2.45 |
| ajv valid (+JSON.parse) | 430,615 | 2.32 |
| moonschema valid (string entry) | 88,290 | 11.33 |
| zod invalid (pre-parsed object) | 157,370 | 6.35 |
| moonschema invalid (string + error reporting) | 59,050 | 16.93 |

**One-time compile cost**: moonschema `compile_schema` **7.1ms** vs ajv `compile` 65.1ms — **~9× faster** (tree compilation vs code generation). On throughput, ajv's codegen remains the ceiling on V8; moonschema currently interprets a tree, and its string-entry numbers are in the same ballpark as zod+parse. Optimization roadmap below.

## Property tests (roundtrip)

`builder/roundtrip_wbtest.mbt`: a seeded LCG generates 1100 random JSON instances (all types plus nesting) to verify three properties — `to_schema()` documents behave identically after a stringify → parse roundtrip, repeated compilation is deterministic, and `check` (fast path) agrees with `validate` (error collection).

## Supported keywords

| Category | Keywords |
|---|---|
| Core | `type` (incl. array form), `enum`, `const`, `$ref` (local JSON Pointer, recursion supported), `$defs`, boolean schemas `true`/`false` |
| Numeric | `minimum`, `maximum`, `exclusiveMinimum`, `exclusiveMaximum`, `multipleOf` (relative-epsilon check) |
| String | `minLength`, `maxLength` (counted in Unicode code points), `pattern` (core regex engine), `format` (annotation by default; asserts email / uuid / ipv4 with `assert_format`) |
| Array | `items`, `prefixItems`, `minItems`, `maxItems`, `uniqueItems`, `contains`, `minContains`, `maxContains` |
| Object | `properties`, `patternProperties`, `required`, `additionalProperties`, `propertyNames`, `minProperties`, `maxProperties`, `dependentRequired`, `dependentSchemas` |
| Combinators | `allOf`, `anyOf`, `oneOf`, `not`, `if`/`then`/`else` |
| Extension | `x-rules`: cross-field rule DSL (see below) |
| Compile options | `strict` (unknown keywords error; `x-` prefixed vendor extensions pass), `assert_format`, `locale` (error messages EN/ZH) |

**Not yet supported** (reported at compile time instead of silently skipped): remote `$ref` (http/https), named-fragment references (`$anchor` / `$dynamicRef`), `$id` inside subschemas (base URI change), `unevaluatedProperties` / `unevaluatedItems`. The draft-07 array form of `items` produces a hint pointing at `prefixItems`.

Note: `multipleOf` uses a relative epsilon on the quotient, so decimal-intuition cases like `0.0075 % 0.0001` are not broken by IEEE 754 noise.

## Cross-field rule DSL (`x-rules`)

Declarative JSON Schema cannot express form-level constraints such as "the end date must be after the start date"; moonschema fills the gap with a small expression DSL:

```moonbit
// builder side
let order = @builder.object({
  "start": @builder.string(),
  "end":   @builder.string(),
  "total": @builder.number(),
  "items": @builder.array(@builder.object({
    "price": @builder.number(), "qty": @builder.number(),
  }).optional()),
}).satisfy("end > start")
  .satisfy("items[0].price * items[0].qty == total")

// equivalent JSON Schema
// { "x-rules": ["end > start", "items[0].price * items[0].qty == total"] }
```

| Category | Operators |
|---|---|
| Comparison | `==` `!=` `<` `<=` `>` `>=` (numbers by value, strings lexicographically — ISO dates compare directly; cross-type is false) |
| Arithmetic | `+` `-` `*` `/` `%` (non-finite results make a rule unsatisfiable) |
| Logic | `&&` `\|\|` `!` (short-circuit) |
| Literals | numbers, strings (`"..."`), `true` / `false` / `null` |
| Paths | field names, dotted nesting (`address.city`), array indexing (`items[0].price`) |

Semantics:

- **Vacuous truth on missing paths**: a rule only applies when every referenced path exists — pairwise constraints on optional fields only constrain "presence"; requiredness is still expressed by required-by-default / `.optional()` / `required`
- **Compile-time syntax checking**: rules are parsed by `compile()`, so typos surface immediately instead of silently never firing at validation time
- Error `schema_path` pinpoints `#/x-rules/<index>`

## Error message i18n

```moonbit
// JSON Schema side
let v = compile(schema, options=CompileOptions::new(locale=ZH))
// builder side
let v = user.compile(locale=ZH)
```

```text
(root): 缺少必需属性 "name" [required @ #/required]
/age: 必须 >= 0 [minimum @ #/properties/age/minimum]
(root): 规则 "age > 0" 未满足 [x-rules @ #/x-rules/1]
```

English is the default; `Locale::EN` / `Locale::ZH` are built in. Localization only affects validation messages (schema compile errors are developer-facing and stay in English).

## Official conformance

The full [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) for draft2020-12 is vendored (`cmd/conformance/suite_data.mbt`, script-generated). Run `moon run cmd/conformance`:

```
groups: 384 (compile-rejected: 133)
pass: 974  fail: 1  skip: 326
pass rate (of judged 975): 99.90%
```

- **skip (326)**: schemas use keywords the engine does not support yet (`unevaluated*`, `$dynamicRef`, remote references, …); strict mode rejects the whole group at compile time and reports it transparently rather than disguising the result
- **fail (1)**: custom metaschema (vocabulary) semantics — v0 is not metaschema-aware, a known boundary

## API mapping vs ajv / zod

| moonschema | ajv | zod |
|---|---|---|
| `compile(schemaDoc)` | `ajv.compile(schema)` | — |
| `v.validate(x)` + errors array | `validate(x)` + `ajv.errors` | `schema.safeParse(x)` |
| `v.check(x)` | `validate(x)` return value | `schema.check(x)` |
| `@builder.object({...})` | — | `z.object({...})` |
| `.optional()` / `.nullable()` | — | `.optional()` / `.nullable()` |
| `.strict()` / `.catchall(s)` | `additionalProperties: false` | `.strict()` / `.catchall()` |
| `.enum_(vals)` / `.literal(v)` | `enum` / `const` | `z.enum` / `z.literal` |
| `.email()` / `.uuid()` / `.ipv4()` | `format: "email"` + ajv-formats | `.email()` / `.uuid()` |

## Development

```bash
moon check                  # static checks
moon test                   # tests (native)
moon test --target wasm-gc  # tests (WASM-GC)
moon run cmd/demo           # runnable example
moon run cmd/conformance    # official test-suite score
moon fmt && moon info       # format + refresh package interfaces
```

## Roadmap

- [x] **W1** engine core: compiler + validator + error model + lazy `$ref` (tests green on both targets)
- [x] **W2** official JSON-Schema-Test-Suite integration and score (**974/975 judged, 99.90%**); `pattern` / `patternProperties` (core regex engine); integer-parsing overflow workaround (upstream core bug)
- [x] **W3** cross-field rule DSL (`x-rules` + builder `.satisfy()`, compile-time syntax checks); error i18n (EN/ZH); quickcheck-style roundtrip property tests (1100 seeded random instances)
- [x] **W4** Node benchmark report (vs ajv/zod, ~9× faster compile); browser playground (JS backend ESM exports + host integration API); published to mooncakes.io (`QuietlyChan/moonschema` 0.1.0)
- [ ] **Next** wire the wasm-gc string boundary into products (byte-chunk protocol verified, see appendix); validation throughput (error structures / lookup paths)

## License

[Apache-2.0](./LICENSE)

## Appendix: the wasm-gc string boundary protocol (verified)

On wasm-gc, `String` compiles to a custom GC struct opaque to JS, and `extern "js"` is unsupported in that backend. The workable way to move text across the boundary is a **byte-chunk protocol** (`playground/wasm-gc-spike/` contains end-to-end verified code, including multi-byte CJK/emoji):

1. JS `TextEncoder` → UTF-8 bytes → packed 8 bytes at a time into `i64` chunks written to a wasm-side buffer
2. `in_commit(len)` triggers `@encoding/utf8` decoding and validation on the wasm side, writing the result into an output buffer
3. JS reads the result back in chunks → `TextDecoder`

Three hard lessons: exported functions must **not `raise`** (the signature becomes an opaque GC Result object); `--output-wat` and the `.wasm` artifact can go out of sync; export config changes require a full rebuild.
