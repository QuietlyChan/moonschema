// moonschema 基准测试：与 ajv / zod 在 Node 中的同口径对比
//
// 用法：
//   cd benchmark && npm install && node bench.mjs
//
// 公平性设计：
// - 三方都是 "编译一次、校验多次" 的推荐用法，编译耗时单独计量
// - 工作负载 A（valid）：全部通过校验的实例，测纯校验热路径
//   * ajv / zod 用预解析的对象（JSON.parse 在循环外）
//   * moonschema 用 JSON 文本输入（@json.parse 是其校验管道的一部分）
//   * 同时给出 ajv/zod 的 "+parse" 口径（循环内 JSON.parse）作为对齐参照
// - 工作负载 B（invalid）：每个实例恰有一处违规，测错误收集与报告成本
//   * moonschema 用 validate_with（含错误序列化为 JSON 文本，这是其跨界 API）
//   * ajv/zod 用各自的标准错误获取方式
// - 取多轮最优（min）以降噪
import Ajv from 'ajv'
import { z } from 'zod'
import { compile_schema, validate_with, check_with } from '../playground/web/moonschema.js'

// ---------- 基准 schema（三方同语义） ----------
const schemaDoc = {
  type: 'object',
  required: ['id', 'name', 'email', 'role', 'items'],
  properties: {
    id: { type: 'integer', minimum: 1 },
    name: { type: 'string', minLength: 2, maxLength: 64 },
    email: { type: 'string' },
    role: { enum: ['admin', 'user', 'guest'] },
    score: { type: 'number', minimum: 0, maximum: 100 },
    items: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        type: 'object',
        required: ['sku', 'qty'],
        properties: {
          sku: { type: 'string' },
          qty: { type: 'integer', minimum: 1 },
          price: { type: 'number', minimum: 0 },
        },
      },
    },
  },
  additionalProperties: false,
}

const zodSchema = z
  .object({
    id: z.number().int().min(1),
    name: z.string().min(2).max(64),
    email: z.string(),
    role: z.enum(['admin', 'user', 'guest']),
    score: z.number().min(0).max(100),
    items: z
      .array(
        z.object({
          sku: z.string(),
          qty: z.number().int().min(1),
          price: z.number().min(0).optional(),
        }),
      )
      .min(1)
      .max(10),
  })
  .strict()

// ---------- 实例生成（确定性 LCG，可复现） ----------
let seed = 42
function rnd() {
  seed = (seed * 1103515245 + 12345) % 2147483648
  return seed / 2147483648
}
function makeValid(i) {
  return {
    id: i + 1,
    name: 'user-' + i,
    email: 'u' + i + '@example.com',
    role: ['admin', 'user', 'guest'][i % 3],
    score: Math.round(rnd() * 10000) / 100,
    items: [
      { sku: 'SKU-' + (i % 97), qty: (i % 5) + 1, price: Math.round(rnd() * 9900) / 100 },
      { sku: 'SKU-' + ((i + 31) % 97), qty: (i % 3) + 1, price: Math.round(rnd() * 9900) / 100 },
    ],
  }
}
// 每个实例恰有一处违规（轮换违规类型）
function makeInvalid(i) {
  const v = makeValid(i)
  switch (i % 6) {
    case 0: v.id = String(v.id); break                 // 类型错误
    case 1: delete v.name; break                       // 缺少必填
    case 2: v.role = 'root'; break                     // 枚举外
    case 3: v.score = 120; break                       // 越界
    case 4: v.items[0].qty = 0; break                  // 嵌套约束
    case 5: v.extra = 1; break                         // 多余属性
  }
  return v
}

function gen(n, maker) {
  const arr = new Array(n)
  for (let i = 0; i < n; i++) arr[i] = JSON.stringify(maker(i))
  return arr
}

// ---------- 计时 ----------
function measure(label, rounds, fn) {
  // 预热
  for (let r = 0; r < 2; r++) fn()
  let best = Infinity
  for (let r = 0; r < rounds; r++) {
    const t0 = performance.now()
    fn()
    const dt = performance.now() - t0
    if (dt < best) best = dt
  }
  return { label, ms: best }
}

const N = 5000
const ROUNDS = 7
const validStrs = gen(N, makeValid)
const invalidStrs = gen(N, makeInvalid)
const validObjs = validStrs.map((s) => JSON.parse(s))
const invalidObjs = invalidStrs.map((s) => JSON.parse(s))

// ---------- 编译期（一次性成本） ----------
const t0 = performance.now()
const ajv = new Ajv({ allErrors: false })
const ajvValidate = ajv.compile(schemaDoc)
const ajvCompileMs = performance.now() - t0

