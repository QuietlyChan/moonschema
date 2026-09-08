# moonschema 基准报告

- 环境：Node v24.18.0，win32/x64
- 每轮 5000 个实例，7 轮取最优
- Schema：订单式嵌套对象（id/name/email/role/score + items[2]），附加 additionalProperties:false

## 编译期（一次性，越小越好）

| 实现 | 耗时 |
|---|---|
| ajv.compile | 65.09 ms |
| moonschema compile_schema | 7.14 ms |
| zod schema 构建（含首个解析） | 3.25 ms |

## 校验吞吐（越大越好；µs/次 越小越好）

| 实现 / 工作负载 | ops/s | µs per validate |
|---|---|---|
| ajv        valid (object) | 3,079,576 | 0.32 |
| zod        valid (object) | 407,807 | 2.45 |
| ajv        valid (+parse) | 430,615 | 2.32 |
| zod        valid (+parse) | 221,256 | 4.52 |
| moonschema valid (string) | 88,290 | 11.33 |
| ajv        invalid (object, allErrors) | 6,996,921 | 0.14 |
| zod        invalid (object) | 157,370 | 6.35 |
| moonschema invalid (string+errors) | 59,050 | 16.93 |
