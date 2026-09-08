import { readFileSync } from 'node:fs'
const bytes = readFileSync('./_build/wasm-gc/debug/build/wasmexp.wasm')
const { instance } = await WebAssembly.instantiate(bytes, {})
const enc = new TextEncoder(), dec = new TextDecoder()

function greetBytes(name) {
  const data = enc.encode(name)
  for (let off = 0; off < data.length; off += 8) {
    let chunk = 0n
    for (let k = 0; k < 8 && off + k < data.length; k++) {
      chunk |= BigInt(data[off + k]) << BigInt(k * 8)
    }
    instance.exports.in_write8(off, chunk)
  }
  const outLen = instance.exports.in_commit(data.length)
  const out = new Uint8Array(outLen)
  for (let off = 0; off < outLen; off += 8) {
    const chunk = instance.exports.out_read8(off)
    for (let k = 0; k < 8 && off + k < outLen; k++) {
      out[off + k] = Number((chunk >> BigInt(k * 8)) & 0xffn)
    }
  }
  return dec.decode(out)
}

console.log(greetBytes('moonschema'))
console.log(greetBytes('月光schema🌙'))
console.log(greetBytes(''))