const t1 = performance.now()
const moonschemaHandle = compile_schema(JSON.stringify(schemaDoc))
const moonCompileMs = performance.now() - t1

const t2 = performance.now()
zodSchema.safeParse(validObjs[0])
const zodCompileMs = performance.now() - t2

if (moonschemaHandle < 0) throw new Error('moonschema 编译失败')

// 正确性抽查：三方对 valid/invalid 的判定一致
for (const s of validStrs.slice(0, 100)) {
  if (!ajvValidate(JSON.parse(s))) throw new Error('ajv 判定 valid 失败')
  if (!zodSchema.safeParse(JSON.parse(s)).success) throw new Error('zod 判定 valid 失败')
  if (!check_with(moonschemaHandle, s)) throw new Error('moonschema 判定 valid 失败')
}
for (const s of invalidStrs.slice(0, 100)) {
  if (ajvValidate(JSON.parse(s))) throw new Error('ajv 判定 invalid 失败')
  if (zodSchema.safeParse(JSON.parse(s)).success) throw new Error('zod 判定 invalid 失败')
  if (check_with(moonschemaHandle, s)) throw new Error('moonschema 判定 invalid 失败')
}

// ---------- 工作负载 ----------
const results = []
function add(label, ms) {
  const per = (ms * 1000) / N
  results.push({ label, ops: N / (ms / 1000), per })
}

// A1: valid，对象口径（ajv/zod 的推荐用法）
add('ajv        valid (object)', measure('a1', ROUNDS, () => {
  for (let i = 0; i < N; i++) ajvValidate(validObjs[i])
}).ms)
add('zod        valid (object)', measure('z1', ROUNDS, () => {
  for (let i = 0; i < N; i++) zodSchema.safeParse(validObjs[i])
}).ms)
add('ajv        valid (+parse)', measure('a2', ROUNDS, () => {
  for (let i = 0; i < N; i++) ajvValidate(JSON.parse(validStrs[i]))
}).ms)
add('zod        valid (+parse)', measure('z2', ROUNDS, () => {
  for (let i = 0; i < N; i++) zodSchema.safeParse(JSON.parse(validStrs[i]))
}).ms)
add('moonschema valid (string)', measure('m1', ROUNDS, () => {
  for (let i = 0; i < N; i++) check_with(moonschemaHandle, validStrs[i])
}).ms)

// B: invalid（错误报告路径）
add('ajv        invalid (object, allErrors)', measure('b1', ROUNDS, () => {
  for (let i = 0; i < N; i++) ajvValidate(invalidObjs[i])
}).ms)
add('zod        invalid (object)', measure('z3', ROUNDS, () => {
  for (let i = 0; i < N; i++) zodSchema.safeParse(invalidObjs[i])
}).ms)
add('moonschema invalid (string+errors)', measure('m2', ROUNDS, () => {
  for (let i = 0; i < N; i++) validate_with(moonschemaHandle, invalidStrs[i])
}).ms)

// ---------- 报告 ----------
const lines = []
lines.push('# moonschema 基准报告')
lines.push('')
lines.push(`- 环境：Node ${process.version}，${process.platform}/${process.arch}`)
lines.push(`- 每轮 ${N} 个实例，${ROUNDS} 轮取最优`)
lines.push(`- Schema：订单式嵌套对象（id/name/email/role/score + items[2]），附加 additionalProperties:false`)
lines.push('')
lines.push('## 编译期（一次性，越小越好）')
lines.push('')
lines.push('| 实现 | 耗时 |')
lines.push('|---|---|')
lines.push(`| ajv.compile | ${ajvCompileMs.toFixed(2)} ms |`)
lines.push(`| moonschema compile_schema | ${moonCompileMs.toFixed(2)} ms |`)
lines.push(`| zod schema 构建（含首个解析） | ${zodCompileMs.toFixed(2)} ms |`)
lines.push('')
lines.push('## 校验吞吐（越大越好；µs/次 越小越好）')
lines.push('')
lines.push('| 实现 / 工作负载 | ops/s | µs per validate |')
lines.push('|---|---|---|')
for (const r of results) {
  lines.push(`| ${r.label} | ${Math.round(r.ops).toLocaleString('en-US')} | ${r.per.toFixed(2)} |`)
}
const report = lines.join('\n')
console.log(report)
const { writeFileSync } = await import('node:fs')
writeFileSync(new URL('./RESULTS.md', import.meta.url), report + '\n')
console.log('\n已写入 benchmark/RESULTS.md')
