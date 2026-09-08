# wasm-gc 字符串边界 spike（已验证可行）

**结论**：wasm-gc 的 `String` 编译为自定义 GC 结构 `(ref $moonbit.string)`，
对 JS 完全不透明；`extern "js"` 在 wasm-gc 后端不受支持。跨边界传输字符串
的唯一可行路径是**字节块协议**（本目录已端到端验证，含中文/emoji 多字节）。

## 协议

1. JS 侧 `TextEncoder` 把文本编码为 UTF-8 字节
2. 按 8 字节打包为 `BigInt`，分次调用 `in_write8(offset, chunk: i64)` 写入
3. 调用 `in_commit(len)`：MoonBit 侧 `@encoding/utf8.decode` 得到 String，
   处理后将结果 `@utf8.encode` 写入输出缓冲，返回输出长度（i32）
4. JS 分次 `out_read8(offset) -> i64` 读回结果字节，`TextDecoder` 解码

## 三条硬教训

- **导出函数禁止 `raise`**：带 raise 的导出签名变成
  `(result (ref $moonbit.enum))`（Result 包装），JS 拿到不透明对象。
  错误必须内部捕获、以状态码/字节协议返回。
- **`--output-wat` 与 `.wasm` 产物可能失同步**：改完代码只生成 WAT 不重写
  wasm，Node 加载旧 wasm 会得到旧签名——测试前必须完整 `moon build --target wasm-gc`。
- **导出配置变更后需要完整重建**（必要时 `moon clean`）。

## 复现

```bash
# protocol_spike.mbt 即源码；把它放进任意包目录后：
moon build --target wasm-gc
node test-protocol.mjs   # 需把路径指向构建产物
```
