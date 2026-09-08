# moonschema 基准报告

- 环境：Node v24.18.0，win32/x64
- 每轮 5000 个实例，7 轮取最优
- Schema：订单式嵌套对象（id/name/email/role/score + items[2]），附加 additionalProperties:false

## 编译期（一次性，越小越好）

| 实现 | 耗时 |
|---|---|
| ajv.compile | 49.87 ms |
| moonschema compile_schema | 6.39 ms |
| zod schema 构建（含首个解析） | 3.21 ms |

## 校验吞吐（越大越好；µs/次 越小越好）

| 实现 / 工作负载 | ops/s | µs per validate |
|---|---|---|
| ajv        valid (object) | 3,066,168 | 0.33 |
| zod        valid (object) | 456,988 | 2.19 |
| ajv        valid (+parse) | 400,898 | 2.49 |
| zod        valid (+parse) | 211,562 | 4.73 |
| moonschema valid (string) | 89,177 | 11.21 |
| ajv        invalid (object, allErrors) | 7,134,703 | 0.14 |
| zod        invalid (object) | 155,439 | 6.43 |
| moonschema invalid (string+errors) | 61,078 | 16.37 |
