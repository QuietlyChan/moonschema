function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty() {}
_M0DTPC38internal13regex__engine8automata9ThreadSet5Empty.prototype.$tag = 0;
const _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__ = new _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty();
function _M0DTPC38internal13regex__engine8automata9ThreadSet4Node(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTPC38internal13regex__engine8automata9ThreadSet4Node.prototype.$tag = 1;
function _M0TPC38internal13regex__engine8automata4Expr(param0, param1) {
  this.id = param0;
  this.def = param1;
}
function _M0DTPC38internal13regex__engine8automata7ExprDef3Chr(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata7ExprDef3Chr.prototype.$tag = 0;
function _M0DTPC38internal13regex__engine8automata7ExprDef3Alt(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata7ExprDef3Alt.prototype.$tag = 1;
function _M0DTPC38internal13regex__engine8automata7ExprDef3Seq(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC38internal13regex__engine8automata7ExprDef3Seq.prototype.$tag = 2;
function _M0DTPC38internal13regex__engine8automata7ExprDef3Rep(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC38internal13regex__engine8automata7ExprDef3Rep.prototype.$tag = 3;
function _M0DTPC38internal13regex__engine8automata7ExprDef3Eps() {}
_M0DTPC38internal13regex__engine8automata7ExprDef3Eps.prototype.$tag = 4;
const _M0DTPC38internal13regex__engine8automata7ExprDef3Eps__ = new _M0DTPC38internal13regex__engine8automata7ExprDef3Eps();
function _M0DTPC38internal13regex__engine8automata7ExprDef4Mark(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata7ExprDef4Mark.prototype.$tag = 5;
function _M0DTPC38internal13regex__engine8automata7ExprDef6Before(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata7ExprDef6Before.prototype.$tag = 6;
function _M0DTPC38internal13regex__engine8automata7ExprDef5After(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata7ExprDef5After.prototype.$tag = 7;
function _M0TPC46string8internal13regex__engine3ast7Pattern(param0, param1) {
  this.desc = param0;
  this.nullable = param1;
}
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc4Char(param0) {
  this._0 = param0;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc4Char.prototype.$tag = 0;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc8Sequence(param0) {
  this._0 = param0;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc8Sequence.prototype.$tag = 1;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc11Alternation(param0) {
  this._0 = param0;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc11Alternation.prototype.$tag = 2;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc10Quantifier(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc10Quantifier.prototype.$tag = 3;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc10Preference(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc10Preference.prototype.$tag = 4;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc7Capture(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc7Capture.prototype.$tag = 5;
function _M0DTPC46string8internal13regex__engine3ast11PatternDesc9Assertion(param0) {
  this._0 = param0;
}
_M0DTPC46string8internal13regex__engine3ast11PatternDesc9Assertion.prototype.$tag = 6;
function _M0TP311QuietlyChan10moonschema10playground13HandleCounter(param0) {
  this.val = param0;
}
function _M0DTP311QuietlyChan10moonschema5rules4Expr4ENum(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr4ENum.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema5rules4Expr4EStr(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr4EStr.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema5rules4Expr5EBool(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr5EBool.prototype.$tag = 2;
function _M0DTP311QuietlyChan10moonschema5rules4Expr5ENull() {}
_M0DTP311QuietlyChan10moonschema5rules4Expr5ENull.prototype.$tag = 3;
const _M0DTP311QuietlyChan10moonschema5rules4Expr5ENull__ = new _M0DTP311QuietlyChan10moonschema5rules4Expr5ENull();
function _M0DTP311QuietlyChan10moonschema5rules4Expr5EPath(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr5EPath.prototype.$tag = 4;
function _M0DTP311QuietlyChan10moonschema5rules4Expr4ENot(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr4ENot.prototype.$tag = 5;
function _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr6EArith.prototype.$tag = 6;
function _M0DTP311QuietlyChan10moonschema5rules4Expr4ECmp(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr4ECmp.prototype.$tag = 7;
function _M0DTP311QuietlyChan10moonschema5rules4Expr6ELogic(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP311QuietlyChan10moonschema5rules4Expr6ELogic.prototype.$tag = 8;
function _M0DTPC36string8internal13regex__parser11CharOrClass4Char(param0) {
  this._0 = param0;
}
_M0DTPC36string8internal13regex__parser11CharOrClass4Char.prototype.$tag = 0;
function _M0DTPC36string8internal13regex__parser11CharOrClass5Class(param0) {
  this._0 = param0;
}
_M0DTPC36string8internal13regex__parser11CharOrClass5Class.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema6schema4Node8BoolNode(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema6schema4Node8BoolNode.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema6schema4Node10SchemaNode(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema6schema4Node10SchemaNode.prototype.$tag = 1;
function _M0TPC38internal13regex__engine8automata5State(param0, param1, param2, param3) {
  this.slot = param0;
  this.cat = param1;
  this.desc = param2;
  this.hash = param3;
}
function _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Value5VBool.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema5rules5Value4VNum(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Value4VNum.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema5rules5Value4VStr(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Value4VStr.prototype.$tag = 2;
function _M0DTP311QuietlyChan10moonschema5rules5Value5VNull() {}
_M0DTP311QuietlyChan10moonschema5rules5Value5VNull.prototype.$tag = 3;
const _M0DTP311QuietlyChan10moonschema5rules5Value5VNull__ = new _M0DTP311QuietlyChan10moonschema5rules5Value5VNull();
function _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing() {}
_M0DTP311QuietlyChan10moonschema5rules5Value8VMissing.prototype.$tag = 4;
const _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing__ = new _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing();
function _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiRP311QuietlyChan10moonschema6schema6SchemaEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGiE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP311QuietlyChan10moonschema6schema6SchemaE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGiRP311QuietlyChan10moonschema6schema6SchemaE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP311QuietlyChan10moonschema6schema6SchemaE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB5ArrayGsEEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB4IterGRPC38internal13regex__engine8automata11MarkSlotMapEE(param0) {
  this.val = param0;
}
const _M0MPC16double6Double8mod__ffi = (a, b) => (a % b);
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax.prototype.$tag = 9;
function _M0DTPC15error5Error82moonbitlang_2fcore_2fstring_2finternal_2fregex__parser_2eParserError_2eParserError(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error82moonbitlang_2fcore_2fstring_2finternal_2fregex__parser_2eParserError_2eParserError.prototype.$tag = 8;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 7;
function _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema.prototype.$tag = 6;
function _M0DTPC15error5Error69QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eUnsupportedKeyword(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error69QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eUnsupportedKeyword.prototype.$tag = 5;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 4;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 3;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 2;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 1;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 0;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TPC17hashmap7HashMapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(param0, param1, param2, param3) {
  this.entries = param0;
  this.capacity = param1;
  this.capacity_mask = param2;
  this.size = param3;
}
function _M0TPC17hashmap5EntryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC17hashset7HashSetGiE(param0, param1, param2, param3, param4) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
}
function _M0TPC17hashset5EntryGiE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
function _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty() {}
_M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty.prototype.$tag = 0;
const _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty__ = new _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty();
function _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE4Tree(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE4Tree.prototype.$tag = 1;
function _M0TPB8MutLocalGRPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotEE(param0) {
  this.val = param0;
}
function _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty() {}
_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty.prototype.$tag = 0;
const _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__ = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty();
function _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node.prototype.$tag = 1;
function _M0TPB8MutLocalGRPC48internal13regex__engine13shared__types11rechar__set4TreeE(param0) {
  this.val = param0;
}
function _M0TPC38internal13regex__engine13shared__types7Profile(param0, param1, param2, param3, param4, param5) {
  this.lb = param0;
  this.ub = param1;
  this.valid = param2;
  this.word = param3;
  this.word_symbolize_splits = param4;
  this.category = param5;
}
function _M0DTPC38internal13regex__engine8automata6Thread3End(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata6Thread3End.prototype.$tag = 0;
function _M0DTPC38internal13regex__engine8automata6Thread3Exp(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC38internal13regex__engine8automata6Thread3Exp.prototype.$tag = 1;
function _M0DTPC38internal13regex__engine8automata6Thread3Seq(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC38internal13regex__engine8automata6Thread3Seq.prototype.$tag = 2;
function _M0TPB8MutLocalGRPC38internal13regex__engine8automata9ThreadSetE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC38internal13regex__engine8automata6Status6Failed() {}
_M0DTPC38internal13regex__engine8automata6Status6Failed.prototype.$tag = 0;
const _M0DTPC38internal13regex__engine8automata6Status6Failed__ = new _M0DTPC38internal13regex__engine8automata6Status6Failed();
function _M0DTPC38internal13regex__engine8automata6Status5Match(param0) {
  this._0 = param0;
}
_M0DTPC38internal13regex__engine8automata6Status5Match.prototype.$tag = 1;
function _M0DTPC38internal13regex__engine8automata6Status7Running() {}
_M0DTPC38internal13regex__engine8automata6Status7Running.prototype.$tag = 2;
const _M0DTPC38internal13regex__engine8automata6Status7Running__ = new _M0DTPC38internal13regex__engine8automata6Status7Running();
function $i32_ctz(a) {
  a >>>= 0;
  if (a === 0) return 32;
  a &= -a;
  return 31 - Math.clz32(a);
}
function _M0TPC38internal13regex__engine8automata12DeltaContext(param0, param1, param2) {
  this.c = param0;
  this.prev_cat = param1;
  this.next_cat = param2;
}
function _M0TPC38internal13regex__engine8automata7Context(param0, param1, param2) {
  this.next_expr_id = param0;
  this.book = param1;
  this.book_dirty = param2;
}
function _M0TPC111sorted__set9SortedSetGiE(param0, param1) {
  this.root = param0;
  this.size = param1;
}
function _M0TPC111sorted__set4NodeGiE(param0, param1, param2, param3) {
  this.value = param0;
  this.left = param1;
  this.right = param2;
  this.height = param3;
}
function _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None() {}
_M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None__ = new _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None();
function _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPC111sorted__set4NodeGiEE(param0) {
  this.val = param0;
}
function _M0TPC36string8internal13regex__engine16TranslateContext(param0, param1, param2, param3) {
  this.ctx = param0;
  this.pref = param1;
  this.groups = param2;
  this.symbol_table = param3;
}
function _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE5Empty() {}
_M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE5Empty.prototype.$tag = 0;
const _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE5Empty__ = new _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE5Empty();
function _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE4More(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE4More.prototype.$tag = 1;
function _M0TPC36string8internal13regex__engine5Regex(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  this.profile = param0;
  this.ctx = param1;
  this.expr = param2;
  this.groups = param3;
  this.symbol_table = param4;
  this.symbol_repr = param5;
  this.start_states = param6;
  this.state_table = param7;
  this.transition_table = param8;
  this.final_table = param9;
  this.states = param10;
  this.num_states = param11;
}
function _M0TPB9ArrayViewGURPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4None() {}
_M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4None__ = new _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4None();
function _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4Some.prototype.$tag = 1;
function _M0TPC46string8internal13regex__engine3ast10Quantifier(param0, param1, param2) {
  this.min = param0;
  this.max = param1;
  this.mode = param2;
}
function _M0TPB9ArrayViewGOsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC36string8internal13regex__parser13ParserContext(param0, param1, param2, param3) {
  this.profile = param0;
  this.base = param1;
  this.ignore_case = param2;
  this.mode = param3;
}
function _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE2Ok.prototype.$tag = 1;
function _M0TPC16string11MatchResult(param0, param1, param2) {
  this.input = param0;
  this.group_names = param1;
  this.result = param2;
}
function _M0DTPC16result6ResultGRPC16string5RegexRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string5RegexRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string5RegexRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string5RegexRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC16string5Regex(param0, param1) {
  this.pat = param0;
  this.re = param1;
}
function _M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE2Ok.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema5rules5Token4TNum(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Token4TNum.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema5rules5Token4TStr(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Token4TStr.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema5rules5Token6TIdent(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Token6TIdent.prototype.$tag = 2;
function _M0DTP311QuietlyChan10moonschema5rules5Token3TOp(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules5Token3TOp.prototype.$tag = 3;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok.prototype.$tag = 1;
function _M0DTP311QuietlyChan10moonschema5rules7PathSeg4PKey(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules7PathSeg4PKey.prototype.$tag = 0;
function _M0DTP311QuietlyChan10moonschema5rules7PathSeg6PIndex(param0) {
  this._0 = param0;
}
_M0DTP311QuietlyChan10moonschema5rules7PathSeg6PIndex.prototype.$tag = 1;
function _M0TP311QuietlyChan10moonschema5rules6Parser(param0, param1, param2) {
  this.toks = param0;
  this.pos = param1;
  this.src = param2;
}
function _M0TP311QuietlyChan10moonschema6schema15ValidationError(param0, param1, param2, param3) {
  this.keyword = param0;
  this.instance_path = param1;
  this.schema_path = param2;
  this.message = param3;
}
function _M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0TP311QuietlyChan10moonschema6schema8Keywords(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29, param30, param31, param32, param33, param34, param35, param36, param37, param38, param39) {
  this.ref_ = param0;
  this.typ = param1;
  this.enum_ = param2;
  this.const_ = param3;
  this.multiple_of = param4;
  this.maximum = param5;
  this.exclusive_maximum = param6;
  this.minimum = param7;
  this.exclusive_minimum = param8;
  this.min_length = param9;
  this.max_length = param10;
  this.format = param11;
  this.pattern = param12;
  this.min_items = param13;
  this.max_items = param14;
  this.unique_items = param15;
  this.prefix_items = param16;
  this.items = param17;
  this.contains = param18;
  this.min_contains = param19;
  this.max_contains = param20;
  this.min_properties = param21;
  this.max_properties = param22;
  this.required = param23;
  this.properties = param24;
  this.pattern_properties = param25;
  this.property_names = param26;
  this.additional_closed = param27;
  this.additional = param28;
  this.dependent_required = param29;
  this.dependent_schemas = param30;
  this.rule_srcs = param31;
  this.rules = param32;
  this.all_of = param33;
  this.any_of = param34;
  this.one_of = param35;
  this.not_ = param36;
  this.if_ = param37;
  this.then_ = param38;
  this.else_ = param39;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0TP311QuietlyChan10moonschema6schema6Schema(param0, param1) {
  this.node = param0;
  this.ctx = param1;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP311QuietlyChan10moonschema6schema6SchemaEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok.prototype.$tag = 1;
function _M0TP311QuietlyChan10moonschema6schema14CompileOptions(param0, param1, param2) {
  this.strict = param0;
  this.assert_format = param1;
  this.locale = param2;
}
function _M0TP311QuietlyChan10moonschema6schema3Ctx(param0, param1, param2, param3, param4) {
  this.root = param0;
  this.strict = param1;
  this.assert_format = param2;
  this.locale = param3;
  this.cache = param4;
}
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGsE, method_1: _M0IPC16string6StringPB4Show10to__string };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0MPB4Iter4nextN6constrS9808GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9809GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9808GcE = 0;
const _M0MPB4Iter4nextN6constrS9809GcE = 0;
const _M0MPB4Iter4nextN6constrS9808GiE = 0;
const _M0MPB4Iter4nextN6constrS9809GiE = 0;
const _M0MPB4Iter3newN6constrS9816GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9816GcE = 0;
const _M0MPB4Iter3newN6constrS9816GiE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1825 = 0n;
const _M0FPC38internal13regex__engine8automata9ts__empty = _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__;
const _M0FPC38internal13regex__engine8automata8e__empty = new _M0TPC38internal13regex__engine8automata4Expr(0, new _M0DTPC38internal13regex__engine8automata7ExprDef3Alt([]));
const _M0FPC38internal13regex__engine8automata6e__eps = new _M0TPC38internal13regex__engine8automata4Expr(1, _M0DTPC38internal13regex__engine8automata7ExprDef3Eps__);
const _M0MPC38internal13regex__engine8automata4Slot10unassignedN6recordS781 = 0;
const _M0FPC46string8internal13regex__engine3ast5empty = new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc11Alternation([]), false);
const _M0FPC46string8internal13regex__engine3ast7epsilon = new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc8Sequence([]), true);
const _M0FPC36string8internal13regex__engine18pending__state__id = 18446744073709551615n;
const _M0FP311QuietlyChan10moonschema10playground12next__handle = new _M0TP311QuietlyChan10moonschema10playground13HandleCounter(1);
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FP311QuietlyChan10moonschema6schema22fix__integer__overflowN6constrS1490 = 16;
const _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unaryN6constrS619 = new _M0DTP311QuietlyChan10moonschema5rules4Expr4ENum(0);
const _M0MP311QuietlyChan10moonschema5rules6Parser14parse__primaryN6constrS620 = new _M0DTP311QuietlyChan10moonschema5rules4Expr5EBool(true);
const _M0MP311QuietlyChan10moonschema5rules6Parser14parse__primaryN6constrS621 = new _M0DTP311QuietlyChan10moonschema5rules4Expr5EBool(false);
const _M0FP311QuietlyChan10moonschema6schema20compile__string__mapN6constrS1465 = 16;
const _M0FPC16string9word__set = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(97, 122), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(65, 90)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(48, 57)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(95));
const _M0FPC16string20re__profile__unicode = _M0MPC38internal13regex__engine13shared__types7Profile7Profile(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Sub3sub(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(0, 1114111), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(55296, 57343)), _M0FPC16string9word__set, undefined, (c) => {
  _L: {
    if (c >= 97 && c <= 122) {
      break _L;
    } else {
      if (c >= 65 && c <= 90) {
        break _L;
      } else {
        if (c >= 48 && c <= 57) {
          break _L;
        } else {
          if (c === 95) {
            break _L;
          } else {
            if (c === 10) {
              const _p = 16;
              const _p$2 = 12;
              return _p | _p$2;
            } else {
              return 12;
            }
          }
        }
      }
    }
  }
  return 2;
});
const _M0FPC46string8internal13regex__engine3ast13end__of__word = _M0FPC46string8internal13regex__engine3ast9assertion(5);
const _M0FPC46string8internal13regex__engine3ast15start__of__word = _M0FPC46string8internal13regex__engine3ast9assertion(4);
const _M0FPC46string8internal13regex__engine3ast14end__of__input = _M0FPC46string8internal13regex__engine3ast9assertion(1);
const _M0FPC46string8internal13regex__engine3ast19not__word__boundary = _M0FPC46string8internal13regex__engine3ast9assertion(6);
const _M0MPC36string8internal13regex__parser6Parser15quantifier__optN25_2atransition__table__163S174 = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 9, 7, 11, 11, 4, 11, 0, 1, 11, 11, 2, 3, 11, 11, 11, 11, 11, 10, 11, 11, 5, 11, 11, 11, 11, 10, 11, 11, 6, 11];
const _M0MPC36string8internal13regex__parser6Parser15quantifier__optN6constrS762 = 1;
const _M0MPC36string8internal13regex__parser6Parser15quantifier__optN5tupleS763 = { _0: 0, _1: _M0MPC36string8internal13regex__parser6Parser15quantifier__optN6constrS762 };
const _M0MPC36string8internal13regex__parser6Parser15quantifier__optN6constrS764 = _M0MPC36string8internal13regex__parser6Parser15quantifier__optN5tupleS763;
const _M0FPC46string8internal13regex__engine3ast16start__of__input = _M0FPC46string8internal13regex__engine3ast9assertion(0);
const _M0FPC36string8internal13regex__parser18posix__cset__lower = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(97, 122);
const _M0FPC36string8internal13regex__parser18posix__cset__space = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(32), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(9)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(10)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(13)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(11)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(12));
const _M0FPC36string8internal13regex__parser18posix__cset__blank = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(32), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(9));
const _M0FPC36string8internal13regex__parser18posix__cset__digit = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(48, 57);
const _M0FPC36string8internal13regex__parser18posix__cset__upper = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(65, 90);
const _M0FPC36string8internal13regex__parser18posix__cset__alpha = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0FPC36string8internal13regex__parser18posix__cset__upper, _M0FPC36string8internal13regex__parser18posix__cset__lower);
const _M0FPC36string8internal13regex__parser18posix__cset__alnum = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0FPC36string8internal13regex__parser18posix__cset__alpha, _M0FPC36string8internal13regex__parser18posix__cset__digit);
const _M0FPC36string8internal13regex__parser18posix__cset__ascii = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(0, 127);
const _M0FPC36string8internal13regex__parser19posix__cset__xdigit = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0FPC36string8internal13regex__parser18posix__cset__digit, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(97, 102)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(65, 70));
const _M0MPC36string8internal13regex__parser6Parser11class__atomN25_2atransition__table__262S270 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 16, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 5, 5, 100, 5, 6, 100, 6, 5, 5, 5, 100, 7, 100, 6, 100, 8, 100, 100, 100, 100, 100, 100, 9, 100, 100, 10, 6, 11, 12, 6, 29, 5, 5, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 31, 100, 31, 100, 100, 100, 100, 100, 31, 31, 31, 31, 31, 31, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 32, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 100, 41, 41, 41, 100, 100, 100, 42, 43, 41, 44, 41, 41, 41, 41, 41, 41, 45, 41, 41, 41, 41, 41, 46, 41, 47, 48, 49, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 100, 100, 100, 100, 30, 100, 30, 100, 100, 100, 100, 100, 30, 30, 30, 30, 30, 30, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 13, 100, 13, 100, 100, 100, 100, 100, 13, 13, 13, 13, 13, 13, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 39, 100, 39, 100, 100, 100, 100, 100, 39, 39, 39, 39, 39, 39, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 33, 100, 33, 100, 100, 100, 100, 100, 33, 33, 33, 33, 33, 33, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 34, 100, 34, 100, 100, 100, 100, 100, 34, 34, 34, 34, 34, 34, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 35, 100, 35, 100, 100, 100, 100, 100, 35, 35, 35, 35, 35, 35, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 36, 100, 36, 100, 100, 100, 100, 100, 36, 36, 36, 36, 36, 36, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 37, 100, 37, 100, 100, 100, 100, 100, 37, 37, 37, 37, 37, 37, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 38, 100, 38, 100, 100, 100, 100, 100, 38, 38, 38, 38, 38, 38, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 14, 100, 100, 100, 100, 100, 100, 100, 100, 40, 100, 40, 100, 100, 100, 100, 100, 40, 40, 40, 40, 40, 40, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 15, 100, 15, 100, 100, 100, 100, 100, 15, 15, 15, 15, 15, 15, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 86, 41, 41, 41, 41, 41, 87, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 81, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 76, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 71, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 66, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 61, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 57, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 18, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 52, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 53, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 54, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 55, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 56, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 17, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 58, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 59, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 60, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 19, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 62, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 63, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 64, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 65, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 20, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 67, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 68, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 69, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 70, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 21, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 72, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 73, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 74, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 75, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 22, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 77, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 78, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 79, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 80, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 23, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 82, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 83, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 84, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 85, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 24, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 92, 41, 93, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 88, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 89, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 90, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 91, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 25, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 97, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 94, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 95, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 96, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 26, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 50, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 98, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 41, 41, 99, 41, 41, 41, 100, 100, 100, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 27, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
const _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS757 = new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(8);
const _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS758 = new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(12);
const _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS759 = new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(10);
const _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS760 = new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(13);
const _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS761 = new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(9);
const _M0MPC36string8internal13regex__parser6Parser4termN24_2atransition__table__68S76 = [51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 48, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 27, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 10, 10, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 11, 10, 12, 13, 10, 13, 11, 11, 11, 10, 14, 15, 16, 17, 18, 19, 20, 21, 11, 11, 22, 23, 10, 10, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 0, 0, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 0, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 38, 51, 51, 51, 51, 51, 38, 38, 38, 51, 51, 51, 51, 51, 51, 38, 38, 51, 51, 51, 51, 51, 51, 39, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 37, 51, 51, 51, 51, 51, 37, 37, 37, 51, 51, 51, 51, 51, 51, 37, 37, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 10, 10, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 10, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 33, 51, 51, 51, 51, 51, 51, 51, 51, 34, 51, 51, 50, 50, 50, 50, 50, 51, 51, 51, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 8, 9, 0, 0, 51, 51, 51, 51, 51, 51, 51, 51, 24, 51, 51, 51, 51, 51, 24, 24, 24, 51, 51, 51, 51, 51, 51, 24, 24, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 46, 51, 51, 51, 51, 51, 46, 46, 46, 51, 51, 51, 51, 51, 51, 46, 46, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 40, 51, 51, 51, 51, 51, 40, 40, 40, 51, 51, 51, 51, 51, 51, 40, 40, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 41, 51, 51, 51, 51, 51, 41, 41, 41, 51, 51, 51, 51, 51, 51, 41, 41, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 42, 51, 51, 51, 51, 51, 42, 42, 42, 51, 51, 51, 51, 51, 51, 42, 42, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 43, 51, 51, 51, 51, 51, 43, 43, 43, 51, 51, 51, 51, 51, 51, 43, 43, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 44, 51, 51, 51, 51, 51, 44, 44, 44, 51, 51, 51, 51, 51, 51, 44, 44, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 45, 51, 51, 51, 51, 51, 45, 45, 45, 51, 51, 51, 51, 51, 51, 45, 45, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 25, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 47, 51, 51, 51, 51, 51, 47, 47, 47, 51, 51, 51, 51, 51, 51, 47, 47, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 26, 51, 51, 51, 51, 51, 26, 26, 26, 51, 51, 51, 51, 51, 51, 26, 26, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 28, 51, 51, 51, 51, 51, 51, 29, 30, 31, 51, 51, 49, 49, 49, 49, 49, 51, 51, 51, 51, 49, 49, 49, 49, 49, 49, 49, 49, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 32, 51, 51, 51, 51, 49, 49, 49, 49, 49, 51, 51, 51, 51, 49, 49, 49, 49, 49, 49, 49, 49, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 50, 51, 51, 51, 35, 51, 50, 50, 50, 50, 50, 51, 51, 51, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51];
const _M0FP311QuietlyChan10moonschema6schema13compile__nodeN6constrS1466 = new _M0DTP311QuietlyChan10moonschema6schema4Node8BoolNode(true);
const _M0FP311QuietlyChan10moonschema6schema13compile__nodeN6constrS1467 = new _M0DTP311QuietlyChan10moonschema6schema4Node8BoolNode(false);
const _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1468 = true;
const _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1469 = false;
const _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1470 = true;
const _M0FP311QuietlyChan10moonschema6schema20compile__schema__mapN6constrS1471 = 16;
const _M0FP311QuietlyChan10moonschema6schema15compile_2einnerN6constrS1489 = 16;
const _M0FPC16string18re__profile__utf16 = _M0MPC38internal13regex__engine13shared__types7Profile15Profile_2einner(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(0, 65535), _M0FPC16string20re__profile__unicode.word, [_M0FPC16string9word__set, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(55296, 56319), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(56320, 57343)], (c) => {
  if (c >= 55296 && c <= 56319) {
    return 4;
  } else {
    if (c >= 56320 && c <= 57343) {
      return 8;
    } else {
      const _func = _M0FPC16string20re__profile__unicode.category;
      return _func(c);
    }
  }
});
const _M0FPC38internal13regex__engine8automata11rand__state = _M0MPC13ref3Ref3RefGiE(0);
const _M0FPC38internal13regex__engine8automata9st__dummy = new _M0TPC38internal13regex__engine8automata5State(_M0MPC38internal13regex__engine8automata4Slot10unassignedN6recordS781, -1, _M0FPC38internal13regex__engine8automata9ts__empty, -1);
const _M0FP311QuietlyChan10moonschema5rules7resolveN6constrS622 = new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(true);
const _M0FP311QuietlyChan10moonschema5rules7resolveN6constrS623 = new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(false);
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS624 = -1;
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS625 = 1;
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS626 = 0;
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS627 = -1;
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS628 = 1;
const _M0FP311QuietlyChan10moonschema5rules5orderN6constrS629 = 0;
const _M0FP311QuietlyChan10moonschema5rules4evalN6constrS630 = new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(false);
const _M0FP311QuietlyChan10moonschema5rules4evalN6constrS631 = new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(true);
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1472 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("prefixItems");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1473 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("items");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1474 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("contains");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1475 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("properties");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1476 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("patternProperties");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1477 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("additionalProperties");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1478 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("propertyNames");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1479 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("dependentSchemas");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1480 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("allOf");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1481 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("anyOf");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1482 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("oneOf");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1483 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("not");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1484 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("if");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1485 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("then");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1486 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("else");
const _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1487 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("x-rules");
const _M0MP311QuietlyChan10moonschema6schema6Schema8validateN6constrS1488 = new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey("#");
const _M0FP311QuietlyChan10moonschema10playground8registryN6constrS81 = 8;
const _bind = [];
const _M0FP311QuietlyChan10moonschema10playground8registry = _M0MPB3Map3MapGiRP311QuietlyChan10moonschema6schema6SchemaE(new _M0TPB9ArrayViewGUiRP311QuietlyChan10moonschema6schema6SchemaEE(_bind, 0, 0), _M0FP311QuietlyChan10moonschema10playground8registryN6constrS81);
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = _M0FPB13consume4__acc(self.acc, input);
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPC15array10FixedArray12unsafe__blitGRPC38internal13regex__engine8automata5StateE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB13StringBuilder13write__objectGRPC14json10ParseErrorE(self, obj) {
  _M0IPC14json10ParseErrorPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRP311QuietlyChan10moonschema6schema12CompileErrorE(self, obj) {
  _M0IP311QuietlyChan10moonschema6schema12CompileErrorPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGcE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGcE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3947(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3947((b / _p | 0) & 255));
  const _p$2 = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3947((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      const _p = self.str.charCodeAt(abs_start);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      const _p = self.str.charCodeAt(abs_end);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata5StateE(self, value) {
  _M0IPC38internal13regex__engine8automata5StatePB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGURPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetEE(self, value) {
  _M0IPC15tuple6Tuple3PB4Hash13hash__combineGRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetE(value, self);
}
function _M0MPB6Hasher7combineGiE(self, value) {
  _M0IPC13int3IntPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata4SlotE(self, value) {
  _M0IPC38internal13regex__engine8automata4SlotPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine13shared__types8CategoryE(self, value) {
  _M0IPC38internal13regex__engine13shared__types8CategoryPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata9ThreadSetE(self, value) {
  _M0IPC38internal13regex__engine8automata9ThreadSetPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata6ThreadE(self, value) {
  _M0IPC38internal13regex__engine8automata6ThreadPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata4MarkE(self, value) {
  _M0IPC38internal13regex__engine8automata4MarkPB4Hash13hash__combine(value, self);
}
function _M0IPC15tuple6Tuple3PB4Hash13hash__combineGRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetE(self, hasher) {
  const _a = self._0;
  const _b = self._1;
  const _c = self._2;
  _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata4SlotE(hasher, _a);
  _M0MPB6Hasher7combineGRPC38internal13regex__engine13shared__types8CategoryE(hasher, _b);
  _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata9ThreadSetE(hasher, _c);
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self, other) {
  const _p = self._0;
  const _p$2 = other._0;
  if (_p === _p$2) {
    const _p$3 = self._1;
    const _p$4 = other._1;
    return _p$3 === _p$4;
  } else {
    return false;
  }
}
function _M0IP016_24default__implPB2Eq10not__equalGORPC111sorted__set4NodeGiEE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRPC111sorted__set4NodeGiEE(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) > 0;
}
function _M0MPB6Hasher14Hasher_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher6Hasher(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher14Hasher_2einner(seed);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB6Hasher8finalize(self) {
  return _M0FPB13finalize__acc(self.acc);
}
function _M0IP016_24default__implPB4Hash4hashGRPC38internal13regex__engine8automata5StateE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata5StateE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGURPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetEE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGURPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetEE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      const _p = self.charCodeAt(start);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGcE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC14char4CharPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9809GUsRPB4JsonEE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9808GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9809GcE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9808GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGiE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$2 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9809GiE;
  } else {
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9808GiE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9816GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9816GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGiE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9816GiE;
  }
  return new _M0TPB4IterGiE(f, size_hint$2);
}
function _M0MPC16string10StringView11code__units(self) {
  const _p = self.str.length;
  let _bind$2;
  if (_p <= 0) {
    _bind$2 = [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, self.str.charCodeAt(_p$2));
    let _tmp = 1;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p) {
        $bound_check(_p$3, _p$4);
        _p$3[_p$4] = self.str.charCodeAt(_p$4);
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _bind$2 = _p$3;
  }
  const _bind$3 = self.start;
  const _bind$4 = self.end;
  const _bind$5 = _bind$2.length;
  if (_bind$3 < 0 || (_bind$3 > _bind$4 || _bind$4 > _bind$5)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind$2, _bind$3, _bind$4);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPB13StringBuilder5reset(self) {
  self.val = "";
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC15array5Array4pushGRPB4JsonE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP311QuietlyChan10moonschema6schema8JsonTypeE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGRP311QuietlyChan10moonschema5rules7PathSegEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (c >= 55296 && c <= 56319) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return next >= 56320 && next <= 57343 ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return c >= 56320 && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind$2 = $compare_int(len, other.length);
  if (_bind$2 === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _p = self.charCodeAt(i);
        const _p$2 = other.charCodeAt(i);
        const order = $compare_int(_p, _p$2);
        if (order !== 0) {
          return order;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind$2;
  }
}
function _M0MPC16string6String9to__array(self) {
  const _p = _M0MPC16string6String4iter(self);
  const _p$2 = [];
  let _p$3 = _p$2;
  while (true) {
    const _p$4 = _M0MPB4Iter4nextGcE(_p);
    if (_p$4 === -1) {
      break;
    } else {
      const _p$5 = _p$4;
      const _p$6 = _p$5;
      const _p$7 = _p$3;
      _M0MPC15array5Array4pushGcE(_p$7, _p$6);
      _p$3 = _p$7;
      continue;
    }
  }
  return _p$3;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGRPC46string8internal13regex__engine3ast7PatternE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array10FixedArray4iterGRPC46string8internal13regex__engine3ast7PatternE(self) {
  return _M0MPC15array9ArrayView4iterGRPC46string8internal13regex__engine3ast7PatternE(new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(self, 0, self.length));
}
function _M0MPC15array10FixedArray11from__arrayGiE(array) {
  const _p = array.end - array.start | 0;
  if (_p <= 0) {
    return [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, array.buf[array.start + _p$2 | 0]);
    let _tmp = 1;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p) {
        $bound_check(_p$3, _p$4);
        _p$3[_p$4] = array.buf[array.start + _p$4 | 0];
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$3;
  }
}
function _M0MPC15array10FixedArray11from__arrayGOsE(array) {
  const _p = array.end - array.start | 0;
  if (_p <= 0) {
    return [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, array.buf[array.start + _p$2 | 0]);
    let _tmp = 1;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p) {
        $bound_check(_p$3, _p$4);
        _p$3[_p$4] = array.buf[array.start + _p$4 | 0];
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$3;
  }
}
function _M0MPC15array10FixedArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(array) {
  const _p = array.end - array.start | 0;
  if (_p <= 0) {
    return [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, array.buf[array.start + _p$2 | 0]);
    let _tmp = 1;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p) {
        $bound_check(_p$3, _p$4);
        _p$3[_p$4] = array.buf[array.start + _p$4 | 0];
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$3;
  }
}
function _M0MPC15array13ReadOnlyArray11from__arrayGOsE(array) {
  return _M0MPC15array10FixedArray11from__arrayGOsE(array);
}
function _M0MPC15array13ReadOnlyArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(array) {
  return _M0MPC15array10FixedArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(array);
}
function _M0MPC15array13ReadOnlyArray11from__arrayGiE(array) {
  return _M0MPC15array10FixedArray11from__arrayGiE(array);
}
function _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE(self) {
  return _M0MPC15array10FixedArray4iterGRPC46string8internal13regex__engine3ast7PatternE(self);
}
function _M0MPC15array13ReadOnlyArray4eachGRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  const _p = self;
  const _p$2 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _p[_p$3];
      f(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array13ReadOnlyArray3mapGRPC46string8internal13regex__engine3ast7PatternRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  const _p = self;
  if (_p.length === 0) {
    return [];
  }
  const _p$2 = _p.length;
  const _p$3 = $make_array_len_and_init(_p$2, f(_p[0]));
  let _tmp = 1;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$2) {
      _p$3[_p$4] = f(_p[_p$4]);
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p$3;
}
function _M0MPC15array10FixedArray3allGRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  const _p = new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(self, 0, self.length);
  const _p$2 = _p.end - _p.start | 0;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _p.buf[_p.start + _p$3 | 0];
      if (!f(_p$4)) {
        return false;
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array13ReadOnlyArray3allGRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  return _M0MPC15array10FixedArray3allGRPC46string8internal13regex__engine3ast7PatternE(self, f);
}
function _M0MPC15array10FixedArray3anyGRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  const _p = new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(self, 0, self.length);
  const _p$2 = _p.end - _p.start | 0;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _p.buf[_p.start + _p$3 | 0];
      if (f(_p$4)) {
        return true;
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array13ReadOnlyArray3anyGRPC46string8internal13regex__engine3ast7PatternE(self, f) {
  return _M0MPC15array10FixedArray3anyGRPC46string8internal13regex__engine3ast7PatternE(self, f);
}
function _M0IPC16option6OptionPB2Eq5equalGRPC111sorted__set4NodeGiEE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x.value === _y.value;
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option10unwrap__orGiE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGiRP311QuietlyChan10moonschema6schema6SchemaE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGiRP311QuietlyChan10moonschema6schema6SchemaE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$5 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGsEE(_bind$4, 0, capacity$2, _bind$2, _bind$3, _bind$5, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$2);
    const _p = _tmp[_bind$2];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$2);
    const _p = _tmp[_bind$2];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry) {
  const _bind$2 = self.tail;
  if (_bind$2 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$2);
    const _p = _tmp[_bind$2];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGiRP311QuietlyChan10moonschema6schema6SchemaE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP311QuietlyChan10moonschema6schema6SchemaE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP311QuietlyChan10moonschema6schema6SchemaE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP311QuietlyChan10moonschema6schema6SchemaE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGiRP311QuietlyChan10moonschema6schema6SchemaE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP311QuietlyChan10moonschema6schema6SchemaE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP311QuietlyChan10moonschema6schema6SchemaE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGiRP311QuietlyChan10moonschema6schema6SchemaE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP311QuietlyChan10moonschema6schema6SchemaE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGiRP311QuietlyChan10moonschema6schema6SchemaE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP311QuietlyChan10moonschema6schema6SchemaE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRP311QuietlyChan10moonschema6schema6SchemaE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRP311QuietlyChan10moonschema6schema6SchemaE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$3 = self.tail;
      const _bind$4 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$3, _bind$4, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$3 = self.tail;
        const _bind$4 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$3, _bind$4, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGiRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP311QuietlyChan10moonschema6schema6SchemaE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP311QuietlyChan10moonschema6schema6SchemaE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGiRP311QuietlyChan10moonschema6schema6SchemaE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP311QuietlyChan10moonschema6schema6SchemaE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP311QuietlyChan10moonschema6schema6SchemaE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP311QuietlyChan10moonschema6schema6SchemaE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiRP311QuietlyChan10moonschema6schema6SchemaE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP311QuietlyChan10moonschema6schema6SchemaE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP311QuietlyChan10moonschema6schema6SchemaE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGiE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map4iterGsRPB5ArrayGsEE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB5ArrayGsEEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$2 = curr_entry.val;
        if (_bind$2 === undefined) {
          break _L;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPB4JsonE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0MPB3Map5iter2GsRPB5ArrayGsEE(self) {
  return _M0MPB3Map4iterGsRPB5ArrayGsEE(self);
}
function _M0MPB4Iter9flat__mapGRPC38internal13regex__engine8automata6ThreadRPC38internal13regex__engine8automata11MarkSlotMapE(self, f) {
  const current_iter = new _M0TPB8MutLocalGORPB4IterGRPC38internal13regex__engine8automata11MarkSlotMapEE(_M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE([]));
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    const _bind$2 = current_iter.val;
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _iter = _Some;
      let _tmp = _M0MPB4Iter4nextGUsRPB4JsonEE(_iter);
      while (true) {
        const x = _tmp;
        if (x === undefined) {
          const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
          if (_bind$3 === undefined) {
            return undefined;
          } else {
            const _Some$2 = _bind$3;
            const _x = _Some$2;
            const iter = f(_x);
            current_iter.val = iter;
            _tmp = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
            continue;
          }
        } else {
          const _Some$2 = x;
          return _Some$2;
        }
      }
    }
  }, undefined);
}
function _M0MPB5Iter24nextGsRPB4JsonE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPB5Iter24nextGsRPB5ArrayGsEE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPB5Iter24nextGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC13int3Int8to__char(self) {
  _L: {
    if (self >= 0 && self <= 55295) {
      break _L;
    } else {
      if (self >= 57344 && self <= 1114111) {
        break _L;
      } else {
        return -1;
      }
    }
  }
  return self;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$2 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC15array10FixedArray16blit__to_2einnerGRPC38internal13regex__engine8automata5StateE(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    _M0MPC15array10FixedArray12unsafe__blitGRPC38internal13regex__engine8automata5StateE(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(88);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", self.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
    $panic();
    return;
  }
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0IPC16double6DoublePB3Mod3mod(self, other) {
  return _M0MPC16double6Double8mod__ffi(self, other);
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (55296 <= self$2 && self$2 <= 57343) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return buf.val;
}
function _M0MPC15array5Array29unsafe__resize__with__defaultGiE(self, new_len, value) {
  const len = self.length;
  if (new_len >= len) {
    _M0MPB7JSArray11set__length(self, new_len);
    let _tmp = len;
    while (true) {
      const i = _tmp;
      if (i < new_len) {
        self[i] = value;
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP311QuietlyChan10moonschema6schema8JsonTypeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array4makeGiE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3getGRP311QuietlyChan10moonschema5rules5TokenE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array6resizeGiE(self, new_len, f) {
  if (new_len < 0) {
    $panic();
  }
  const len = self.length;
  if (new_len < len) {
    _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len);
    return;
  } else {
    if (new_len > len) {
      _M0MPC15array5Array29unsafe__resize__with__defaultGiE(self, new_len, f);
      return;
    } else {
      return;
    }
  }
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$2 = s$2;
      if ((_bind$2.end - _bind$2.start | 0) >= 1) {
        const _x = _bind$2.str.charCodeAt(_bind$2.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$2 = s$2;
    if ((_bind$2.end - _bind$2.start | 0) >= 1) {
      const _x = _bind$2.str.charCodeAt(_bind$2.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$3 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$3._0;
        const _exp_num = _bind$3._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if ((s$2.end - s$2.start | 0) === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$2 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) >= 1) {
    const _x = _bind$3.str.charCodeAt(_bind$3.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
      s$3 = _x$2;
      const _bind$4 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$4 = s$3;
      if ((_bind$4.end - _bind$4.start | 0) >= 1) {
        const _x = _bind$4.str.charCodeAt(_bind$4.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number_val = _bind$5._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$4 = s$3;
  if ((_bind$4.end - _bind$4.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$5 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$7 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      const _p = _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
      _state_300 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312[_p];
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _accept_state_298;
  switch (_bind$2) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          const _p = _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0;
          _state_218 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230[_p];
          continue;
        } else {
          break;
        }
      }
      const _bind$2 = _accept_state_216;
      switch (_bind$2) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$2 = rest_start + 1 | 0;
                          _tmp$2 = _bind$2;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$2 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$2;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  $bound_check(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_hi = _M0FPC28internal7strconv27eisel__lemire__pow10__table[table_index];
  const _p = table_index + 1 | 0;
  $bound_check(_M0FPC28internal7strconv27eisel__lemire__pow10__table, _p);
  const pow_lo = _M0FPC28internal7strconv27eisel__lemire__pow10__table[_p];
  const pow_exp2 = 1 + (Math.imul(exponent$2, 108853) >> 15) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(top_bit + 9 & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      const _p = _tmp$2[_tmp$3];
      const _p$2 = 0;
      _tmp = _p === _p$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind$2 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  $bound_check(_tmp$2, _tmp$3);
                  _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$2 = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          rest$3 = _ok._0;
        } else {
          return _bind$2;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      $bound_check(_tmp$4, i);
      const _p = _tmp$4[i];
      _tmp = BigInt.asUintN(64, _tmp$3 + BigInt.asUintN(64, BigInt(_p)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  $bound_check(_M0FPC28internal7strconv19left__shift__cheats, s);
  const new_digits = _M0FPC28internal7strconv19left__shift__cheats[s]._0;
  $bound_check(_M0FPC28internal7strconv19left__shift__cheats, s);
  const cheat_num = _M0FPC28internal7strconv19left__shift__cheats[s]._1;
  const _bind$2 = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const _p = _tmp[_tmp$2];
      const d = BigInt.asUintN(64, BigInt(_p));
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = self.decimal_point;
        $bound_check(_M0FPC28internal7strconv6powtab, _p);
        n = _M0FPC28internal7strconv6powtab[_p];
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = -self.decimal_point | 0;
        $bound_check(_M0FPC28internal7strconv6powtab, _p);
        n = _M0FPC28internal7strconv6powtab[_p];
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  const _p = exponent & 31;
  $bound_check(_M0FPC28internal7strconv5table, _p);
  return _M0FPC28internal7strconv5table[_p];
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _tmp = self.mantissa;
      const _p = Number(BigInt.asIntN(32, shift)) | 0;
      $bound_check(_M0FPC28internal7strconv10int__pow10, _p);
      const _bind$2 = _M0FPC28internal7strconv12checked__mul(_tmp, _M0FPC28internal7strconv10int__pow10[_p]);
      if (_bind$2 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$2;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!((str.end - str.start | 0) === 0)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$2 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_bind$3 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$3;
        const _num = _Some;
        const _bind$4 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$4.$tag === 1) {
          const _Some$2 = _bind$4;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (fast !== fast) {
            const _bind$5 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp = _ok._0;
            } else {
              return _bind$5;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$2 = _M0MPC16string10StringView11code__units(input);
  const _bind$3 = _bind$2.end - _bind$2.start | 0;
  if (offset < 0 || offset > _bind$3) {
    $panic();
  }
  const _bind$4 = new _M0TPB9ArrayViewGkE(_bind$2.buf, _bind$2.start, offset + _bind$2.start | 0);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$5) {
      const code_unit = _bind$4.buf[_bind$4.start + _ | 0];
      const _p = 10;
      if (code_unit === _p) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0IPC14json10ParseErrorPB4Show6output(self, logger) {
  switch (self.$tag) {
    case 4: {
      const _InvalidChar = self;
      const _x = _InvalidChar._0;
      const _line = _x.line;
      const _column = _x.column;
      const _c = _InvalidChar._1;
      logger.method_table.method_0(logger.self, "Invalid character ");
      logger.method_table.method_4(logger.self, { self: _M0MPC14char4Char14escape_2einner(_c, true), method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 3: {
      logger.method_table.method_0(logger.self, "Unexpected end of file");
      return;
    }
    case 2: {
      const _InvalidNumber = self;
      const _x$2 = _InvalidNumber._0;
      const _line$2 = _x$2.line;
      const _column$2 = _x$2.column;
      const _s = _InvalidNumber._1;
      logger.method_table.method_0(logger.self, "Invalid number ");
      logger.method_table.method_4(logger.self, { self: _s, method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 1: {
      const _InvalidIdentEscape = self;
      const _x$3 = _InvalidIdentEscape._0;
      const _line$3 = _x$3.line;
      const _column$3 = _x$3.column;
      logger.method_table.method_0(logger.self, "Invalid escape sequence in identifier at line ");
      logger.method_table.method_4(logger.self, { self: _line$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    default: {
      logger.method_table.method_0(logger.self, "Depth limit exceeded, please increase the max_nesting_depth parameter");
      return;
    }
  }
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind$2 = ctx.input;
      const _bind$3 = _bind$2.str.charCodeAt(_bind$2.start + offset | 0);
      switch (_bind$3) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1825;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  const _p = exponent & 31;
  $bound_check(_M0FPC14json12pow10__table, _p);
  return _M0FPC14json12pow10__table[_p];
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _tmp = self.mantissa;
    const _p = Number(BigInt.asIntN(32, shift)) | 0;
    $bound_check(_M0FPC14json17int__pow10__table, _p);
    const _bind$2 = _M0FPC14json12checked__mul(_tmp, _M0FPC14json17int__pow10__table[_p]);
    if (_bind$2 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$2;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$2 = ctx.input;
  const _p = _bind$2.str.charCodeAt(_bind$2.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$3 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, _bind$3);
    }
    const _bind$3 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$3.str.charCodeAt(_bind$3.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$4 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          value = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L;
        }
        const _bind$5 = s;
        return new _M0TPC14json11LexedNumber(_bind$5, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double13neg__infinity);
      } else {
        const _bind$4 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$2 = ctx.input;
  const _p = _bind$2.str.charCodeAt(_bind$2.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$3 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$4 = ctx.input;
          const _bind$5 = _bind$4.str.charCodeAt(_bind$4.start + i | 0);
          if (_bind$5 >= 48 && _bind$5 <= 57) {
            const digit = _bind$5 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$5 === 46) {
              has_decimal = true;
            } else {
              if (_bind$5 === 101) {
                break _L$2;
              } else {
                if (_bind$5 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$4 = ctx.input;
          const next = _bind$4.str.charCodeAt(_bind$4.start + (i + 1 | 0) | 0);
          const _p$3 = 45;
          if (next === _p$3) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!(fast !== fast)) {
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!(fast$2 !== fast$2)) {
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$2 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      d = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$3, d);
  }
  if (scan.negative) {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double13neg__infinity);
  } else {
    const _bind$2 = s;
    return new _M0TPC14json11LexedNumber(_bind$2, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$2 = ctx.input;
    const c1 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$3 = ctx.input;
        const c2 = _bind$3.str.charCodeAt(_bind$3.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$2 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x === 46) {
          const _bind$3 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$2 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$2 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _p = _x;
              const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -(_p <= 65535 ? 1 : 2) | 0);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                d = _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS330(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS330(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS330(_env, ctx.offset - 1 | 0);
          const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$3 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$3;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$4 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  c = _ok._0;
                } else {
                  return _bind$4;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$5;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$6 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$6;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$7.$tag === 1) {
                        const _ok = _bind$7;
                        _ok._0;
                      } else {
                        return _bind$7;
                      }
                    }
                  }
                  const _bind$7 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$7.$tag === 1) {
                    const _ok = _bind$7;
                    c2 = _ok._0;
                  } else {
                    return _bind$7;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      _ok._0;
                    } else {
                      return _bind$8;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _ok._0;
                    } else {
                      return _bind$5;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _p = _x$2;
                const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -(_p <= 65535 ? 1 : 2) | 0);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(buf.val);
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$2 = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = ctx.input;
      const c = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
      const _p = 34;
      if (c === _p) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        const _p$2 = 92;
        if (c === _p$2) {
          const _bind$4 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$2 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$3 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$3;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$4 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$5;
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _bind$5 = _ok._0;
                      } else {
                        return _bind$4;
                      }
                      const _n = _bind$5.value;
                      const _repr = _bind$5.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$4 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$5;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind$5 = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        const _n = _bind$5.value;
                        const _repr = _bind$5.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$4;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _bind$4 = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    const _n = _bind$4.value;
                    const _repr = _bind$4.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          s = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const _p = _x;
                        const shift = -(_p <= 65535 ? 1 : 2) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          s = _ok._0;
        } else {
          return _bind$3;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x === 34) {
      const _bind$3 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        s = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    tok = _ok._0;
  } else {
    return _bind$2;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        const _p = true;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 2: {
        const _p$2 = false;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p$2 ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6Number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6String(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok($panic());
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = new _M0DTPB4Json5Array(vec);
      break;
    } else {
      const _bind$3 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(vec, _tmp$4);
      const _bind$4 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        tok2 = _ok._0;
      } else {
        return _bind$4;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$5 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$3 = _ok._0;
          } else {
            return _bind$5;
          }
          continue _L;
        }
        case 8: {
          _tmp = new _M0DTPB4Json5Array(vec);
          break _L;
        }
        default: {
          $panic();
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$2 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 0), undefined);
  let _tmp;
  const _bind$3 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = new _M0DTPB4Json6Object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$4 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$5 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$4 = _ok._0;
        } else {
          return _bind$5;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$6 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          return _bind$6;
        }
        switch (_bind$7.$tag) {
          case 9: {
            const _bind$8 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$3 = _ok._0;
            } else {
              return _bind$8;
            }
            continue _L;
          }
          case 6: {
            _tmp = new _M0DTPB4Json6Object(map);
            break _L;
          }
          default: {
            $panic();
          }
        }
        break;
      }
      default: {
        $panic();
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$2 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    val = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      let _tmp$2;
      const _p = 34;
      if (code === _p) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        const _p$2 = 92;
        if (code === _p$2) {
          _tmp$3 = true;
        } else {
          let _tmp$4;
          if (code < 32) {
            _tmp$4 = true;
          } else {
            let _tmp$5;
            if (escape_slash) {
              const _p$3 = 47;
              _tmp$5 = code === _p$3;
            } else {
              _tmp$5 = false;
            }
            _tmp$4 = _tmp$5;
          }
          _tmp$3 = _tmp$4;
        }
        _tmp$2 = _tmp$3;
      }
      if (_tmp$2) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json6escape(str, escape_slash) {
  const len = str.length;
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    return str;
  }
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const _bind$2 = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, code);
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0FPC14json11indent__str(level, indent) {
  if (indent === 0) {
    return "";
  } else {
    const spaces = Math.imul(indent, level) | 0;
    switch (spaces) {
      case 0: {
        return "\n";
      }
      case 1: {
        return "\n ";
      }
      case 2: {
        return "\n  ";
      }
      case 3: {
        return "\n   ";
      }
      case 4: {
        return "\n    ";
      }
      case 5: {
        return "\n     ";
      }
      case 6: {
        return "\n      ";
      }
      case 7: {
        return "\n       ";
      }
      case 8: {
        return "\n        ";
      }
      default: {
        return `\n${_M0MPC16string6String6repeat(" ", spaces)}`;
      }
    }
  }
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPB4JsonE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind$2 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind$2;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$3 = _func(_k, _v);
              if (_bind$3 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$3;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_k, escape_slash));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.length === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_s, escape_slash));
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0FPC17hashmap12new__hashmapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$3 = capacity$2 - 1 | 0;
  return new _M0TPC17hashmap7HashMapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(_bind$2, capacity$2, _bind$3, 0);
}
function _M0MPC17hashmap7HashMap10push__awayGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      self.entries[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        self.entries[idx$2] = entry$2;
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap20rehash__place__entryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, entry) {
  const hash = entry.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      entry.psl = psl;
      self.entries[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashmap7HashMap10push__awayGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, idx, _curr);
        entry.psl = psl;
        self.entries[idx] = entry;
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap4growGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _bind$2 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashmap7HashMap20rehash__place__entryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, _entry);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(psl, hash, key, value);
      self.entries[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IPC38internal13regex__engine8automata5StatePB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(psl, hash, key, value);
        self.entries[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap3setGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRPC38internal13regex__engine8automata5StateE(key));
}
function _M0FPC17hashmap21capacity__for__length(length) {
  return _M0MPC13int3Int20next__power__of__two(Math.imul(length, 2) | 0);
}
function _M0MPC17hashmap7HashMap7HashMapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(m, _p$3._0, _p$3._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap13get__or__initGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, key, init) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRPC38internal13regex__engine8automata5StateE(key);
  let idx;
  let psl;
  let new_value;
  let push_away;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _bind$2 = self.entries[idx$2];
      if (_bind$2 === undefined) {
        const new_value$2 = init();
        idx = idx$2;
        psl = psl$2;
        new_value = new_value$2;
        push_away = undefined;
        break _L;
      } else {
        const _Some = _bind$2;
        const _entry = _Some;
        if (_entry.hash === hash && _M0IPC38internal13regex__engine8automata5StatePB2Eq5equal(_entry.key, key)) {
          return _entry.value;
        }
        if (psl$2 > _entry.psl) {
          const new_value$2 = init();
          idx = idx$2;
          psl = psl$2;
          new_value = new_value$2;
          push_away = _entry;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  if (self.size >= (self.capacity / 2 | 0)) {
    _M0MPC17hashmap7HashMap4growGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self);
    _M0MPC17hashmap7HashMap15set__with__hashGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, key, new_value, hash);
  } else {
    if (push_away === undefined) {
    } else {
      const _Some = push_away;
      const _entry = _Some;
      _M0MPC17hashmap7HashMap10push__awayGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self, idx, _entry);
    }
    const entry = new _M0TPC17hashmap5EntryGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(psl, hash, key, new_value);
    self.entries[idx] = entry;
    self.size = self.size + 1 | 0;
  }
  return new_value;
}
function _M0FPC17hashset12new__hashsetGiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$2 = capacity$2 - 1 | 0;
  const _bind$3 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$4 = $make_array_len_and_init(capacity$2, undefined);
  return new _M0TPC17hashset7HashSetGiE(_bind$4, 0, capacity$2, _bind$2, _bind$3);
}
function _M0FPC17hashset21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC17hashset7HashSet10push__awayGiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$2 = self.entries[idx$2];
    if (_bind$2 === undefined) {
      entry$2.psl = psl;
      self.entries[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        self.entries[idx$2] = entry$2;
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet20rehash__place__entryGiE(self, entry) {
  const hash = entry.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      entry.psl = psl;
      self.entries[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$2;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashset7HashSet10push__awayGiE(self, idx, _curr);
        entry.psl = psl;
        self.entries[idx] = entry;
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet4growGiE(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  const new_capacity = Math.imul(self.capacity, 2) | 0;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  const _bind$2 = old_entries.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashset7HashSet20rehash__place__entryGiE(self, _entry);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashset7HashSet15add__with__hashGiE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGiE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _bind$2 = self.entries[idx$2];
      if (_bind$2 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$2;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGiE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGiE(psl, hash, key);
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet3addGiE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGiE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC17hashset7HashSet7HashSetGiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  let capacity$3;
  _L: {
    if (capacity === undefined) {
      capacity$3 = 8;
      break _L;
    } else {
      const _Some = capacity;
      const _capacity = _Some;
      capacity$3 = _capacity;
      break _L;
    }
  }
  const _p = _M0FPC17hashset21capacity__for__length(length);
  capacity$2 = capacity$3 > _p ? capacity$3 : _p;
  const m = _M0FPC17hashset12new__hashsetGiE(capacity$2);
  const _p$2 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = arr.buf[arr.start + _p$3 | 0];
      _M0MPC17hashset7HashSet3addGiE(m, _p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet8containsGiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$2 = self.entries[idx];
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _Tree = self;
    return _Tree._2;
  }
}
function _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, r) {
  const size = (_M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(l) + _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(r) | 0) + 1 | 0;
  return new _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE4Tree(key, value, size, l, r);
}
function _M0MPC25immut11sorted__map9SortedMap3mapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata4SlotE(self, f) {
  if (self.$tag === 0) {
    return _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty__;
  } else {
    const _Tree = self;
    const _k = _Tree._0;
    const _value = _Tree._1;
    const _l = _Tree._3;
    const _r = _Tree._4;
    const _size = _Tree._2;
    return new _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE4Tree(_k, f(_k, _value), _size, _M0MPC25immut11sorted__map9SortedMap3mapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata4SlotE(_l, f), _M0MPC25immut11sorted__map9SortedMap3mapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata4SlotE(_r, f));
  }
}
function _M0FPC25immut11sorted__map7balanceGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, r) {
  const ln = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(l);
  const rn = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(r);
  if ((ln + rn | 0) < 2) {
    return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, r);
  } else {
    if (rn > (Math.imul(5, ln) | 0)) {
      if (r.$tag === 1) {
        const _Tree = r;
        const _rl = _Tree._3;
        const _rr = _Tree._4;
        const rln = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_rl);
        const rrn = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_rr);
        if (rln < rrn) {
          if (r.$tag === 1) {
            const _Tree$2 = r;
            const _k2 = _Tree$2._0;
            const _v2 = _Tree$2._1;
            const _y = _Tree$2._3;
            const _z = _Tree$2._4;
            return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k2, _v2, _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, _y), _z);
          } else {
            return $panic();
          }
        } else {
          _L: {
            if (r.$tag === 1) {
              const _Tree$2 = r;
              const _k3 = _Tree$2._0;
              const _v3 = _Tree$2._1;
              const _x = _Tree$2._3;
              if (_x.$tag === 1) {
                const _Tree$3 = _x;
                const _k2 = _Tree$3._0;
                const _v2 = _Tree$3._1;
                const _y1 = _Tree$3._3;
                const _y2 = _Tree$3._4;
                const _z = _Tree$2._4;
                return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k2, _v2, _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, _y1), _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k3, _v3, _y2, _z));
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return $panic();
        }
      } else {
        return $panic();
      }
    } else {
      if (ln > (Math.imul(5, rn) | 0)) {
        if (l.$tag === 1) {
          const _Tree = l;
          const _ll = _Tree._3;
          const _lr = _Tree._4;
          const lln = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_ll);
          const lrn = _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_lr);
          if (lrn < lln) {
            if (l.$tag === 1) {
              const _Tree$2 = l;
              const _k1 = _Tree$2._0;
              const _v1 = _Tree$2._1;
              const _x = _Tree$2._3;
              const _y = _Tree$2._4;
              return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k1, _v1, _x, _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, _y, r));
            } else {
              return $panic();
            }
          } else {
            _L: {
              if (l.$tag === 1) {
                const _Tree$2 = l;
                const _k1 = _Tree$2._0;
                const _v1 = _Tree$2._1;
                const _x = _Tree$2._3;
                const _x$2 = _Tree$2._4;
                if (_x$2.$tag === 1) {
                  const _Tree$3 = _x$2;
                  const _k2 = _Tree$3._0;
                  const _v2 = _Tree$3._1;
                  const _y1 = _Tree$3._3;
                  const _y2 = _Tree$3._4;
                  return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k2, _v2, _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k1, _v1, _x, _y1), _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, _y2, r));
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return $panic();
          }
        } else {
          return $panic();
        }
      } else {
        return _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(key, value, l, r);
      }
    }
  }
}
function _M0MPC25immut11sorted__map9SortedMap3addGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self, key, value) {
  if (self.$tag === 0) {
    return new _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE4Tree(key, value, 1, _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty__, _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty__);
  } else {
    const _Tree = self;
    const _k = _Tree._0;
    const _v = _Tree._1;
    const _l = _Tree._3;
    const _r = _Tree._4;
    const c = $compare_int(key, _k);
    return c === 0 ? _M0FPC25immut11sorted__map10make__treeGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k, value, _l, _r) : c < 0 ? _M0FPC25immut11sorted__map7balanceGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k, _v, _M0MPC25immut11sorted__map9SortedMap3addGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_l, key, value), _r) : _M0FPC25immut11sorted__map7balanceGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_k, _v, _l, _M0MPC25immut11sorted__map9SortedMap3addGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_r, key, value));
  }
}
function _M0MPC25immut11sorted__map9SortedMap4iterGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self) {
  const curr_node = new _M0TPB8MutLocalGRPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotEE(self);
  const parents = [];
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    let _tmp = curr_node.val;
    while (true) {
      const x = _tmp;
      if (x.$tag === 1) {
        const _Tree = x;
        const _k = _Tree._0;
        const _value = _Tree._1;
        const _x = _Tree._3;
        if (_x.$tag === 0) {
          const _r = _Tree._4;
          curr_node.val = _r;
          return { _0: _k, _1: _value };
        } else {
          const _r = _Tree._4;
          _M0MPC15array5Array4pushGRPB4JsonE(parents, { _0: _k, _1: _value, _2: _r });
          _tmp = _x;
          continue;
        }
      } else {
        const _bind$2 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(parents);
        if (_bind$2 === undefined) {
          return undefined;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _k = _x._0;
          const _v = _x._1;
          const _r = _x._2;
          curr_node.val = _r;
          return { _0: _k, _1: _v };
        }
      }
    }
  }, _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self));
}
function _M0MPC25immut11sorted__map9SortedMap5iter2GRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self) {
  return _M0MPC25immut11sorted__map9SortedMap4iterGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self);
}
function _M0IPC25immut11sorted__map9SortedMapPB2Eq5equalGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self, other) {
  if (self === other) {
    return true;
  }
  if (_M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self) === _M0MPC25immut11sorted__map9SortedMap6lengthGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(other)) {
    const iter = _M0MPC25immut11sorted__map9SortedMap4iterGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self);
    const iter1 = _M0MPC25immut11sorted__map9SortedMap4iterGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(other);
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
      if (_bind$2 === undefined) {
        return true;
      } else {
        const _Some = _bind$2;
        const _a = _Some;
        const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter1);
        if (_bind$3 === undefined) {
          return true;
        } else {
          const _Some$2 = _bind$3;
          const _b = _Some$2;
          if (_M0IPC15tuple6Tuple2PB2Eq5equalGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_a, _b)) {
          } else {
            return false;
          }
          continue;
        }
      }
    }
  } else {
    return false;
  }
}
function _M0IPC25immut11sorted__map9SortedMapPB4Hash13hash__combineGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self, hasher) {
  const _it = _M0MPC25immut11sorted__map9SortedMap4iterGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _e = _Some;
      _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata4MarkE(hasher, _e._0);
      _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata4SlotE(hasher, _e._1);
      continue;
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(tree) {
  if (tree.$tag === 0) {
    return 1;
  } else {
    const _Node = tree;
    return _Node._4;
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(l, lo, hi, r) {
  const _p = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(l) + _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(r) | 0;
  return new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(l, lo, hi, r, _p);
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(l, lo, hi, r) {
  const lw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(l);
  const rw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(r);
  if (rw > (Math.imul(3, lw) | 0)) {
    if (r.$tag === 1) {
      const _Node = r;
      const rlw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node._0);
      const rrw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node._3);
      if (rlw < (Math.imul(2, rrw) | 0)) {
        const lw$2 = lw + rlw | 0;
        const _p = _Node._0;
        const _p$2 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(l, lo, hi, _p, lw$2);
        const _p$3 = _Node._1;
        const _p$4 = _Node._2;
        const _p$5 = _Node._3;
        const _p$6 = lw$2 + rrw | 0;
        return new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$2, _p$3, _p$4, _p$5, _p$6);
      } else {
        const _bind$2 = _Node._0;
        if (_bind$2.$tag === 1) {
          const _Node$2 = _bind$2;
          const lw$2 = lw + rlw | 0;
          const rw$2 = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node$2._3) + rrw | 0;
          const _p = _Node$2._0;
          const _p$2 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(l, lo, hi, _p, lw$2);
          const _p$3 = _Node$2._1;
          const _p$4 = _Node$2._2;
          const _p$5 = _Node$2._3;
          const _p$6 = _Node._1;
          const _p$7 = _Node._2;
          const _p$8 = _Node._3;
          const _p$9 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$5, _p$6, _p$7, _p$8, rw$2);
          const _p$10 = lw$2 + rw$2 | 0;
          return new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$2, _p$3, _p$4, _p$9, _p$10);
        } else {
          return $panic();
        }
      }
    } else {
      return $panic();
    }
  } else {
    if (lw > (Math.imul(3, rw) | 0)) {
      if (l.$tag === 1) {
        const _Node = l;
        const llw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node._0);
        const lrw = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node._3);
        if (lrw < (Math.imul(2, llw) | 0)) {
          const rw$2 = rw + lrw | 0;
          const _p = _Node._0;
          const _p$2 = _Node._1;
          const _p$3 = _Node._2;
          const _p$4 = _Node._3;
          const _p$5 = lrw + rw$2 | 0;
          const _p$6 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$4, lo, hi, r, _p$5);
          const _p$7 = llw + rw$2 | 0;
          return new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p, _p$2, _p$3, _p$6, _p$7);
        } else {
          const _bind$2 = _Node._3;
          if (_bind$2.$tag === 1) {
            const _Node$2 = _bind$2;
            const lw$2 = _M0FPC48internal13regex__engine13shared__types11rechar__set2nw(_Node$2._0) + llw | 0;
            const rw$2 = rw + lrw | 0;
            const _p = _Node._0;
            const _p$2 = _Node._1;
            const _p$3 = _Node._2;
            const _p$4 = _Node$2._0;
            const _p$5 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p, _p$2, _p$3, _p$4, lw$2);
            const _p$6 = _Node$2._1;
            const _p$7 = _Node$2._2;
            const _p$8 = _Node$2._3;
            const _p$9 = new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$8, lo, hi, r, rw$2);
            const _p$10 = lw$2 + rw$2 | 0;
            return new _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree4Node(_p$5, _p$6, _p$7, _p$9, _p$10);
          } else {
            return $panic();
          }
        }
      } else {
        return $panic();
      }
    } else {
      return _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(l, lo, hi, r);
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set3catN2goS164(_Node, r) {
  if (r.$tag === 0) {
    return $panic();
  } else {
    const _Node$2 = r;
    const _x = _Node$2._0;
    if (_x.$tag === 0) {
      const _lo = _Node$2._1;
      const _hi = _Node$2._2;
      const _r = _Node$2._3;
      return _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(_Node, _lo, _hi, _r);
    } else {
      const _Node$3 = _x;
      const _lo = _Node$2._1;
      const _hi = _Node$2._2;
      const _r = _Node$2._3;
      return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_M0FPC48internal13regex__engine13shared__types11rechar__set3catN2goS164(_Node, _Node$3), _lo, _hi, _r);
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set3cat(l, r) {
  if (l.$tag === 0) {
    return r;
  } else {
    if (r.$tag === 0) {
      return l;
    } else {
      const _Node = l;
      const _Node$2 = r;
      return _M0FPC48internal13regex__engine13shared__types11rechar__set3catN2goS164(_Node, _Node$2);
    }
  }
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(c) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__, c, c, _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(lo, hi) {
  return lo <= hi ? _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__, lo, hi, _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__) : $panic();
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9is__empty(self) {
  const _bind$2 = self;
  if (_bind$2.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set10complementN3auxS40(lo, hi, t) {
  if (t.$tag === 0) {
    return _M0FPC48internal13regex__engine13shared__types11rechar__set2nn(_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__, lo, hi, _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__);
  } else {
    const _Node = t;
    const _l = _Node._0;
    const _ilo = _Node._1;
    const _ihi = _Node._2;
    const _r = _Node._3;
    const p = _ilo - 1 | 0;
    const left = p < _ilo ? _M0FPC48internal13regex__engine13shared__types11rechar__set10complementN3auxS40(lo, p, _l) : _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
    const s = _ihi + 1 | 0;
    const right = s > _ihi ? _M0FPC48internal13regex__engine13shared__types11rechar__set10complementN3auxS40(s, hi, _r) : _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
    return _M0FPC48internal13regex__engine13shared__types11rechar__set3cat(left, right);
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set10complement(t) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set10complementN3auxS40(-2147483648, 2147483647, t);
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set11slice__from(t, c) {
  let _tmp = t;
  while (true) {
    const t$2 = _tmp;
    if (t$2.$tag === 0) {
      return _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
    } else {
      const _Node = t$2;
      const _l = _Node._0;
      const _lo = _Node._1;
      const _hi = _Node._2;
      const _r = _Node._3;
      if (c < _lo) {
        return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_M0FPC48internal13regex__engine13shared__types11rechar__set11slice__from(_l, c), _lo, _hi, _r);
      } else {
        if (c > _hi) {
          _tmp = _r;
          continue;
        } else {
          return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__, c, _hi, _r);
        }
      }
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__after(tree, c) {
  return (c + 1 | 0) <= c ? _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__ : _M0FPC48internal13regex__engine13shared__types11rechar__set11slice__from(tree, c + 1 | 0);
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__until(t, c) {
  let _tmp = t;
  while (true) {
    const t$2 = _tmp;
    if (t$2.$tag === 0) {
      return _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
    } else {
      const _Node = t$2;
      const _l = _Node._0;
      const _lo = _Node._1;
      const _hi = _Node._2;
      const _r = _Node._3;
      if (c < _lo) {
        _tmp = _l;
        continue;
      } else {
        return c > _hi ? _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_l, _lo, _hi, _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__until(_r, c)) : _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_l, _lo, c, _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__);
      }
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set13slice__before(t, c) {
  return (c - 1 | 0) >= c ? _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__ : _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__until(t, c - 1 | 0);
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set12intersection(t1, t2) {
  _L: {
    if (t1.$tag === 0) {
      break _L;
    } else {
      if (t2.$tag === 0) {
        break _L;
      } else {
        const _Node = t1;
        const _w1 = _Node._4;
        const _Node$2 = t2;
        const _w2 = _Node$2._4;
        let larger;
        let smaller;
        _L$2: {
          if (_w1 >= _w2) {
            larger = t1;
            smaller = t2;
            break _L$2;
          } else {
            larger = t2;
            smaller = t1;
            break _L$2;
          }
        }
        if (larger.$tag === 1) {
          const _Node$3 = larger;
          const _l = _Node$3._0;
          const _lo = _Node$3._1;
          const _hi = _Node$3._2;
          const _r = _Node$3._3;
          const left = _M0FPC48internal13regex__engine13shared__types11rechar__set12intersection(_l, _M0FPC48internal13regex__engine13shared__types11rechar__set13slice__before(smaller, _lo));
          const right = _M0FPC48internal13regex__engine13shared__types11rechar__set12intersection(_r, _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__after(smaller, _hi));
          const middle = _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__until(_M0FPC48internal13regex__engine13shared__types11rechar__set11slice__from(smaller, _lo), _hi);
          return _M0FPC48internal13regex__engine13shared__types11rechar__set3cat(left, _M0FPC48internal13regex__engine13shared__types11rechar__set3cat(middle, right));
        } else {
          return $panic();
        }
      }
    }
  }
  return _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set10difference(t1, t2) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set12intersection(t1, _M0FPC48internal13regex__engine13shared__types11rechar__set10complement(t2));
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set8leftmost(t) {
  let _tmp = t;
  while (true) {
    const cur = _tmp;
    if (cur.$tag === 0) {
      return undefined;
    } else {
      const _Node = cur;
      const _x = _Node._0;
      if (_x.$tag === 0) {
        const _lo = _Node._1;
        const _hi = _Node._2;
        return { _0: _lo, _1: _hi };
      } else {
        _tmp = _x;
        continue;
      }
    }
  }
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet15first__interval(self) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set8leftmost(self);
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set9rightmost(t) {
  let _tmp = t;
  while (true) {
    const cur = _tmp;
    if (cur.$tag === 0) {
      return undefined;
    } else {
      const _Node = cur;
      const _lo = _Node._1;
      const _hi = _Node._2;
      const _x = _Node._3;
      if (_x.$tag === 0) {
        return { _0: _lo, _1: _hi };
      } else {
        _tmp = _x;
        continue;
      }
    }
  }
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet14last__interval(self) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set9rightmost(self);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(self, c) {
  let _tmp = self;
  while (true) {
    const node = _tmp;
    if (node.$tag === 0) {
      return false;
    } else {
      const _Node = node;
      const _l = _Node._0;
      const _lo = _Node._1;
      const _hi = _Node._2;
      const _r = _Node._3;
      if (c < _lo) {
        _tmp = _l;
        continue;
      } else {
        if (c > _hi) {
          _tmp = _r;
          continue;
        } else {
          return true;
        }
      }
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set16try__merge__leftN16remove__leftmostS98(t) {
  if (t.$tag === 0) {
    return $panic();
  } else {
    const _Node = t;
    const _x = _Node._0;
    if (_x.$tag === 0) {
      return _Node._3;
    } else {
      const _lo = _Node._1;
      const _hi = _Node._2;
      const _r = _Node._3;
      return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_M0FPC48internal13regex__engine13shared__types11rechar__set16try__merge__leftN16remove__leftmostS98(_x), _lo, _hi, _r);
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set16try__merge__left(lo, t) {
  _L: {
    const _bind$2 = _M0FPC48internal13regex__engine13shared__types11rechar__set8leftmost(t);
    if (_bind$2 === undefined) {
      break _L;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _lo2 = _x._0;
      const _hi2 = _x._1;
      if ((_hi2 + 1 | 0) >= lo) {
        return { _0: _lo2, _1: _M0FPC48internal13regex__engine13shared__types11rechar__set16try__merge__leftN16remove__leftmostS98(t) };
      } else {
        break _L;
      }
    }
  }
  return { _0: lo, _1: t };
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set17try__merge__rightN17remove__rightmostS87(t) {
  if (t.$tag === 0) {
    return $panic();
  } else {
    const _Node = t;
    const _l = _Node._0;
    const _x = _Node._3;
    if (_x.$tag === 0) {
      return _l;
    } else {
      const _lo = _Node._1;
      const _hi = _Node._2;
      return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_l, _lo, _hi, _M0FPC48internal13regex__engine13shared__types11rechar__set17try__merge__rightN17remove__rightmostS87(_x));
    }
  }
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set17try__merge__right(hi, t) {
  _L: {
    const _bind$2 = _M0FPC48internal13regex__engine13shared__types11rechar__set9rightmost(t);
    if (_bind$2 === undefined) {
      break _L;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _lo2 = _x._0;
      const _hi2 = _x._1;
      if ((_lo2 - 1 | 0) <= hi) {
        return { _0: _hi2, _1: _M0FPC48internal13regex__engine13shared__types11rechar__set17try__merge__rightN17remove__rightmostS87(t) };
      } else {
        break _L;
      }
    }
  }
  return { _0: hi, _1: t };
}
function _M0FPC48internal13regex__engine13shared__types11rechar__set5union(t1, t2) {
  if (t1.$tag === 0) {
    return t2;
  } else {
    if (t2.$tag === 0) {
      return t1;
    } else {
      const _Node = t1;
      const _w1 = _Node._4;
      const _Node$2 = t2;
      const _w2 = _Node$2._4;
      let larger;
      let smaller;
      _L: {
        if (_w1 >= _w2) {
          larger = t1;
          smaller = t2;
          break _L;
        } else {
          larger = t2;
          smaller = t1;
          break _L;
        }
      }
      if (larger.$tag === 1) {
        const _Node$3 = larger;
        const _l = _Node$3._0;
        const _lo = _Node$3._1;
        const _hi = _Node$3._2;
        const _r = _Node$3._3;
        const p = _lo - 1 | 0;
        let _bind$2;
        if (p >= _lo) {
          _bind$2 = { _0: _lo, _1: _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__ };
        } else {
          const l = _M0FPC48internal13regex__engine13shared__types11rechar__set5union(_l, _M0FPC48internal13regex__engine13shared__types11rechar__set13slice__before(smaller, _lo));
          _bind$2 = _M0FPC48internal13regex__engine13shared__types11rechar__set16try__merge__left(_lo, l);
        }
        const _lo$2 = _bind$2._0;
        const _l$2 = _bind$2._1;
        const s = _hi + 1 | 0;
        let _bind$3;
        if (s <= _hi) {
          _bind$3 = { _0: _hi, _1: _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__ };
        } else {
          const r = _M0FPC48internal13regex__engine13shared__types11rechar__set5union(_r, _M0FPC48internal13regex__engine13shared__types11rechar__set12slice__after(smaller, _hi));
          _bind$3 = _M0FPC48internal13regex__engine13shared__types11rechar__set17try__merge__right(_hi, r);
        }
        const _hi$2 = _bind$3._0;
        const _r$2 = _bind$3._1;
        return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_l$2, _lo$2, _hi$2, _r$2);
      } else {
        return $panic();
      }
    }
  }
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet5union(self, other) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set5union(self, other);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet12intersection(self, other) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set12intersection(self, other);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10difference(self, other) {
  return _M0FPC48internal13regex__engine13shared__types11rechar__set10difference(self, other);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__byN3auxS25(f, t) {
  if (t.$tag === 0) {
    return _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
  } else {
    const _Node = t;
    const _l = _Node._0;
    const _lo = _Node._1;
    const _hi = _Node._2;
    const _r = _Node._3;
    return _M0FPC48internal13regex__engine13shared__types11rechar__set3bal(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__byN3auxS25(f, _l), f(_lo), f(_hi), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__byN3auxS25(f, _r));
  }
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__by(self, f) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__byN3auxS25(f, self);
}
function _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9intervals(self) {
  const node = new _M0TPB8MutLocalGRPC48internal13regex__engine13shared__types11rechar__set4TreeE(self);
  const parents = [];
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    let _tmp = node.val;
    while (true) {
      const curr = _tmp;
      if (curr.$tag === 1) {
        const _Node = curr;
        const _x = _Node._0;
        if (_x.$tag === 0) {
          const _lo = _Node._1;
          const _hi = _Node._2;
          const _r = _Node._3;
          node.val = _r;
          return { _0: _lo, _1: _hi };
        } else {
          const _lo = _Node._1;
          const _hi = _Node._2;
          const _r = _Node._3;
          _M0MPC15array5Array4pushGRPB4JsonE(parents, { _0: _lo, _1: _hi, _2: _r });
          _tmp = _x;
          continue;
        }
      } else {
        const _bind$2 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(parents);
        if (_bind$2 === undefined) {
          return undefined;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _lo = _x._0;
          const _hi = _x._1;
          const _r = _x._2;
          node.val = _r;
          return { _0: _lo, _1: _hi };
        }
      }
    }
  }, undefined);
}
function _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(self, other) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet5union(self, other);
}
function _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Sub3sub(self, other) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10difference(self, other);
}
function _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(self, other) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet12intersection(self, other);
}
function _M0IPC38internal13regex__engine13shared__types8CategoryPB4Hash13hash__combine(_x_23, _x_24) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_23, _x_24);
}
function _M0IPC38internal13regex__engine13shared__types10PreferencePB2Eq5equal(_x_19, _x_20) {
  switch (_x_19) {
    case 0: {
      if (_x_20 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_20 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_20 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IPC38internal13regex__engine13shared__types10PreferencePB4Hash13hash__combine(_x_15, _x_16) {
  switch (_x_15) {
    case 0: {
      _M0MPB6Hasher12combine__int(_x_16, 0);
      return;
    }
    case 1: {
      _M0MPB6Hasher12combine__int(_x_16, 1);
      return;
    }
    default: {
      _M0MPB6Hasher12combine__int(_x_16, 2);
      return;
    }
  }
}
function _M0MPC38internal13regex__engine13shared__types7Profile15Profile_2einner(valid, word, word_symbolize_splits, category) {
  const _bind$2 = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet15first__interval(valid);
  if (_bind$2 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    const _lb = _x._0;
    const _bind$3 = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet14last__interval(valid);
    if (_bind$3 === undefined) {
      return $panic();
    } else {
      const _Some$2 = _bind$3;
      const _x$2 = _Some$2;
      const _ub = _x$2._1;
      return new _M0TPC38internal13regex__engine13shared__types7Profile(_lb, _ub, valid, word, word_symbolize_splits, category);
    }
  }
}
function _M0MPC38internal13regex__engine13shared__types7Profile7Profile(valid, word, word_symbolize_splits$46$opt, category) {
  let word_symbolize_splits;
  if (word_symbolize_splits$46$opt === undefined) {
    word_symbolize_splits = [word];
  } else {
    const _Some = word_symbolize_splits$46$opt;
    word_symbolize_splits = _Some;
  }
  return _M0MPC38internal13regex__engine13shared__types7Profile15Profile_2einner(valid, word, word_symbolize_splits, category);
}
function _M0IPC38internal13regex__engine8automata4MarkPB4Hash13hash__combine(_x_338, _x_339) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_338, _x_339);
}
function _M0IPC38internal13regex__engine8automata6ThreadPB2Eq5equal(_x_306, _x_307) {
  switch (_x_306.$tag) {
    case 0: {
      const _End = _x_306;
      const _$42$x0_308 = _End._0;
      if (_x_307.$tag === 0) {
        const _End$2 = _x_307;
        const _$42$y0_309 = _End$2._0;
        return _M0IPC38internal13regex__engine8automata11MarkSlotMapPB2Eq5equal(_$42$x0_308, _$42$y0_309);
      } else {
        return false;
      }
    }
    case 1: {
      const _Exp = _x_306;
      const _$42$x0_310 = _Exp._0;
      const _$42$x1_311 = _Exp._1;
      if (_x_307.$tag === 1) {
        const _Exp$2 = _x_307;
        const _$42$y0_312 = _Exp$2._0;
        const _$42$y1_313 = _Exp$2._1;
        return _M0IPC38internal13regex__engine8automata11MarkSlotMapPB2Eq5equal(_$42$x0_310, _$42$y0_312) && _$42$x1_311.id === _$42$y1_313.id;
      } else {
        return false;
      }
    }
    default: {
      const _Seq = _x_306;
      const _$42$x0_314 = _Seq._0;
      const _$42$x1_315 = _Seq._1;
      const _$42$x2_316 = _Seq._2;
      if (_x_307.$tag === 2) {
        const _Seq$2 = _x_307;
        const _$42$y0_317 = _Seq$2._0;
        const _$42$y1_318 = _Seq$2._1;
        const _$42$y2_319 = _Seq$2._2;
        return _M0IPC38internal13regex__engine13shared__types10PreferencePB2Eq5equal(_$42$x0_314, _$42$y0_317) && (_M0IPC38internal13regex__engine8automata9ThreadSetPB2Eq5equal(_$42$x1_315, _$42$y1_318) && _$42$x2_316.id === _$42$y2_319.id);
      } else {
        return false;
      }
    }
  }
}
function _M0IPC38internal13regex__engine8automata6ThreadPB4Hash13hash__combine(_x_290, _x_291) {
  switch (_x_290.$tag) {
    case 0: {
      const _End = _x_290;
      const _$42$arg_292 = _End._0;
      _M0MPB6Hasher12combine__int(_x_291, 0);
      _M0IPC38internal13regex__engine8automata11MarkSlotMapPB4Hash13hash__combine(_$42$arg_292, _x_291);
      return;
    }
    case 1: {
      const _Exp = _x_290;
      const _$42$arg_293 = _Exp._0;
      const _$42$arg_294 = _Exp._1;
      _M0MPB6Hasher12combine__int(_x_291, 1);
      _M0IPC38internal13regex__engine8automata11MarkSlotMapPB4Hash13hash__combine(_$42$arg_293, _x_291);
      _M0IPC38internal13regex__engine8automata4ExprPB4Hash13hash__combine(_$42$arg_294, _x_291);
      return;
    }
    default: {
      const _Seq = _x_290;
      const _$42$arg_295 = _Seq._0;
      const _$42$arg_296 = _Seq._1;
      const _$42$arg_297 = _Seq._2;
      _M0MPB6Hasher12combine__int(_x_291, 2);
      _M0IPC38internal13regex__engine13shared__types10PreferencePB4Hash13hash__combine(_$42$arg_295, _x_291);
      _M0IPC38internal13regex__engine8automata9ThreadSetPB4Hash13hash__combine(_$42$arg_296, _x_291);
      _M0IPC38internal13regex__engine8automata4ExprPB4Hash13hash__combine(_$42$arg_297, _x_291);
      return;
    }
  }
}
function _M0IPC38internal13regex__engine8automata4SlotPB4Hash13hash__combine(_x_282, _x_283) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_282, _x_283);
}
function _M0IPC38internal13regex__engine8automata11MarkSlotMapPB2Eq5equal(_x_278, _x_279) {
  return _M0IPC25immut11sorted__map9SortedMapPB2Eq5equalGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_x_278, _x_279);
}
function _M0IPC38internal13regex__engine8automata11MarkSlotMapPB4Hash13hash__combine(_x_274, _x_275) {
  _M0IPC25immut11sorted__map9SortedMapPB4Hash13hash__combineGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_x_274, _x_275);
}
function _M0MPC38internal13regex__engine8automata9ThreadSet9is__empty(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet13is__singleton(self) {
  if (self.$tag === 1) {
    const _Node = self;
    const _x = _Node._1;
    if (_x.$tag === 0) {
      const _x$2 = _Node._3;
      if (_x$2.$tag === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet5first(self) {
  let _tmp = self;
  while (true) {
    const self$2 = _tmp;
    if (self$2.$tag === 0) {
      return undefined;
    } else {
      const _Node = self$2;
      const _x = _Node._1;
      if (_x.$tag === 0) {
        const _t = _Node._2;
        return _t;
      } else {
        _tmp = _x;
        continue;
      }
    }
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet6choose(self) {
  _L: {
    if (self.$tag === 1) {
      const _Node = self;
      const _x = _Node._1;
      if (_x.$tag === 0) {
        const _t = _Node._2;
        const _x$2 = _Node._3;
        if (_x$2.$tag === 0) {
          return _t;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return $panic();
}
function _M0MPC38internal13regex__engine8automata9ThreadSet9no__match(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    const _Node = self;
    const _i = _Node._0;
    return _i;
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(l, t, r, p) {
  let i;
  let _tmp;
  if (t.$tag === 0) {
    _tmp = true;
  } else {
    _tmp = false;
  }
  if (!_tmp) {
    i = _M0MPC38internal13regex__engine8automata9ThreadSet9no__match(l) && _M0MPC38internal13regex__engine8automata9ThreadSet9no__match(r);
  } else {
    i = false;
  }
  return new _M0DTPC38internal13regex__engine8automata9ThreadSet4Node(i, l, t, r, p);
}
function _M0FPC38internal13regex__engine8automata9rand__int() {
  _M0FPC38internal13regex__engine8automata11rand__state.val = (Math.imul(_M0FPC38internal13regex__engine8automata11rand__state.val, 1664525) | 0) + 1013904223 | 0;
  return _M0FPC38internal13regex__engine8automata11rand__state.val;
}
function _M0MPC38internal13regex__engine8automata9ThreadSet9singleton(t) {
  return _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(_M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__, t, _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__, _M0FPC38internal13regex__engine8automata9rand__int());
}
function _M0MPC38internal13regex__engine8automata9ThreadSet5merge(l, r) {
  if (l.$tag === 0) {
    return r;
  } else {
    if (r.$tag === 0) {
      return l;
    } else {
      const _Node = l;
      const _Node$2 = r;
      return _Node._4 > _Node$2._4 ? _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(_Node._1, _Node._2, _M0MPC38internal13regex__engine8automata9ThreadSet5merge(_Node._3, _Node$2), _Node._4) : _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(_M0MPC38internal13regex__engine8automata9ThreadSet5merge(_Node, _Node$2._1), _Node$2._2, _Node$2._3, _Node$2._4);
    }
  }
}
function _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(self, other) {
  return _M0MPC38internal13regex__engine8automata9ThreadSet5merge(self, other);
}
function _M0MPC38internal13regex__engine8automata9ThreadSet9flat__map(self, f) {
  if (self.$tag === 0) {
    return _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__;
  } else {
    const _Node = self;
    const _l = _Node._1;
    const _t = _Node._2;
    const _r = _Node._3;
    const l2 = _M0MPC38internal13regex__engine8automata9ThreadSet9flat__map(_l, f);
    const t2 = f(_t);
    const r2 = _M0MPC38internal13regex__engine8automata9ThreadSet9flat__map(_r, f);
    return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(l2, t2), r2);
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet18find__first__match(self) {
  let _tmp = self;
  _L: while (true) {
    const self$2 = _tmp;
    let t;
    let l;
    let r;
    _L$2: {
      _L$3: {
        if (self$2.$tag === 0) {
          break _L$3;
        } else {
          const _Node = self$2;
          const _x = _Node._0;
          const _x$2 = _x;
          if (_x$2 === true) {
            break _L$3;
          } else {
            const _x$3 = _Node._1;
            if (_x$3.$tag === 0) {
              const _x$4 = _Node._2;
              if (_x$4.$tag === 0) {
                const _End = _x$4;
                const _marks = _End._0;
                return _marks;
              } else {
                const _r = _Node._3;
                t = _x$4;
                l = _x$3;
                r = _r;
                break _L$2;
              }
            } else {
              const _t = _Node._2;
              const _r = _Node._3;
              t = _t;
              l = _x$3;
              r = _r;
              break _L$2;
            }
          }
        }
      }
      return undefined;
    }
    const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet18find__first__match(l);
    if (_bind$2 === undefined) {
      _L$3: {
        switch (t.$tag) {
          case 0: {
            const _End = t;
            const _marks = _End._0;
            return _marks;
          }
          case 1: {
            break _L$3;
          }
          default: {
            break _L$3;
          }
        }
      }
      _tmp = r;
      continue;
    } else {
      const _Some = _bind$2;
      const _marks = _Some;
      return _marks;
    }
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(self) {
  if (self.$tag === 0) {
    return _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__;
  } else {
    const _Node = self;
    const _x = _Node._0;
    const _x$2 = _x;
    if (_x$2 === true) {
      return self;
    } else {
      const _l = _Node._1;
      const _t = _Node._2;
      const _r = _Node._3;
      const _p = _Node._4;
      _L: {
        switch (_t.$tag) {
          case 0: {
            return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(_l), _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(_r));
          }
          case 1: {
            break _L;
          }
          default: {
            break _L;
          }
        }
      }
      return _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(_M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(_l), _t, _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(_r), _p);
    }
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet23split__at__first__match(self) {
  let r;
  let l;
  let t;
  let p;
  _L: {
    let l$2;
    let r$2;
    _L$2: {
      if (self.$tag === 0) {
        return { _0: _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__, _1: _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__ };
      } else {
        const _Node = self;
        const _x = _Node._0;
        const _x$2 = _x;
        if (_x$2 === true) {
          return { _0: self, _1: _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__ };
        } else {
          const _x$3 = _Node._1;
          if (_x$3.$tag === 0) {
            const _x$4 = _Node._2;
            switch (_x$4.$tag) {
              case 0: {
                const _r = _Node._3;
                l$2 = _x$3;
                r$2 = _r;
                break _L$2;
              }
              case 1: {
                const _r$2 = _Node._3;
                const _p = _Node._4;
                r = _r$2;
                l = _x$3;
                t = _x$4;
                p = _p;
                break _L;
              }
              default: {
                const _r$3 = _Node._3;
                const _p$2 = _Node._4;
                r = _r$3;
                l = _x$3;
                t = _x$4;
                p = _p$2;
                break _L;
              }
            }
          } else {
            const _Node$2 = _x$3;
            const _x$4 = _Node$2._0;
            const _x$5 = _x$4;
            if (_x$5 === true) {
              const _x$6 = _Node._2;
              switch (_x$6.$tag) {
                case 0: {
                  const _r = _Node._3;
                  l$2 = _x$3;
                  r$2 = _r;
                  break _L$2;
                }
                case 1: {
                  const _r$2 = _Node._3;
                  const _p = _Node._4;
                  r = _r$2;
                  l = _x$3;
                  t = _x$6;
                  p = _p;
                  break _L;
                }
                default: {
                  const _r$3 = _Node._3;
                  const _p$2 = _Node._4;
                  r = _r$3;
                  l = _x$3;
                  t = _x$6;
                  p = _p$2;
                  break _L;
                }
              }
            } else {
              const _t = _Node._2;
              const _r = _Node._3;
              const _p = _Node._4;
              const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet23split__at__first__match(_Node$2);
              const _l1 = _bind$2._0;
              const _l2 = _bind$2._1;
              return { _0: _l1, _1: _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(_l2, _t, _r, _p) };
            }
          }
        }
      }
    }
    return { _0: l$2, _1: r$2 };
  }
  const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet23split__at__first__match(r);
  const _r1 = _bind$2._0;
  const _r2 = _bind$2._1;
  return { _0: _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(l, t, _r1, p), _1: _r2 };
}
function _M0FPC38internal13regex__engine8automata7ts__one(t) {
  return _M0MPC38internal13regex__engine8automata9ThreadSet9singleton(t);
}
function _M0FPC38internal13regex__engine8automata7ts__exp(marks, expr) {
  return _M0FPC38internal13regex__engine8automata7ts__one(new _M0DTPC38internal13regex__engine8automata6Thread3Exp(marks, expr));
}
function _M0FPC38internal13regex__engine8automata7ts__seq(pref, first, next) {
  if (_M0MPC38internal13regex__engine8automata9ThreadSet9is__empty(first)) {
    return _M0FPC38internal13regex__engine8automata9ts__empty;
  } else {
    _L: {
      if (_M0MPC38internal13regex__engine8automata9ThreadSet13is__singleton(first)) {
        _L$2: {
          const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet6choose(first);
          if (_bind$2.$tag === 1) {
            const _Exp = _bind$2;
            const _marks = _Exp._0;
            const _x = _Exp._1;
            const _x$2 = _x.def;
            if (_x$2.$tag === 4) {
              return _M0FPC38internal13regex__engine8automata7ts__exp(_marks, next);
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        }
        break _L;
      } else {
        break _L;
      }
    }
    return _M0FPC38internal13regex__engine8automata7ts__one(new _M0DTPC38internal13regex__engine8automata6Thread3Seq(pref, first, next));
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet4iter(self) {
  const node = new _M0TPB8MutLocalGRPC38internal13regex__engine8automata9ThreadSetE(self);
  const parents = [];
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    let _tmp = node.val;
    while (true) {
      const curr = _tmp;
      if (curr.$tag === 1) {
        const _Node = curr;
        const _thread = _Node._2;
        const _x = _Node._1;
        if (_x.$tag === 0) {
          const _right = _Node._3;
          node.val = _right;
          return _thread;
        } else {
          const _right = _Node._3;
          _M0MPC15array5Array4pushGRPB4JsonE(parents, { _0: _thread, _1: _right });
          _tmp = _x;
          continue;
        }
      } else {
        const _bind$2 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(parents);
        if (_bind$2 === undefined) {
          return undefined;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _thread = _x._0;
          const _right = _x._1;
          node.val = _right;
          return _thread;
        }
      }
    }
  }, undefined);
}
function _M0MPC38internal13regex__engine8automata9ThreadSet30remove__duplicates__with__seen(self, next, seen) {
  const _it = _M0MPC38internal13regex__engine8automata9ThreadSet4iter(self);
  let _tmp = _M0FPC38internal13regex__engine8automata9ts__empty;
  _L: while (true) {
    const result = _tmp;
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      return result;
    } else {
      const _Some = _bind$2;
      const _thread = _Some;
      switch (_thread.$tag) {
        case 0: {
          return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(result, _M0FPC38internal13regex__engine8automata7ts__one(_thread));
        }
        case 1: {
          const _Exp = _thread;
          const _x = _Exp._1;
          const _x$2 = _x.def;
          if (_x$2.$tag === 4) {
            if (!_M0MPC17hashset7HashSet8containsGiE(seen, next.id)) {
              _M0MPC17hashset7HashSet3addGiE(seen, next.id);
              _tmp = _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(result, _M0FPC38internal13regex__engine8automata7ts__one(_thread));
              continue _L;
            } else {
              continue _L;
            }
          } else {
            const _id = _x.id;
            if (!_M0MPC17hashset7HashSet8containsGiE(seen, _id)) {
              _M0MPC17hashset7HashSet3addGiE(seen, _id);
              _tmp = _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(result, _M0FPC38internal13regex__engine8automata7ts__one(_thread));
              continue _L;
            } else {
              continue _L;
            }
          }
        }
        default: {
          const _Seq = _thread;
          const _pref = _Seq._0;
          const _first = _Seq._1;
          const _next = _Seq._2;
          const first_dedup = _M0MPC38internal13regex__engine8automata9ThreadSet30remove__duplicates__with__seen(_first, _next, seen);
          _tmp = _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(result, _M0FPC38internal13regex__engine8automata7ts__seq(_pref, first_dedup, _next));
          continue _L;
        }
      }
    }
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet18remove__duplicates(self, next) {
  const _bind$2 = [];
  const seen = _M0MPC17hashset7HashSet7HashSetGiE(new _M0TPB9ArrayViewGiE(_bind$2, 0, 0), undefined);
  return _M0MPC38internal13regex__engine8automata9ThreadSet30remove__duplicates__with__seen(self, next, seen);
}
function _M0MPC38internal13regex__engine8automata11MarkSlotMap12assign__slot(self, slot) {
  return _M0MPC25immut11sorted__map9SortedMap3mapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata4SlotE(self, (_mark, prev_slot) => prev_slot > 0 ? prev_slot : slot);
}
function _M0MPC38internal13regex__engine8automata9ThreadSet3map(self, f) {
  if (self.$tag === 0) {
    return _M0DTPC38internal13regex__engine8automata9ThreadSet5Empty__;
  } else {
    const _Node = self;
    const _l = _Node._1;
    const _t = _Node._2;
    const _r = _Node._3;
    const _p = _Node._4;
    const l2 = _M0MPC38internal13regex__engine8automata9ThreadSet3map(_l, f);
    const b2 = f(_t);
    const r2 = _M0MPC38internal13regex__engine8automata9ThreadSet3map(_r, f);
    return _M0MPC38internal13regex__engine8automata9ThreadSet10make__node(l2, b2, r2, _p);
  }
}
function _M0MPC38internal13regex__engine8automata9ThreadSet12assign__slot(desc, slot) {
  return slot > 0 ? _M0MPC38internal13regex__engine8automata9ThreadSet3map(desc, (thread) => {
    switch (thread.$tag) {
      case 0: {
        const _End = thread;
        const _marks = _End._0;
        return new _M0DTPC38internal13regex__engine8automata6Thread3End(_M0MPC38internal13regex__engine8automata11MarkSlotMap12assign__slot(_marks, slot));
      }
      case 1: {
        const _Exp = thread;
        const _marks$2 = _Exp._0;
        const _expr = _Exp._1;
        return new _M0DTPC38internal13regex__engine8automata6Thread3Exp(_M0MPC38internal13regex__engine8automata11MarkSlotMap12assign__slot(_marks$2, slot), _expr);
      }
      default: {
        const _Seq = thread;
        const _pref = _Seq._0;
        const _first = _Seq._1;
        const _next = _Seq._2;
        return new _M0DTPC38internal13regex__engine8automata6Thread3Seq(_pref, _M0MPC38internal13regex__engine8automata9ThreadSet12assign__slot(_first, slot), _next);
      }
    }
  }) : $panic();
}
function _M0MPC38internal13regex__engine8automata9ThreadSet11iter__marks(self) {
  return _M0MPB4Iter9flat__mapGRPC38internal13regex__engine8automata6ThreadRPC38internal13regex__engine8automata11MarkSlotMapE(_M0MPC38internal13regex__engine8automata9ThreadSet4iter(self), (thread) => {
    let marks;
    _L: {
      switch (thread.$tag) {
        case 0: {
          const _End = thread;
          const _marks = _End._0;
          marks = _marks;
          break _L;
        }
        case 1: {
          const _Exp = thread;
          const _marks$2 = _Exp._0;
          marks = _marks$2;
          break _L;
        }
        default: {
          const _Seq = thread;
          const _first = _Seq._1;
          return _M0MPC38internal13regex__engine8automata9ThreadSet11iter__marks(_first);
        }
      }
    }
    return _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE([marks]);
  });
}
function _M0FPC38internal13regex__engine8automata7ts__end(marks) {
  return _M0FPC38internal13regex__engine8automata7ts__one(new _M0DTPC38internal13regex__engine8automata6Thread3End(marks));
}
function _M0IPC38internal13regex__engine8automata9ThreadSetPB2Eq5equal(self, other) {
  const it1 = _M0MPC38internal13regex__engine8automata9ThreadSet4iter(self);
  const it2 = _M0MPC38internal13regex__engine8automata9ThreadSet4iter(other);
  let _tmp = _M0MPB4Iter4nextGUsRPB4JsonEE(it1);
  let _tmp$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(it2);
  while (true) {
    const v1 = _tmp;
    const v2 = _tmp$2;
    _L: {
      if (v1 === undefined) {
        if (v2 === undefined) {
          return true;
        } else {
          break _L;
        }
      } else {
        const _Some = v1;
        if (v2 === undefined) {
          break _L;
        } else {
          const _b1 = _Some;
          const _Some$2 = v2;
          const _b2 = _Some$2;
          if (_M0IPC38internal13regex__engine8automata6ThreadPB2Eq5equal(_b1, _b2)) {
            _tmp = _M0MPB4Iter4nextGUsRPB4JsonEE(it1);
            _tmp$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(it2);
            continue;
          } else {
            return false;
          }
        }
      }
    }
    return false;
  }
}
function _M0IPC38internal13regex__engine8automata9ThreadSetPB4Hash13hash__combine(self, hasher) {
  const _it = _M0MPC38internal13regex__engine8automata9ThreadSet4iter(self);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _thread = _Some;
      _M0MPB6Hasher7combineGRPC38internal13regex__engine8automata6ThreadE(hasher, _thread);
      continue;
    }
  }
}
function _M0IPC38internal13regex__engine8automata5StatePB2Eq5equal(self, other) {
  if (self.hash === other.hash) {
    let _tmp;
    const _p = self.slot;
    const _p$2 = other.slot;
    if (_p === _p$2) {
      let _tmp$2;
      const _p$3 = self.cat;
      const _p$4 = other.cat;
      if (_p$3 === _p$4) {
        _tmp$2 = _M0IPC38internal13regex__engine8automata9ThreadSetPB2Eq5equal(self.desc, other.desc);
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    } else {
      _tmp = false;
    }
    return _tmp;
  } else {
    return false;
  }
}
function _M0IPC38internal13regex__engine8automata5StatePB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher7combineGiE(hasher, self.hash);
}
function _M0MPC38internal13regex__engine8automata5State3new(slot, cat, desc) {
  return new _M0TPC38internal13regex__engine8automata5State(slot, cat, desc, _M0IP016_24default__implPB4Hash4hashGURPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata9ThreadSetEE({ _0: slot, _1: cat, _2: desc }));
}
function _M0MPC38internal13regex__engine8automata11MarkSlotMap5empty() {
  return _M0DTPC25immut11sorted__map9SortedMapGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE5Empty__;
}
function _M0MPC38internal13regex__engine8automata5State5start(cat, expr) {
  return _M0MPC38internal13regex__engine8automata5State3new(_M0MPC38internal13regex__engine8automata4Slot10unassignedN6recordS781, cat, _M0FPC38internal13regex__engine8automata7ts__exp(_M0MPC38internal13regex__engine8automata11MarkSlotMap5empty(), expr));
}
function _M0MPC38internal13regex__engine8automata5State6status(self) {
  _L: {
    const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet5first(self.desc);
    if (_bind$2 === undefined) {
      return _M0DTPC38internal13regex__engine8automata6Status6Failed__;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x.$tag) {
        case 0: {
          const _End = _x;
          const _marks = _End._0;
          return new _M0DTPC38internal13regex__engine8automata6Status5Match(_marks);
        }
        case 1: {
          break _L;
        }
        default: {
          break _L;
        }
      }
    }
  }
  return _M0DTPC38internal13regex__engine8automata6Status7Running__;
}
function _M0MPC38internal13regex__engine8automata8SlotBook5empty() {
  const book = $make_array_len_and_init(4, 0);
  $bound_check(book, 0);
  book[0] = 1;
  return book;
}
function _M0MPC38internal13regex__engine8automata8SlotBook10mark__used(self, slot) {
  const index = slot / 32 | 0;
  const bit = slot % 32 | 0;
  $bound_check(self, index);
  $bound_check(self, index);
  self[index] = self[index] | 1 << bit;
}
function _M0MPC38internal13regex__engine8automata8SlotBook12find__unused(self) {
  const _bind$2 = self;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const word = _bind$2[i];
      if (word !== -1) {
        const bit = $i32_ctz(~word);
        return (Math.imul(i, 32) | 0) + bit | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return Math.imul(self.length, 32) | 0;
}
function _M0MPC38internal13regex__engine8automata8SlotBook5clear(self) {
  _M0MPC15array10FixedArray12fill_2einnerGiE(self, 0, 0, undefined);
  $bound_check(self, 0);
  self[0] = 1;
}
function _M0FPC38internal13regex__engine8automata18next__pow__of__two(n) {
  return n <= 1 ? 1 : n <= 1073741824 ? 1 << (32 - Math.clz32(n - 1 | 0) | 0) : $panic();
}
function _M0MPC38internal13regex__engine8automata8SlotBook4grow(self) {
  const book = $make_array_len_and_init(_M0FPC38internal13regex__engine8automata18next__pow__of__two(self.length + 1 | 0), 0);
  $bound_check(book, 0);
  book[0] = 1;
  return book;
}
function _M0MPC38internal13regex__engine8automata11MarkSlotMap9add__mark(self, mark) {
  return _M0MPC25immut11sorted__map9SortedMap3addGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self, mark, _M0MPC38internal13regex__engine8automata4Slot10unassignedN6recordS781);
}
function _M0MPC38internal13regex__engine8automata11MarkSlotMap5iter2(self) {
  return _M0MPC25immut11sorted__map9SortedMap5iter2GRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(self);
}
function _M0IPC38internal13regex__engine8automata4ExprPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher7combineGiE(hasher, self.id);
}
function _M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx) {
  const id = ctx.next_expr_id;
  ctx.next_expr_id = ctx.next_expr_id + 1 | 0;
  return id;
}
function _M0FPC38internal13regex__engine8automata8e__after(ctx, cat) {
  return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef5After(cat));
}
function _M0FPC38internal13regex__engine8automata6e__alt(ctx, xs) {
  if (xs.length === 1) {
    const _x = xs[0];
    return _x;
  } else {
    if (xs.length === 0) {
      return _M0FPC38internal13regex__engine8automata8e__empty;
    } else {
      return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef3Alt(xs));
    }
  }
}
function _M0FPC38internal13regex__engine8automata9e__before(ctx, cat) {
  return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef6Before(cat));
}
function _M0FPC38internal13regex__engine8automata7e__cset(ctx, c) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9is__empty(c) ? _M0FPC38internal13regex__engine8automata8e__empty : new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef3Chr(c));
}
function _M0FPC38internal13regex__engine8automata7e__mark(ctx, m) {
  return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef4Mark(m));
}
function _M0FPC38internal13regex__engine8automata6e__rep(ctx, mode, pref, x) {
  return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef3Rep(mode, pref, x));
}
function _M0FPC38internal13regex__engine8automata6e__seq(ctx, pref, x, y) {
  _L: {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind$2 = x.def;
          const _bind$3 = y.def;
          if (_bind$2.$tag === 1) {
            const _Alt = _bind$2;
            const _x = _Alt._0;
            if (_x.length === 0) {
              return x;
            } else {
              switch (_bind$3.$tag) {
                case 1: {
                  const _Alt$2 = _bind$3;
                  const _x$2 = _Alt$2._0;
                  if (_x$2.length === 0) {
                    break _L$4;
                  } else {
                    break _L;
                  }
                }
                case 4: {
                  if (pref === 2) {
                    break _L$2;
                  } else {
                    break _L;
                  }
                }
                default: {
                  break _L;
                }
              }
            }
          } else {
            if (_bind$3.$tag === 1) {
              const _Alt = _bind$3;
              const _x = _Alt._0;
              if (_x.length === 0) {
                break _L$4;
              } else {
                if (_bind$2.$tag === 4) {
                  break _L$3;
                } else {
                  break _L;
                }
              }
            } else {
              if (_bind$2.$tag === 4) {
                break _L$3;
              } else {
                if (_bind$3.$tag === 4) {
                  if (pref === 2) {
                    break _L$2;
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              }
            }
          }
        }
        return y;
      }
      return y;
    }
    return x;
  }
  return new _M0TPC38internal13regex__engine8automata4Expr(_M0MPC38internal13regex__engine8automata7Context13new__expr__id(ctx), new _M0DTPC38internal13regex__engine8automata7ExprDef3Seq(pref, x, y));
}
function _M0FPC38internal13regex__engine8automata7e__copy(ctx, e) {
  const _bind$2 = e.def;
  switch (_bind$2.$tag) {
    case 0: {
      const _Chr = _bind$2;
      const _c = _Chr._0;
      return _M0FPC38internal13regex__engine8automata7e__cset(ctx, _c);
    }
    case 1: {
      const _Alt = _bind$2;
      const _xs = _Alt._0;
      const _p = new Array(_xs.length);
      const _p$2 = _xs.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = _xs[_p$3];
          _p[_p$3] = _M0FPC38internal13regex__engine8automata7e__copy(ctx, _p$4);
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FPC38internal13regex__engine8automata6e__alt(ctx, _p);
    }
    case 2: {
      const _Seq = _bind$2;
      const _pref = _Seq._0;
      const _x = _Seq._1;
      const _y = _Seq._2;
      return _M0FPC38internal13regex__engine8automata6e__seq(ctx, _pref, _M0FPC38internal13regex__engine8automata7e__copy(ctx, _x), _M0FPC38internal13regex__engine8automata7e__copy(ctx, _y));
    }
    case 3: {
      const _Rep = _bind$2;
      const _mode = _Rep._0;
      const _pref$2 = _Rep._1;
      const _x$2 = _Rep._2;
      return _M0FPC38internal13regex__engine8automata6e__rep(ctx, _mode, _pref$2, _M0FPC38internal13regex__engine8automata7e__copy(ctx, _x$2));
    }
    case 4: {
      return _M0FPC38internal13regex__engine8automata6e__eps;
    }
    case 5: {
      const _Mark = _bind$2;
      const _m = _Mark._0;
      return _M0FPC38internal13regex__engine8automata7e__mark(ctx, _m);
    }
    case 6: {
      const _Before = _bind$2;
      const _cat = _Before._0;
      return _M0FPC38internal13regex__engine8automata9e__before(ctx, _cat);
    }
    default: {
      const _After = _bind$2;
      const _cat$2 = _After._0;
      return _M0FPC38internal13regex__engine8automata8e__after(ctx, _cat$2);
    }
  }
}
function _M0FPC38internal13regex__engine8automata7is__eps(e) {
  const _bind$2 = e.def;
  if (_bind$2.$tag === 4) {
    return true;
  } else {
    return false;
  }
}
function _M0FPC38internal13regex__engine8automata10delta__rep(outer, mode, pref, inner, c, marks) {
  const inner_delta = _M0FPC38internal13regex__engine8automata11delta__expr(inner, c, marks);
  const first_match_marks = _M0MPC38internal13regex__engine8automata9ThreadSet18find__first__match(inner_delta);
  if (mode === 0) {
    let marks$2;
    let inner_delta$2;
    _L: {
      if (first_match_marks === undefined) {
        marks$2 = marks;
        inner_delta$2 = inner_delta;
        break _L;
      } else {
        const _Some = first_match_marks;
        const _marks = _Some;
        marks$2 = _marks;
        inner_delta$2 = _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(inner_delta);
        break _L;
      }
    }
    return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0FPC38internal13regex__engine8automata7ts__seq(pref, inner_delta$2, outer), _M0FPC38internal13regex__engine8automata7ts__end(marks$2));
  } else {
    return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0FPC38internal13regex__engine8automata7ts__end(marks), _M0FPC38internal13regex__engine8automata7ts__seq(pref, _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(inner_delta), outer));
  }
}
function _M0FPC38internal13regex__engine8automata11delta__expr(expr, c, marks) {
  const _bind$2 = expr.def;
  switch (_bind$2.$tag) {
    case 0: {
      const _Chr = _bind$2;
      const _cs = _Chr._0;
      return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(_cs, c.c) ? _M0FPC38internal13regex__engine8automata7ts__exp(marks, _M0FPC38internal13regex__engine8automata6e__eps) : _M0FPC38internal13regex__engine8automata9ts__empty;
    }
    case 1: {
      const _Alt = _bind$2;
      const _exprs = _Alt._0;
      const _p = _exprs.length;
      let _tmp = 0;
      let _tmp$2 = _M0FPC38internal13regex__engine8automata9ts__empty;
      while (true) {
        const _p$2 = _tmp;
        const _p$3 = _tmp$2;
        if (_p$2 < _p) {
          const _p$4 = _exprs[_p$2];
          _tmp = _p$2 + 1 | 0;
          _tmp$2 = _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_p$3, _M0FPC38internal13regex__engine8automata11delta__expr(_p$4, c, marks));
          continue;
        } else {
          return _p$3;
        }
      }
    }
    case 2: {
      const _Seq = _bind$2;
      const _pref = _Seq._0;
      const _first = _Seq._1;
      const _next = _Seq._2;
      const first_delta = _M0FPC38internal13regex__engine8automata11delta__expr(_first, c, marks);
      return _M0FPC38internal13regex__engine8automata10delta__seq(_pref, first_delta, _next, c);
    }
    case 3: {
      const _Rep = _bind$2;
      const _mode = _Rep._0;
      const _pref$2 = _Rep._1;
      const _body = _Rep._2;
      return _M0FPC38internal13regex__engine8automata10delta__rep(expr, _mode, _pref$2, _body, c, marks);
    }
    case 4: {
      return _M0FPC38internal13regex__engine8automata7ts__end(marks);
    }
    case 5: {
      const _Mark = _bind$2;
      const _mark = _Mark._0;
      return _M0FPC38internal13regex__engine8automata7ts__end(_M0MPC38internal13regex__engine8automata11MarkSlotMap9add__mark(marks, _mark));
    }
    case 6: {
      const _Before = _bind$2;
      const _cat = _Before._0;
      const _p$2 = c.next_cat;
      if ((_p$2 & _cat) !== 0) {
        return _M0FPC38internal13regex__engine8automata7ts__end(marks);
      } else {
        return _M0FPC38internal13regex__engine8automata9ts__empty;
      }
    }
    default: {
      const _After = _bind$2;
      const _cat$2 = _After._0;
      const _p$3 = c.prev_cat;
      if ((_p$3 & _cat$2) !== 0) {
        return _M0FPC38internal13regex__engine8automata7ts__end(marks);
      } else {
        return _M0FPC38internal13regex__engine8automata9ts__empty;
      }
    }
  }
}
function _M0FPC38internal13regex__engine8automata10delta__seq(pref, first, next, c) {
  const _bind$2 = _M0MPC38internal13regex__engine8automata9ThreadSet18find__first__match(first);
  if (_bind$2 === undefined) {
    return _M0FPC38internal13regex__engine8automata7ts__seq(pref, first, next);
  } else {
    const _Some = _bind$2;
    const _marks = _Some;
    switch (pref) {
      case 1: {
        return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0FPC38internal13regex__engine8automata7ts__seq(pref, _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(first), next), _M0FPC38internal13regex__engine8automata11delta__expr(next, c, _marks));
      }
      case 0: {
        return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0FPC38internal13regex__engine8automata11delta__expr(next, c, _marks), _M0FPC38internal13regex__engine8automata7ts__seq(pref, _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(first), next));
      }
      default: {
        const _bind$3 = _M0MPC38internal13regex__engine8automata9ThreadSet23split__at__first__match(first);
        const _until_first_match = _bind$3._0;
        const _after_first_match = _bind$3._1;
        return _M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0IPC38internal13regex__engine8automata9ThreadSetPB3Add3add(_M0FPC38internal13regex__engine8automata7ts__seq(pref, _until_first_match, next), _M0FPC38internal13regex__engine8automata11delta__expr(next, c, _marks)), _M0FPC38internal13regex__engine8automata7ts__seq(pref, _M0MPC38internal13regex__engine8automata9ThreadSet15remove__matches(_after_first_match), next));
      }
    }
  }
}
function _M0FPC38internal13regex__engine8automata13delta__thread(thread, c, marks) {
  switch (thread.$tag) {
    case 0: {
      return _M0FPC38internal13regex__engine8automata7ts__one(thread);
    }
    case 1: {
      const _Exp = thread;
      const _marks = _Exp._0;
      const _expr = _Exp._1;
      return _M0FPC38internal13regex__engine8automata11delta__expr(_expr, c, _marks);
    }
    default: {
      const _Seq = thread;
      const _pref = _Seq._0;
      const _first = _Seq._1;
      const _next = _Seq._2;
      const first_delta = _M0FPC38internal13regex__engine8automata14delta__threads(_first, c, marks);
      return _M0FPC38internal13regex__engine8automata10delta__seq(_pref, first_delta, _next, c);
    }
  }
}
function _M0FPC38internal13regex__engine8automata14delta__threads(curr, c, marks) {
  return _M0MPC38internal13regex__engine8automata9ThreadSet9flat__map(curr, (thread) => _M0FPC38internal13regex__engine8automata13delta__thread(thread, c, marks));
}
function _M0FPC38internal13regex__engine8automata10find__slot(ctx, desc) {
  if (ctx.book_dirty) {
    _M0MPC38internal13regex__engine8automata8SlotBook5clear(ctx.book);
  }
  const _it = _M0MPC38internal13regex__engine8automata9ThreadSet11iter__marks(desc);
  let has_unassigned_slots;
  let _tmp = false;
  _L: while (true) {
    const has_unassigned_slots$2 = _tmp;
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      has_unassigned_slots = has_unassigned_slots$2;
      break;
    } else {
      const _Some = _bind$2;
      const _marks = _Some;
      const _it$2 = _M0MPC38internal13regex__engine8automata11MarkSlotMap5iter2(_marks);
      let _tmp$2 = has_unassigned_slots$2;
      while (true) {
        const has_unassigned_slots$3 = _tmp$2;
        const _bind$3 = _M0MPB5Iter24nextGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_it$2);
        if (_bind$3 === undefined) {
          _tmp = has_unassigned_slots$3;
          continue _L;
        } else {
          const _Some$2 = _bind$3;
          const _x = _Some$2;
          const _slot = _x._1;
          if (_slot > 0) {
            _M0MPC38internal13regex__engine8automata8SlotBook10mark__used(ctx.book, _slot);
            continue;
          } else {
            _tmp$2 = true;
            continue;
          }
        }
      }
    }
  }
  if (!has_unassigned_slots) {
    return _M0MPC38internal13regex__engine8automata4Slot10unassignedN6recordS781;
  } else {
    const slot = _M0MPC38internal13regex__engine8automata8SlotBook12find__unused(ctx.book);
    const _p = ctx.book;
    if (slot >= (Math.imul(32, _p.length) | 0)) {
      ctx.book = _M0MPC38internal13regex__engine8automata8SlotBook4grow(ctx.book);
      ctx.book_dirty = false;
    } else {
      ctx.book_dirty = true;
    }
    return slot;
  }
}
function _M0FPC38internal13regex__engine8automata5delta(ctx, state, c, next_cat) {
  const prev_cat = state.cat;
  const desc = _M0FPC38internal13regex__engine8automata14delta__threads(state.desc, new _M0TPC38internal13regex__engine8automata12DeltaContext(c, prev_cat, next_cat), _M0MPC38internal13regex__engine8automata11MarkSlotMap5empty());
  const desc$2 = _M0MPC38internal13regex__engine8automata9ThreadSet18remove__duplicates(desc, _M0FPC38internal13regex__engine8automata6e__eps);
  const slot = _M0FPC38internal13regex__engine8automata10find__slot(ctx, desc$2);
  const desc$3 = slot > 0 ? _M0MPC38internal13regex__engine8automata9ThreadSet12assign__slot(desc$2, slot) : desc$2;
  return _M0MPC38internal13regex__engine8automata5State3new(slot, next_cat, desc$3);
}
function _M0MPC38internal13regex__engine8automata7Context7Context() {
  return new _M0TPC38internal13regex__engine8automata7Context(2, _M0MPC38internal13regex__engine8automata8SlotBook5empty(), false);
}
function _M0MPC46string8internal13regex__engine3ast7Pattern12is__anchored(self) {
  let _tmp = self.desc;
  let _tmp$2 = self.nullable;
  _L: while (true) {
    const self_desc = _tmp;
    switch (self_desc.$tag) {
      case 0: {
        return false;
      }
      case 1: {
        const _Sequence = self_desc;
        const _exprs = _Sequence._0;
        return _M0MPC15array13ReadOnlyArray3anyGRPC46string8internal13regex__engine3ast7PatternE(_exprs, (e) => _M0MPC46string8internal13regex__engine3ast7Pattern12is__anchored(e));
      }
      case 2: {
        const _Alternation = self_desc;
        const _exprs$2 = _Alternation._0;
        return _M0MPC15array13ReadOnlyArray3allGRPC46string8internal13regex__engine3ast7PatternE(_exprs$2, (e) => _M0MPC46string8internal13regex__engine3ast7Pattern12is__anchored(e));
      }
      case 3: {
        const _Quantifier = self_desc;
        const _q = _Quantifier._0;
        const _expr = _Quantifier._1;
        if (_q.min > 0) {
          _tmp = _expr.desc;
          _tmp$2 = _expr.nullable;
          continue _L;
        } else {
          return false;
        }
      }
      case 4: {
        const _Preference = self_desc;
        const _expr$2 = _Preference._1;
        _tmp = _expr$2.desc;
        _tmp$2 = _expr$2.nullable;
        continue _L;
      }
      case 5: {
        const _Capture = self_desc;
        const _expr$3 = _Capture._1;
        _tmp = _expr$3.desc;
        _tmp$2 = _expr$3.nullable;
        continue _L;
      }
      default: {
        const _Assertion = self_desc;
        const _x = _Assertion._0;
        if (_x === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
function _M0FPC46string8internal13regex__engine3ast4char(cs) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9is__empty(cs) ? _M0FPC46string8internal13regex__engine3ast5empty : new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc4Char(cs), false);
}
function _M0FPC46string8internal13regex__engine3ast3seq(exprs) {
  const flatten = [];
  const _it = _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE(exprs);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _expr = _Some;
      const _bind$3 = _expr.desc;
      if (_bind$3.$tag === 1) {
        const _Sequence = _bind$3;
        const _nested = _Sequence._0;
        const _it$2 = _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE(_nested);
        while (true) {
          const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it$2);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$4;
            const _e = _Some$2;
            _M0MPC15array5Array4pushGRPB4JsonE(flatten, _e);
            continue;
          }
        }
      } else {
        _M0MPC15array5Array4pushGRPB4JsonE(flatten, _expr);
      }
      continue;
    }
  }
  if (flatten.length === 1) {
    const _expr = flatten[0];
    return _expr;
  } else {
    if (flatten.length === 0) {
      return _M0FPC46string8internal13regex__engine3ast7epsilon;
    } else {
      const _tmp = new _M0DTPC46string8internal13regex__engine3ast11PatternDesc8Sequence(_M0MPC15array13ReadOnlyArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(flatten, 0, flatten.length)));
      let _tmp$2;
      let _p;
      _L: {
        _L$2: {
          const _p$2 = flatten.length;
          let _tmp$3 = 0;
          while (true) {
            const _p$3 = _tmp$3;
            if (_p$3 < _p$2) {
              const _p$4 = flatten[_p$3];
              if (!_p$4.nullable) {
                _p = false;
                break _L$2;
              }
              _tmp$3 = _p$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = true;
          break _L;
        }
        _tmp$2 = _p;
      }
      return new _M0TPC46string8internal13regex__engine3ast7Pattern(_tmp, _tmp$2);
    }
  }
}
function _M0FPC46string8internal13regex__engine3ast3alt(exprs) {
  if (exprs.length === 1) {
    const _expr = exprs[0];
    return _expr;
  } else {
    if (exprs.length === 0) {
      return _M0FPC46string8internal13regex__engine3ast5empty;
    } else {
      return new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc11Alternation(exprs), _M0MPC15array13ReadOnlyArray3anyGRPC46string8internal13regex__engine3ast7PatternE(exprs, (e) => e.nullable));
    }
  }
}
function _M0FPC46string8internal13regex__engine3ast10quantifier(expr, q) {
  if (q.min >= 0) {
    _L: {
      const _bind$2 = q.max;
      if (_bind$2 === undefined) {
        break _L;
      } else {
        _L$2: {
          const _bind$3 = q.max;
          if (_bind$3 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _max = _Some;
            if (_max >= q.min) {
              break _L;
            } else {
              break _L$2;
            }
          }
        }
        return $panic();
      }
    }
    return new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc10Quantifier(q, expr), expr.nullable || q.min === 0);
  } else {
    return $panic();
  }
}
function _M0FPC46string8internal13regex__engine3ast10preference(pref, expr) {
  const _bind$2 = expr.desc;
  if (_bind$2.$tag === 0) {
    return expr;
  } else {
    return new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc10Preference(pref, expr), expr.nullable);
  }
}
function _M0FPC46string8internal13regex__engine3ast8shortest(expr) {
  return _M0FPC46string8internal13regex__engine3ast10preference(0, expr);
}
function _M0FPC46string8internal13regex__engine3ast7capture(name, expr) {
  return new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc7Capture(name, expr), expr.nullable);
}
function _M0FPC46string8internal13regex__engine3ast9assertion(a) {
  return new _M0TPC46string8internal13regex__engine3ast7Pattern(new _M0DTPC46string8internal13regex__engine3ast11PatternDesc9Assertion(a), true);
}
function _M0FPC111sorted__set6heightGiE(node) {
  if (node === undefined) {
    return 0;
  } else {
    const _Some = node;
    const _x = _Some;
    const _height = _x.height;
    return _height;
  }
}
function _M0FPC111sorted__set16new__sorted__setGiE() {
  return new _M0TPC111sorted__set9SortedSetGiE(undefined, 0);
}
function _M0FPC111sorted__set10height__geGiE(x1, x2) {
  let h1;
  let h2;
  _L: {
    if (x1 === undefined) {
      if (x2 === undefined) {
        h1 = 0;
        h2 = 0;
        break _L;
      } else {
        const _Some = x2;
        const _x = _Some;
        const _h2 = _x.height;
        h1 = 0;
        h2 = _h2;
        break _L;
      }
    } else {
      const _Some = x1;
      const _x = _Some;
      const _h1 = _x.height;
      if (x2 === undefined) {
        h1 = _h1;
        h2 = 0;
        break _L;
      } else {
        const _Some$2 = x2;
        const _x$2 = _Some$2;
        const _h2 = _x$2.height;
        h1 = _h1;
        h2 = _h2;
        break _L;
      }
    }
  }
  return h1 >= h2;
}
function _M0MPC111sorted__set4Node14update__heightGiE(self) {
  const _p = _M0FPC111sorted__set6heightGiE(self.left);
  const _p$2 = _M0FPC111sorted__set6heightGiE(self.right);
  self.height = 1 + (_p > _p$2 ? _p : _p$2) | 0;
}
function _M0FPC111sorted__set9rotate__lGiE(n) {
  const _p = n.right;
  let r;
  if (_p === undefined) {
    r = $panic();
  } else {
    const _p$2 = _p;
    r = _p$2;
  }
  n.right = r.left;
  _M0MPC111sorted__set4Node14update__heightGiE(n);
  r.left = n;
  _M0MPC111sorted__set4Node14update__heightGiE(r);
  return r;
}
function _M0FPC111sorted__set9rotate__rGiE(n) {
  const _p = n.left;
  let l;
  if (_p === undefined) {
    l = $panic();
  } else {
    const _p$2 = _p;
    l = _p$2;
  }
  n.left = l.right;
  _M0MPC111sorted__set4Node14update__heightGiE(n);
  l.right = n;
  _M0MPC111sorted__set4Node14update__heightGiE(l);
  return l;
}
function _M0FPC111sorted__set10rotate__lrGiE(n) {
  const _p = n.left;
  let l;
  if (_p === undefined) {
    l = $panic();
  } else {
    const _p$2 = _p;
    l = _p$2;
  }
  const v = _M0FPC111sorted__set9rotate__lGiE(l);
  n.left = v;
  return _M0FPC111sorted__set9rotate__rGiE(n);
}
function _M0FPC111sorted__set10rotate__rlGiE(n) {
  const _p = n.right;
  let r;
  if (_p === undefined) {
    r = $panic();
  } else {
    const _p$2 = _p;
    r = _p$2;
  }
  const v = _M0FPC111sorted__set9rotate__rGiE(r);
  n.right = v;
  return _M0FPC111sorted__set9rotate__lGiE(n);
}
function _M0FPC111sorted__set7balanceGiE(root) {
  const l = root.left;
  const r = root.right;
  const hl = _M0FPC111sorted__set6heightGiE(l);
  const hr = _M0FPC111sorted__set6heightGiE(r);
  let new_root;
  if (hl > (hr + 1 | 0)) {
    let _bind$2;
    if (l === undefined) {
      _bind$2 = $panic();
    } else {
      const _p = l;
      _bind$2 = _p;
    }
    const _ll = _bind$2.left;
    const _lr = _bind$2.right;
    new_root = _M0FPC111sorted__set10height__geGiE(_ll, _lr) ? _M0FPC111sorted__set9rotate__rGiE(root) : _M0FPC111sorted__set10rotate__lrGiE(root);
  } else {
    if (hr > (hl + 1 | 0)) {
      let _bind$2;
      if (r === undefined) {
        _bind$2 = $panic();
      } else {
        const _p = r;
        _bind$2 = _p;
      }
      const _rl = _bind$2.left;
      const _rr = _bind$2.right;
      new_root = _M0FPC111sorted__set10height__geGiE(_rr, _rl) ? _M0FPC111sorted__set9rotate__lGiE(root) : _M0FPC111sorted__set10rotate__rlGiE(root);
    } else {
      new_root = root;
    }
  }
  _M0MPC111sorted__set4Node14update__heightGiE(new_root);
  return new_root;
}
function _M0FPC111sorted__set17new__node_2einnerGiE(value, left, right, height) {
  return new _M0TPC111sorted__set4NodeGiE(value, left, right, height);
}
function _M0FPC111sorted__set9new__nodeGiE(value, left$46$opt, right$46$opt, height$46$opt) {
  let left;
  if (left$46$opt.$tag === 1) {
    const _Some = left$46$opt;
    left = _Some._0;
  } else {
    left = undefined;
  }
  let right;
  if (right$46$opt.$tag === 1) {
    const _Some = right$46$opt;
    right = _Some._0;
  } else {
    right = undefined;
  }
  let height;
  if (height$46$opt === undefined) {
    height = 1;
  } else {
    const _Some = height$46$opt;
    height = _Some;
  }
  return _M0FPC111sorted__set17new__node_2einnerGiE(value, left, right, height);
}
function _M0FPC111sorted__set9add__nodeGiE(root, value) {
  if (root === undefined) {
    return { _0: _M0FPC111sorted__set9new__nodeGiE(value, _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None__, _M0DTPC16option6OptionGORPC111sorted__set4NodeGiEE4None__, undefined), _1: true };
  } else {
    const _Some = root;
    const _n = _Some;
    const comp = $compare_int(value, _n.value);
    if (comp === 0) {
      _n.value = value;
      return { _0: _n, _1: false };
    } else {
      const l = _n.left;
      const r = _n.right;
      if (comp < 0) {
        const _bind$2 = _M0FPC111sorted__set9add__nodeGiE(l, value);
        const _nl = _bind$2._0;
        const _inserted = _bind$2._1;
        _n.left = _nl;
        return { _0: _M0FPC111sorted__set7balanceGiE(_n), _1: _inserted };
      } else {
        const _bind$2 = _M0FPC111sorted__set9add__nodeGiE(r, value);
        const _nr = _bind$2._0;
        const _inserted = _bind$2._1;
        _n.right = _nr;
        return { _0: _M0FPC111sorted__set7balanceGiE(_n), _1: _inserted };
      }
    }
  }
}
function _M0MPC111sorted__set9SortedSet3addGiE(self, value) {
  const _bind$2 = _M0FPC111sorted__set9add__nodeGiE(self.root, value);
  const _new_root = _bind$2._0;
  const _inserted = _bind$2._1;
  if (_M0IP016_24default__implPB2Eq10not__equalGORPC111sorted__set4NodeGiEE(self.root, _new_root)) {
    self.root = _new_root;
  }
  if (_inserted) {
    self.size = self.size + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0MPC111sorted__set9SortedSet9SortedSetGiE(array) {
  const set = _M0FPC111sorted__set16new__sorted__setGiE();
  const _bind$2 = array.end - array.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const x = array.buf[array.start + _ | 0];
      _M0MPC111sorted__set9SortedSet3addGiE(set, x);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return set;
}
function _M0MPC111sorted__set9SortedSet4iterGiE(self) {
  const curr_node = new _M0TPB8MutLocalGORPC111sorted__set4NodeGiEE(self.root);
  const parents = [];
  return _M0MPB4Iter3newGiE(() => {
    let _tmp = curr_node.val;
    while (true) {
      const x = _tmp;
      if (x === undefined) {
        const _bind$2 = _M0MPC15array5Array3popGRPC14json10WriteFrameE(parents);
        if (_bind$2 === undefined) {
          return undefined;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _value = _x._0;
          const _right = _x._1;
          curr_node.val = _right;
          return _value;
        }
      } else {
        const _Some = x;
        const _x = _Some;
        const _x$2 = _x.left;
        if (_x$2 === undefined) {
          const _value = _x.value;
          const _right = _x.right;
          curr_node.val = _right;
          return _value;
        } else {
          const _value = _x.value;
          const _right = _x.right;
          _M0MPC15array5Array4pushGRPB4JsonE(parents, { _0: _value, _1: _right });
          _tmp = _x$2;
          continue;
        }
      }
    }
  }, self.size);
}
function _M0MPC46string8internal13regex__engine11symbol__map5Table3map(self, c) {
  if (c < 128) {
    return self[c];
  } else {
    const arr = self;
    let left = 0;
    let right = ((arr.length - 128 | 0) / 3 | 0) - 1 | 0;
    while (true) {
      if (left <= right) {
        const mid = left + ((right - left | 0) / 2 | 0) | 0;
        const entry_base = 128 + (Math.imul(mid, 3) | 0) | 0;
        $bound_check(arr, entry_base);
        if (c < arr[entry_base]) {
          right = mid - 1 | 0;
        } else {
          const _tmp = entry_base + 1 | 0;
          $bound_check(arr, _tmp);
          if (c > arr[_tmp]) {
            left = mid + 1 | 0;
          } else {
            const _tmp$2 = entry_base + 2 | 0;
            $bound_check(arr, _tmp$2);
            return arr[_tmp$2];
          }
        }
        continue;
      } else {
        break;
      }
    }
    return $panic();
  }
}
function _M0MPC46string8internal13regex__engine11symbol__map5Table8map__set(self, set) {
  return _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__by(set, (c) => _M0MPC46string8internal13regex__engine11symbol__map5Table3map(self, c));
}
function _M0FPC46string8internal13regex__engine11symbol__map3new() {
  const _bind$2 = [];
  return _M0MPC111sorted__set9SortedSet9SortedSetGiE(new _M0TPB9ArrayViewGiE(_bind$2, 0, 0));
}
function _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap5split(self, set) {
  const _it = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9intervals(set);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _interval = _Some;
      const _start = _interval._0;
      const _stop = _interval._1;
      _M0MPC111sorted__set9SortedSet3addGiE(self, _start);
      if ((_stop + 1 | 0) > _stop) {
        _M0MPC111sorted__set9SortedSet3addGiE(self, _stop + 1 | 0);
      }
      continue;
    }
  }
}
function _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap15each__intervals(self, lb, ub, f) {
  const _p = self.root;
  if (_p === undefined) {
    f(lb, ub);
    return;
  } else {
    const _it = _M0MPC111sorted__set9SortedSet4iterGiE(self);
    let last_stop;
    let _tmp = lb;
    while (true) {
      const last_stop$2 = _tmp;
      const _bind$2 = _M0MPB4Iter4nextGiE(_it);
      if (_bind$2 === undefined) {
        last_stop = last_stop$2;
        break;
      } else {
        const _Some = _bind$2;
        const _stop = _Some;
        if (_stop > ub) {
          last_stop = last_stop$2;
          break;
        }
        if ((_stop - 1 | 0) >= last_stop$2) {
          f(last_stop$2, _stop - 1 | 0);
          _tmp = _stop;
          continue;
        } else {
          continue;
        }
      }
    }
    if (ub >= last_stop) {
      f(last_stop, ub);
      return;
    } else {
      return;
    }
  }
}
function _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap8finalize(self, lb, ub) {
  if (lb >= 0) {
    const repr = [];
    const table = _M0MPC15array5Array4makeGiE(128, -1);
    if (ub < 128) {
      _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap15each__intervals(self, 0, ub, (lo, hi) => {
        const symbol = repr.length;
        _M0MPC15array5Array4pushGiE(repr, lo > lb ? lo : lb);
        let _tmp = lo;
        while (true) {
          const c = _tmp;
          if (c <= hi) {
            _M0MPC15array5Array3setGiE(table, c, symbol);
            _tmp = c + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      });
    } else {
      _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap15each__intervals(self, 0, 127, (lo, hi) => {
        const symbol = repr.length;
        _M0MPC15array5Array4pushGiE(repr, lo > lb ? lo : lb);
        let _tmp = lo;
        while (true) {
          const c = _tmp;
          if (c <= hi) {
            _M0MPC15array5Array3setGiE(table, c, symbol);
            _tmp = c + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      });
      _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap15each__intervals(self, 128, ub, (lo, hi) => {
        const symbol = repr.length;
        _M0MPC15array5Array4pushGiE(repr, lo > lb ? lo : lb);
        _M0MPC15array5Array4pushGiE(table, lo);
        _M0MPC15array5Array4pushGiE(table, hi);
        _M0MPC15array5Array4pushGiE(table, symbol);
      });
    }
    return { _0: _M0MPC15array10FixedArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(table, 0, table.length)), _1: _M0MPC15array13ReadOnlyArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(repr, 0, repr.length)) };
  } else {
    return $panic();
  }
}
function _M0MPC36string8internal13regex__engine16TranslateContext3new(ctx, symbol_table) {
  return new _M0TPC36string8internal13regex__engine16TranslateContext(ctx, 2, [], symbol_table);
}
function _M0FPC36string8internal13regex__engine13enforce__pref(ctx, pref, pref2, cr) {
  if (pref === 2) {
    if (pref2 === 2) {
      return cr;
    } else {
      return _M0FPC38internal13regex__engine8automata6e__seq(ctx, pref2, cr, _M0FPC38internal13regex__engine8automata6e__eps);
    }
  } else {
    return cr;
  }
}
function _M0FPC36string8internal13regex__engine4iterGRPC38internal13regex__engine8automata4ExprE(n, f, init) {
  let _tmp = n;
  let _tmp$2 = init;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i === 0) {
      return acc;
    } else {
      _tmp = i - 1 | 0;
      _tmp$2 = f(acc);
      continue;
    }
  }
}
function _M0FPC36string8internal13regex__engine12transl__asrt(ctx, asrt) {
  switch (asrt) {
    case 2: {
      return _M0FPC38internal13regex__engine8automata8e__after(ctx, 17);
    }
    case 3: {
      return _M0FPC38internal13regex__engine8automata9e__before(ctx, 17);
    }
    case 4: {
      return _M0FPC38internal13regex__engine8automata6e__seq(ctx, 2, _M0FPC38internal13regex__engine8automata8e__after(ctx, 9), _M0FPC38internal13regex__engine8automata9e__before(ctx, 2));
    }
    case 5: {
      return _M0FPC38internal13regex__engine8automata6e__seq(ctx, 2, _M0FPC38internal13regex__engine8automata8e__after(ctx, 2), _M0FPC38internal13regex__engine8automata9e__before(ctx, 5));
    }
    case 6: {
      return _M0FPC38internal13regex__engine8automata6e__alt(ctx, [_M0FPC38internal13regex__engine8automata6e__seq(ctx, 2, _M0FPC38internal13regex__engine8automata8e__after(ctx, 2), _M0FPC38internal13regex__engine8automata9e__before(ctx, 2)), _M0FPC38internal13regex__engine8automata6e__seq(ctx, 2, _M0FPC38internal13regex__engine8automata8e__after(ctx, 9), _M0FPC38internal13regex__engine8automata9e__before(ctx, 5))]);
    }
    case 0: {
      return _M0FPC38internal13regex__engine8automata8e__after(ctx, 1);
    }
    default: {
      return _M0FPC38internal13regex__engine8automata9e__before(ctx, 1);
    }
  }
}
function _M0FPC36string8internal13regex__engine9translate(tc, ast) {
  const _ctx = tc.ctx;
  const _pref = tc.pref;
  const _groups = tc.groups;
  const _symbol_table = tc.symbol_table;
  const _bind$2 = ast.desc;
  switch (_bind$2.$tag) {
    case 0: {
      const _Char = _bind$2;
      const _c = _Char._0;
      return { _0: _M0FPC38internal13regex__engine8automata7e__cset(_ctx, _M0MPC46string8internal13regex__engine11symbol__map5Table8map__set(_symbol_table, _c)), _1: _pref };
    }
    case 1: {
      const _Sequence = _bind$2;
      const _exprs = _Sequence._0;
      return { _0: _M0FPC36string8internal13regex__engine11transl__seq(tc, _exprs), _1: _pref };
    }
    case 2: {
      const _Alternation = _bind$2;
      const _exprs$2 = _Alternation._0;
      const alts = [];
      const _it = _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE(_exprs$2);
      while (true) {
        const _bind$3 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
        if (_bind$3 === undefined) {
          break;
        } else {
          const _Some = _bind$3;
          const _expr = _Some;
          const _bind$4 = _M0FPC36string8internal13regex__engine9translate(tc, _expr);
          const _cr = _bind$4._0;
          const _pref2 = _bind$4._1;
          _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC36string8internal13regex__engine13enforce__pref(_ctx, _pref, _pref2, _cr));
          continue;
        }
      }
      return { _0: _M0FPC38internal13regex__engine8automata6e__alt(_ctx, alts), _1: _pref };
    }
    case 3: {
      const _Quantifier = _bind$2;
      const _q = _Quantifier._0;
      const _expr = _Quantifier._1;
      const _bind$3 = _M0FPC36string8internal13regex__engine9translate(tc, _expr);
      const _cr = _bind$3._0;
      const _pref2 = _bind$3._1;
      const _bind$4 = _q.max;
      let rem;
      if (_bind$4 === undefined) {
        rem = _M0FPC38internal13regex__engine8automata6e__rep(_ctx, _q.mode, _pref2, _cr);
      } else {
        const _Some = _bind$4;
        const _max = _Some;
        const _bind$5 = _q.mode;
        let repeater;
        if (_bind$5 === 0) {
          repeater = (rem$2) => _M0FPC38internal13regex__engine8automata6e__alt(_ctx, [_M0FPC38internal13regex__engine8automata6e__seq(_ctx, _pref2, _M0FPC38internal13regex__engine8automata7e__copy(_ctx, _cr), rem$2), _M0FPC38internal13regex__engine8automata6e__eps]);
        } else {
          repeater = (rem$2) => _M0FPC38internal13regex__engine8automata6e__alt(_ctx, [_M0FPC38internal13regex__engine8automata6e__eps, _M0FPC38internal13regex__engine8automata6e__seq(_ctx, _pref2, _M0FPC38internal13regex__engine8automata7e__copy(_ctx, _cr), rem$2)]);
        }
        rem = _M0FPC36string8internal13regex__engine4iterGRPC38internal13regex__engine8automata4ExprE(_max - _q.min | 0, repeater, _M0FPC38internal13regex__engine8automata6e__eps);
      }
      const result = _M0FPC36string8internal13regex__engine4iterGRPC38internal13regex__engine8automata4ExprE(_q.min, (rem$2) => _M0FPC38internal13regex__engine8automata6e__seq(_ctx, _pref2, _M0FPC38internal13regex__engine8automata7e__copy(_ctx, _cr), rem$2), rem);
      return { _0: result, _1: _pref };
    }
    case 4: {
      const _Preference = _bind$2;
      const _pref2$2 = _Preference._0;
      const _expr$2 = _Preference._1;
      const _bind$5 = _M0FPC36string8internal13regex__engine9translate(new _M0TPC36string8internal13regex__engine16TranslateContext(tc.ctx, _pref2$2, tc.groups, tc.symbol_table), _expr$2);
      const _cr$2 = _bind$5._0;
      const _pref3 = _bind$5._1;
      return { _0: _M0FPC36string8internal13regex__engine13enforce__pref(_ctx, _pref2$2, _pref3, _cr$2), _1: _pref2$2 };
    }
    case 5: {
      const _Capture = _bind$2;
      const _name = _Capture._0;
      const _expr$3 = _Capture._1;
      const group_index = _groups.length;
      _M0MPC15array5Array4pushGRPB5ArrayGRP311QuietlyChan10moonschema5rules7PathSegEE(_groups, _name);
      const _bind$6 = _M0FPC36string8internal13regex__engine9translate(tc, _expr$3);
      const _cr$3 = _bind$6._0;
      const _pref2$3 = _bind$6._1;
      return { _0: _M0FPC38internal13regex__engine8automata6e__seq(_ctx, 2, _M0FPC38internal13regex__engine8automata7e__mark(_ctx, Math.imul(group_index, 2) | 0), _M0FPC38internal13regex__engine8automata6e__seq(_ctx, 2, _cr$3, _M0FPC38internal13regex__engine8automata7e__mark(_ctx, (Math.imul(group_index, 2) | 0) + 1 | 0))), _1: _pref2$3 };
    }
    default: {
      const _Assertion = _bind$2;
      const _asrt = _Assertion._0;
      return { _0: _M0FPC36string8internal13regex__engine12transl__asrt(_ctx, _asrt), _1: _pref };
    }
  }
}
function _M0FPC36string8internal13regex__engine11transl__seqN2goS139(_env, i) {
  const tc = _env._1;
  const exprs = _env._0;
  if (i >= exprs.length) {
    return _M0FPC38internal13regex__engine8automata6e__eps;
  } else {
    $bound_check(exprs, i);
    const _bind$2 = _M0FPC36string8internal13regex__engine9translate(tc, exprs[i]);
    const _cr = _bind$2._0;
    const _pref2 = _bind$2._1;
    const cr2 = _M0FPC36string8internal13regex__engine11transl__seqN2goS139(_env, i + 1 | 0);
    return _M0FPC38internal13regex__engine8automata7is__eps(cr2) ? _M0FPC36string8internal13regex__engine13enforce__pref(tc.ctx, tc.pref, _pref2, _cr) : _M0FPC38internal13regex__engine8automata7is__eps(_cr) ? cr2 : _M0FPC38internal13regex__engine8automata6e__seq(tc.ctx, _pref2, _cr, cr2);
  }
}
function _M0FPC36string8internal13regex__engine11transl__seq(tc, exprs) {
  const _env = { _0: exprs, _1: tc };
  return _M0FPC36string8internal13regex__engine11transl__seqN2goS139(_env, 0);
}
function _M0FPC36string8internal13regex__engine9symbolize(profile, symbol_map, expr) {
  const aux = (expr$2) => {
    let _tmp = expr$2.desc;
    let _tmp$2 = expr$2.nullable;
    _L: while (true) {
      const expr_desc = _tmp;
      _L$2: {
        _L$3: {
          switch (expr_desc.$tag) {
            case 0: {
              const _Char = expr_desc;
              const _s = _Char._0;
              _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap5split(symbol_map, _s);
              return;
            }
            case 1: {
              const _Sequence = expr_desc;
              const _l = _Sequence._0;
              _M0MPC15array13ReadOnlyArray4eachGRPC46string8internal13regex__engine3ast7PatternE(_l, aux);
              return;
            }
            case 2: {
              const _Alternation = expr_desc;
              const _l$2 = _Alternation._0;
              _M0MPC15array13ReadOnlyArray4eachGRPC46string8internal13regex__engine3ast7PatternE(_l$2, aux);
              return;
            }
            case 3: {
              const _Quantifier = expr_desc;
              const _r = _Quantifier._1;
              _tmp = _r.desc;
              _tmp$2 = _r.nullable;
              continue _L;
            }
            case 6: {
              const _Assertion = expr_desc;
              const _x = _Assertion._0;
              switch (_x) {
                case 2: {
                  break _L$3;
                }
                case 3: {
                  break _L$3;
                }
                case 4: {
                  break _L$2;
                }
                case 5: {
                  break _L$2;
                }
                case 6: {
                  break _L$2;
                }
                case 0: {
                  return;
                }
                default: {
                  return;
                }
              }
            }
            case 4: {
              const _Preference = expr_desc;
              const _r$2 = _Preference._1;
              _tmp = _r$2.desc;
              _tmp$2 = _r$2.nullable;
              continue _L;
            }
            default: {
              const _Capture = expr_desc;
              const _r$3 = _Capture._1;
              _tmp = _r$3.desc;
              _tmp$2 = _r$3.nullable;
              continue _L;
            }
          }
        }
        _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap5split(symbol_map, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(10));
        return;
      }
      const _it = _M0MPC15array13ReadOnlyArray4iterGRPC46string8internal13regex__engine3ast7PatternE(profile.word_symbolize_splits);
      while (true) {
        const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
        if (_bind$2 === undefined) {
          return;
        } else {
          const _Some = _bind$2;
          const _split = _Some;
          _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap5split(symbol_map, _split);
          continue;
        }
      }
    }
  };
  aux(expr);
}
function _M0MPC36string8internal13regex__engine7StateId5index(self) {
  const x = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asIntN(64, self) >> BigInt(43 & 63)))) | 0;
  return x < 0 ? -(x + 2 | 0) | 0 : x;
}
function _M0MPC36string8internal13regex__engine5Regex10get__state(self, state_id) {
  return self.states[_M0MPC36string8internal13regex__engine7StateId5index(state_id)];
}
function _M0MPC36string8internal13regex__engine5Regex12num__symbols(self) {
  const _p = self.symbol_repr;
  return _p.length;
}
function _M0MPC36string8internal13regex__engine7StateId4slot(self) {
  return Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asIntN(64, self) >> BigInt(32 & 63)))) & 2047;
}
function _M0MPC36string8internal13regex__engine7StateId3new(index, slot, is_break, num_symbols) {
  const transition_base = Math.imul(index, num_symbols) | 0;
  const encoded_index = is_break ? -2 - index | 0 : index;
  return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt(encoded_index << 11 | slot)) << BigInt(32 & 63)) | BigInt.asUintN(64, BigInt(transition_base)));
}
function _M0MPC36string8internal13regex__engine5Regex15stablize__state(self, state) {
  return _M0MPC17hashmap7HashMap13get__or__initGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(self.state_table, state, () => {
    const index = self.num_states;
    self.num_states = self.num_states + 1 | 0;
    const num_symbols = _M0MPC36string8internal13regex__engine5Regex12num__symbols(self);
    if (index >= self.states.length) {
      const _p = Math.imul(self.states.length, 2) | 0;
      const _p$2 = 4;
      const new_states_len = _p > _p$2 ? _p : _p$2;
      const new_states = $make_array_len_and_init(new_states_len, _M0FPC38internal13regex__engine8automata9st__dummy);
      _M0MPC15array10FixedArray16blit__to_2einnerGRPC38internal13regex__engine8automata5StateE(self.states, new_states, self.states.length, 0, 0);
      const new_transition_table = $make_array_len_and_init(Math.imul(new_states_len, num_symbols) | 0, _M0FPC36string8internal13regex__engine18pending__state__id);
      _M0MPC15array10FixedArray16blit__to_2einnerGRPC38internal13regex__engine8automata5StateE(self.transition_table, new_transition_table, self.transition_table.length, 0, 0);
      const new_final_table = $make_array_len_and_init(new_states_len, _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE5Empty__);
      _M0MPC15array10FixedArray16blit__to_2einnerGRPC38internal13regex__engine8automata5StateE(self.final_table, new_final_table, self.final_table.length, 0, 0);
      self.states = new_states;
      self.transition_table = new_transition_table;
      self.final_table = new_final_table;
    }
    const _tmp = self.states;
    $bound_check(_tmp, index);
    _tmp[index] = state;
    const _tmp$2 = state.slot;
    const _bind$2 = _M0MPC38internal13regex__engine8automata5State6status(state);
    let _tmp$3;
    switch (_bind$2.$tag) {
      case 1: {
        _tmp$3 = true;
        break;
      }
      case 0: {
        _tmp$3 = true;
        break;
      }
      default: {
        _tmp$3 = false;
      }
    }
    return _M0MPC36string8internal13regex__engine7StateId3new(index, _tmp$2, _tmp$3, num_symbols);
  });
}
function _M0MPC36string8internal13regex__engine5Regex22stablize__start__state(self, prev_cat) {
  const _bind$2 = self.start_states;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const start_state = _bind$2[_];
      const _cat = start_state._0;
      const _state_id = start_state._1;
      if (_cat === prev_cat) {
        return _state_id;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const state_id = _M0MPC36string8internal13regex__engine5Regex15stablize__state(self, _M0MPC38internal13regex__engine8automata5State5start(prev_cat, self.expr));
  _M0MPC15array5Array4pushGRPB4JsonE(self.start_states, { _0: prev_cat, _1: state_id });
  return state_id;
}
function _M0FPC36string8internal13regex__engine22category__from__symbol(profile, symbol_repr, symbol) {
  if (symbol === -1) {
    return 1;
  } else {
    const _func = profile.category;
    $bound_check(symbol_repr, symbol);
    return _func(symbol_repr[symbol]);
  }
}
function _M0MPC36string8internal13regex__engine5Regex21stablize__next__state(self, prev_state_id, symbol) {
  const cat = _M0FPC36string8internal13regex__engine22category__from__symbol(self.profile, self.symbol_repr, symbol);
  const prev_state = _M0MPC36string8internal13regex__engine5Regex10get__state(self, prev_state_id);
  const state = _M0FPC38internal13regex__engine8automata5delta(self.ctx, prev_state, symbol, cat);
  return _M0MPC36string8internal13regex__engine5Regex15stablize__state(self, state);
}
function _M0MPC36string8internal13regex__engine5Regex15stablize__final(self, state_id, state, next_cat) {
  const state_index = _M0MPC36string8internal13regex__engine7StateId5index(state_id);
  const _tmp = self.final_table;
  $bound_check(_tmp, state_index);
  let _tmp$2 = _tmp[state_index];
  while (true) {
    const entry = _tmp$2;
    if (entry.$tag === 0) {
      const next_state = _M0FPC38internal13regex__engine8automata5delta(self.ctx, state, -1, next_cat);
      const slot = next_state.slot;
      const status = _M0MPC38internal13regex__engine8automata5State6status(next_state);
      const _tmp$3 = self.final_table;
      const _p = { _0: next_cat, _1: slot, _2: status };
      const _tmp$4 = self.final_table;
      $bound_check(_tmp$4, state_index);
      const _p$2 = _tmp$4[state_index];
      $bound_check(_tmp$3, state_index);
      _tmp$3[state_index] = new _M0DTPC14list4ListGURPC38internal13regex__engine13shared__types8CategoryRPC38internal13regex__engine8automata4SlotRPC38internal13regex__engine8automata6StatusEE4More(_p, _p$2);
      return { _0: slot, _1: status };
    } else {
      const _More = entry;
      const _head = _More._0;
      const _tail = _More._1;
      const _p = _head._0;
      if (_p === next_cat) {
        return { _0: _head._1, _1: _head._2 };
      } else {
        _tmp$2 = _tail;
        continue;
      }
    }
  }
}
function _M0MPC36string8internal13regex__engine5Regex3new(profile, ctx, expr, groups, symbol_table, symbol_repr) {
  const _tmp = [];
  const _bind$2 = [];
  return new _M0TPC36string8internal13regex__engine5Regex(profile, ctx, expr, groups, symbol_table, symbol_repr, _tmp, _M0MPC17hashmap7HashMap7HashMapGRPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdE(new _M0TPB9ArrayViewGURPC38internal13regex__engine8automata5StateRPC36string8internal13regex__engine7StateIdEE(_bind$2, 0, 0), undefined), [], [], [], 0);
}
function _M0MPC36string8internal13regex__engine9Positions3new() {
  return _M0MPC15array5Array4makeGiE(8, -1);
}
function _M0MPC36string8internal13regex__engine9Positions3set(self, slot, pos) {
  if (slot >= self.length) {
    _M0MPC15array5Array6resizeGiE(self, slot + 8 | 0, -1);
  }
  _M0MPC15array5Array3setGiE(self, slot, pos);
}
function _M0MPC36string8internal13regex__engine9Positions3get(self, slot) {
  return slot >= self.length ? -1 : _M0MPC15array5Array2atGiE(self, slot);
}
function _M0MPC36string8internal13regex__engine5Regex7execute(self, input, last_index) {
  if (last_index >= 0 && last_index <= (input.end - input.start | 0)) {
    const symbol_table = self.symbol_table;
    const _tmp = self.profile;
    const _tmp$2 = self.symbol_repr;
    let _tmp$3;
    if (last_index === 0) {
      _tmp$3 = -1;
    } else {
      const ch = input.str.charCodeAt(input.start + (last_index - 1 | 0) | 0);
      _tmp$3 = _M0MPC46string8internal13regex__engine11symbol__map5Table3map(symbol_table, ch);
    }
    const prev_cat = _M0FPC36string8internal13regex__engine22category__from__symbol(_tmp, _tmp$2, _tmp$3);
    const start_state_id = _M0MPC36string8internal13regex__engine5Regex22stablize__start__state(self, prev_cat);
    const positions = _M0MPC36string8internal13regex__engine9Positions3new();
    let transition_table = self.transition_table;
    const data = input.str;
    let pos = input.start + last_index | 0;
    const end = input.start + (input.end - input.start | 0) | 0;
    let state_id = start_state_id;
    while (true) {
      if (pos < end) {
        const ch = data.charCodeAt(pos);
        const symbol = _M0MPC46string8internal13regex__engine11symbol__map5Table3map(symbol_table, ch);
        const _p = state_id;
        const transition_index = (Number(BigInt.asIntN(32, _p)) | 0) + symbol | 0;
        const prev_state_id = state_id;
        state_id = transition_table[transition_index];
        const _p$2 = state_id;
        if (BigInt.asUintN(64, _p$2) === BigInt.asUintN(64, 18446744073709551615n)) {
          state_id = _M0MPC36string8internal13regex__engine5Regex21stablize__next__state(self, prev_state_id, symbol);
          transition_table = self.transition_table;
          const _tmp$4 = transition_table;
          $bound_check(_tmp$4, transition_index);
          _tmp$4[transition_index] = state_id;
        }
        const slot = _M0MPC36string8internal13regex__engine7StateId4slot(state_id);
        if (slot >= positions.length) {
          _M0MPC15array5Array6resizeGiE(positions, slot + 8 | 0, -1);
        }
        _M0MPC15array5Array3setGiE(positions, slot, pos);
        const _p$3 = state_id;
        if (BigInt.asIntN(64, _p$3) < BigInt.asIntN(64, 18446744073709551615n)) {
          break;
        }
        pos = pos + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const state = _M0MPC36string8internal13regex__engine5Regex10get__state(self, state_id);
    const _bind$2 = _M0MPC38internal13regex__engine8automata5State6status(state);
    let matched;
    switch (_bind$2.$tag) {
      case 0: {
        matched = undefined;
        break;
      }
      case 2: {
        const _tmp$4 = self.profile;
        const _tmp$5 = self.symbol_repr;
        let _tmp$6;
        if (pos >= end) {
          _tmp$6 = -1;
        } else {
          const ch = data.charCodeAt(pos);
          _tmp$6 = _M0MPC46string8internal13regex__engine11symbol__map5Table3map(symbol_table, ch);
        }
        const next_cat = _M0FPC36string8internal13regex__engine22category__from__symbol(_tmp$4, _tmp$5, _tmp$6);
        const _bind$3 = _M0MPC36string8internal13regex__engine5Regex15stablize__final(self, state_id, state, next_cat);
        const _slot = _bind$3._0;
        const _status = _bind$3._1;
        _L: {
          _L$2: {
            switch (_status.$tag) {
              case 0: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
              default: {
                const _Match = _status;
                const _marks = _Match._0;
                _M0MPC36string8internal13regex__engine9Positions3set(positions, _slot, pos);
                matched = _marks;
              }
            }
            break _L;
          }
          matched = undefined;
        }
        break;
      }
      default: {
        const _Match = _bind$2;
        const _marks = _Match._0;
        matched = _marks;
      }
    }
    if (matched === undefined) {
      return _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4None__;
    } else {
      const _Some = matched;
      const _marks$2 = _Some;
      const _p = self.groups;
      const mark_pos = _M0MPC15array5Array4makeGiE(Math.imul(_p.length, 2) | 0, -1);
      const shift = input.start;
      const _it = _M0MPC38internal13regex__engine8automata11MarkSlotMap5iter2(_marks$2);
      while (true) {
        const _bind$4 = _M0MPB5Iter24nextGRPC38internal13regex__engine8automata4MarkRPC38internal13regex__engine8automata4SlotE(_it);
        if (_bind$4 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$4;
          const _x = _Some$2;
          const _mark = _x._0;
          const _slot$2 = _x._1;
          _M0MPC15array5Array3setGiE(mark_pos, _mark, _M0MPC36string8internal13regex__engine9Positions3get(positions, _slot$2) - shift | 0);
          continue;
        }
      }
      return new _M0DTPC16option6OptionGRPC36string8internal13regex__engine11MatchResultE4Some(mark_pos);
    }
  } else {
    return $panic();
  }
}
function _M0FPC36string8internal13regex__engine7compile(profile, ast) {
  const ast$2 = _M0MPC46string8internal13regex__engine3ast7Pattern12is__anchored(ast) ? _M0FPC46string8internal13regex__engine3ast7capture(undefined, ast) : _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast8shortest(_M0FPC46string8internal13regex__engine3ast10quantifier(_M0FPC46string8internal13regex__engine3ast4char(profile.valid), new _M0TPC46string8internal13regex__engine3ast10Quantifier(0, undefined, 0))), _M0FPC46string8internal13regex__engine3ast7capture(undefined, ast)]);
  const symbol_map = _M0FPC46string8internal13regex__engine11symbol__map3new();
  _M0FPC36string8internal13regex__engine9symbolize(profile, symbol_map, ast$2);
  const _bind$2 = _M0MPC46string8internal13regex__engine11symbol__map9SymbolMap8finalize(symbol_map, profile.lb, profile.ub);
  const _symbol_table = _bind$2._0;
  const _symbol_repr = _bind$2._1;
  const ctx = _M0MPC38internal13regex__engine8automata7Context7Context();
  const tc = _M0MPC36string8internal13regex__engine16TranslateContext3new(ctx, _symbol_table);
  const _bind$3 = _M0FPC36string8internal13regex__engine9translate(tc, ast$2);
  const _expr = _bind$3._0;
  const _pref = _bind$3._1;
  const expr = _M0FPC36string8internal13regex__engine13enforce__pref(tc.ctx, 2, _pref, _expr);
  const _bind$4 = tc.groups;
  return _M0MPC36string8internal13regex__engine5Regex3new(profile, ctx, expr, _M0MPC15array13ReadOnlyArray11from__arrayGOsE(new _M0TPB9ArrayViewGOsE(_bind$4, 0, _bind$4.length)), _symbol_table, _symbol_repr);
}
function _M0FPC36string8internal13regex__parser5hex2i(hex) {
  const _bind$2 = hex.str;
  const _bind$3 = hex.start;
  const _bind$4 = hex.end;
  let _tmp = _bind$3;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const value = _tmp$2;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p = _bind$5;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p = _bind$5;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p;
          break _L;
        }
      }
      const value$2 = Math.imul(value, 16) | 0;
      if (_decoded_char >= 48 && _decoded_char <= 57) {
        _tmp = _decoded_next_string_index;
        _tmp$2 = value$2 + (_decoded_char - 48 | 0) | 0;
        continue;
      } else {
        if (_decoded_char >= 97 && _decoded_char <= 102) {
          _tmp = _decoded_next_string_index;
          _tmp$2 = value$2 + ((_decoded_char - 97 | 0) + 10 | 0) | 0;
          continue;
        } else {
          if (_decoded_char >= 65 && _decoded_char <= 70) {
            _tmp = _decoded_next_string_index;
            _tmp$2 = value$2 + ((_decoded_char - 65 | 0) + 10 | 0) | 0;
            continue;
          } else {
            $panic();
          }
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      return value;
    }
  }
}
function _M0FPC36string8internal13regex__parser18pattern__map__char(pat, f) {
  const _bind$2 = pat.desc;
  switch (_bind$2.$tag) {
    case 5: {
      const _Capture = _bind$2;
      const _name = _Capture._0;
      const _pat = _Capture._1;
      return _M0FPC46string8internal13regex__engine3ast7capture(_name, _M0FPC36string8internal13regex__parser18pattern__map__char(_pat, f));
    }
    case 4: {
      const _Preference = _bind$2;
      const _pref = _Preference._0;
      const _pat$2 = _Preference._1;
      return _M0FPC46string8internal13regex__engine3ast10preference(_pref, _M0FPC36string8internal13regex__parser18pattern__map__char(_pat$2, f));
    }
    case 3: {
      const _Quantifier = _bind$2;
      const _quant = _Quantifier._0;
      const _pat$3 = _Quantifier._1;
      return _M0FPC46string8internal13regex__engine3ast10quantifier(_M0FPC36string8internal13regex__parser18pattern__map__char(_pat$3, f), _quant);
    }
    case 2: {
      const _Alternation = _bind$2;
      const _pats = _Alternation._0;
      return _M0FPC46string8internal13regex__engine3ast3alt(_M0MPC15array13ReadOnlyArray3mapGRPC46string8internal13regex__engine3ast7PatternRPC46string8internal13regex__engine3ast7PatternE(_pats, (p) => _M0FPC36string8internal13regex__parser18pattern__map__char(p, f)));
    }
    case 1: {
      const _Sequence = _bind$2;
      const _pats$2 = _Sequence._0;
      return _M0FPC46string8internal13regex__engine3ast3seq(_M0MPC15array13ReadOnlyArray3mapGRPC46string8internal13regex__engine3ast7PatternRPC46string8internal13regex__engine3ast7PatternE(_pats$2, (p) => _M0FPC36string8internal13regex__parser18pattern__map__char(p, f)));
    }
    case 0: {
      const _Char = _bind$2;
      const _c = _Char._0;
      return _M0FPC46string8internal13regex__engine3ast4char(f(_c));
    }
    default: {
      const _Assertion = _bind$2;
      const _a = _Assertion._0;
      return _M0FPC46string8internal13regex__engine3ast9assertion(_a);
    }
  }
}
function _M0FPC36string8internal13regex__parser12ignore__case(cs) {
  return _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(cs, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__by(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(cs, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(65, 90)), (it) => it + 32 | 0)), _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet10offset__by(_M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(cs, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(97, 122)), (it) => it - 32 | 0));
}
function _M0MPC36string8internal13regex__parser13ParserContext3new(profile, base, mode) {
  return new _M0TPC36string8internal13regex__parser13ParserContext(profile, base, false, mode);
}
function _M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(self, view, hint, offset) {
  return new _M0DTPC15error5Error82moonbitlang_2fcore_2fstring_2finternal_2fregex__parser_2eParserError_2eParserError((view.start - self.base | 0) + offset | 0, hint);
}
function _M0MPC36string8internal13regex__parser6Parser11class__atom(rest, ctx) {
  let _cursor_253 = 0;
  const _input_end_255 = rest.end - rest.start | 0;
  const _start_254 = _cursor_253;
  let _accept_state_256 = -1;
  let _match_end_257 = -1;
  let _state_258 = 28;
  let _labelled_block_result;
  _L: {
    let _bind$2;
    let _labelled_block_result$2;
    _L$2: {
      while (true) {
        if (_state_258 !== 100) {
          if (_state_258 < 28) {
            _accept_state_256 = _state_258;
            _match_end_257 = _cursor_253;
          }
          const _tmp = Math.imul(_state_258, 39) | 0;
          let _next_char_261;
          if (_cursor_253 < _input_end_255) {
            const _char_260 = rest.str.charCodeAt(rest.start + _cursor_253 | 0);
            _cursor_253 = _cursor_253 + 1 | 0;
            _next_char_261 = _char_260;
          } else {
            _next_char_261 = -1;
          }
          const _p = _tmp + (_next_char_261 < 98 ? (_next_char_261 < 64 ? (_next_char_261 < 40 ? (_next_char_261 < 36 ? (_next_char_261 < 34 ? (_next_char_261 < 0 ? 38 : 0) : _next_char_261 > 34 ? 0 : 1) : _next_char_261 > 36 ? (_next_char_261 < 38 ? 0 : _next_char_261 > 38 ? 0 : 1) : 1) : _next_char_261 > 43 ? (_next_char_261 < 48 ? (_next_char_261 < 45 ? 0 : _next_char_261 > 45 ? 1 : 2) : _next_char_261 > 57 ? (_next_char_261 < 59 ? 4 : _next_char_261 > 62 ? 1 : 0) : 3) : 1) : _next_char_261 > 64 ? (_next_char_261 < 88 ? (_next_char_261 < 71 ? (_next_char_261 < 68 ? 3 : _next_char_261 > 68 ? 3 : 5) : _next_char_261 > 82 ? (_next_char_261 < 84 ? 7 : _next_char_261 > 86 ? 7 : 6) : 6) : _next_char_261 > 90 ? (_next_char_261 < 94 ? (_next_char_261 < 92 ? 8 : _next_char_261 > 92 ? 10 : 9) : _next_char_261 > 94 ? (_next_char_261 < 96 ? 6 : _next_char_261 > 96 ? 11 : 0) : 1) : 6) : 0) : _next_char_261 > 98 ? (_next_char_261 < 114 ? (_next_char_261 < 106 ? (_next_char_261 < 102 ? (_next_char_261 < 100 ? 13 : _next_char_261 > 100 ? 15 : 14) : _next_char_261 > 102 ? (_next_char_261 < 104 ? 17 : _next_char_261 > 104 ? 19 : 18) : 16) : _next_char_261 > 106 ? (_next_char_261 < 110 ? (_next_char_261 < 108 ? 20 : _next_char_261 > 108 ? 22 : 21) : _next_char_261 > 110 ? (_next_char_261 < 112 ? 24 : _next_char_261 > 112 ? 6 : 25) : 23) : 6) : _next_char_261 > 114 ? (_next_char_261 < 123 ? (_next_char_261 < 118 ? (_next_char_261 < 116 ? 27 : _next_char_261 > 116 ? 29 : 28) : _next_char_261 > 118 ? (_next_char_261 < 120 ? 30 : _next_char_261 > 120 ? 6 : 31) : 6) : _next_char_261 > 123 ? (_next_char_261 < 55296 ? (_next_char_261 < 125 ? 1 : _next_char_261 > 125 ? 0 : 33) : _next_char_261 > 56318 ? (_next_char_261 < 56320 ? 35 : _next_char_261 > 57343 ? 37 : 36) : 34) : 32) : 26) : 12) | 0;
          _state_258 = _M0MPC36string8internal13regex__parser6Parser11class__atomN25_2atransition__table__262S270[_p];
          continue;
        } else {
          break;
        }
      }
      const _bind$3 = _accept_state_256;
      switch (_bind$3) {
        case 0: {
          const _tmp = _match_end_257;
          const _bind$4 = _match_end_257 - _start_254 | 0;
          let _tmp$2;
          switch (_bind$4) {
            case 1: {
              _tmp$2 = rest.str.charCodeAt(rest.start + _start_254 | 0);
              break;
            }
            case 2: {
              _tmp$2 = (rest.str.charCodeAt(rest.start + _start_254 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              _tmp$2 = $panic();
            }
          }
          _labelled_block_result$2 = { _0: _tmp, _1: _tmp$2 };
          break _L$2;
        }
        case 1: {
          const _tmp$3 = _match_end_257;
          const _bind$5 = _match_end_257 - _start_254 | 0;
          let _tmp$4;
          switch (_bind$5) {
            case 1: {
              _tmp$4 = rest.str.charCodeAt(rest.start + _start_254 | 0);
              break;
            }
            case 2: {
              _tmp$4 = (rest.str.charCodeAt(rest.start + _start_254 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              _tmp$4 = $panic();
            }
          }
          _labelled_block_result$2 = { _0: _tmp$3, _1: _tmp$4 };
          break _L$2;
        }
        case 2: {
          const _tmp$5 = _match_end_257;
          const _bind$6 = _match_end_257 - _start_254 | 0;
          let _tmp$6;
          switch (_bind$6) {
            case 1: {
              _tmp$6 = rest.str.charCodeAt(rest.start + _start_254 | 0);
              break;
            }
            case 2: {
              _tmp$6 = (rest.str.charCodeAt(rest.start + _start_254 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              _tmp$6 = $panic();
            }
          }
          _labelled_block_result$2 = { _0: _tmp$5, _1: _tmp$6 };
          break _L$2;
        }
        case 3: {
          const _tmp$7 = _match_end_257;
          const _bind$7 = _match_end_257 - _start_254 | 0;
          let _tmp$8;
          switch (_bind$7) {
            case 1: {
              _tmp$8 = rest.str.charCodeAt(rest.start + _start_254 | 0);
              break;
            }
            case 2: {
              _tmp$8 = (rest.str.charCodeAt(rest.start + _start_254 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              _tmp$8 = $panic();
            }
          }
          _labelled_block_result$2 = { _0: _tmp$7, _1: _tmp$8 };
          break _L$2;
        }
        case 4: {
          const _tmp$9 = _match_end_257;
          const _bind$8 = _match_end_257 - _start_254 | 0;
          let _tmp$10;
          switch (_bind$8) {
            case 1: {
              _tmp$10 = rest.str.charCodeAt(rest.start + _start_254 | 0);
              break;
            }
            case 2: {
              _tmp$10 = (rest.str.charCodeAt(rest.start + _start_254 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              _tmp$10 = $panic();
            }
          }
          _labelled_block_result$2 = { _0: _tmp$9, _1: _tmp$10 };
          break _L$2;
        }
        case 5: {
          const _bind$9 = (_start_254 + 2 | 0) - (_start_254 + 1 | 0) | 0;
          let c;
          switch (_bind$9) {
            case 1: {
              c = rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0);
              break;
            }
            case 2: {
              c = (rest.str.charCodeAt(rest.start + (_start_254 + 1 | 0) | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + ((_start_254 + 1 | 0) + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
              break;
            }
            default: {
              c = $panic();
            }
          }
          _cursor_253 = _match_end_257;
          const rest$2 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$2, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(c) };
          break _L;
        }
        case 6: {
          _cursor_253 = _match_end_257;
          return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Use POSIX character class instead of \\w, \\W, \\d, \\D, \\s, \\S", 0));
        }
        case 7: {
          _cursor_253 = _match_end_257;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$3, _1: _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS757 };
          break _L;
        }
        case 8: {
          _cursor_253 = _match_end_257;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$4, _1: _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS758 };
          break _L;
        }
        case 9: {
          _cursor_253 = _match_end_257;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$5, _1: _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS759 };
          break _L;
        }
        case 10: {
          _cursor_253 = _match_end_257;
          const rest$6 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$6, _1: _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS760 };
          break _L;
        }
        case 11: {
          _cursor_253 = _match_end_257;
          const rest$7 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$7, _1: _M0MPC36string8internal13regex__parser6Parser11class__atomN6constrS761 };
          break _L;
        }
        case 12: {
          _cursor_253 = _match_end_257;
          return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid escape sequence", 0));
        }
        case 13: {
          const hex = _M0MPC16string10StringView12view_2einner(rest, _start_254 + 2 | 0, _start_254 + 4 | 0);
          _cursor_253 = _match_end_257;
          const rest$8 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          const _bind$10 = ctx.mode;
          if (_bind$10 === 1) {
            return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$8, "Byte escape sequences are not allowed", 0));
          }
          _labelled_block_result = { _0: rest$8, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(_M0FPC36string8internal13regex__parser5hex2i(hex)) };
          break _L;
        }
        case 14: {
          const hex$2 = _M0MPC16string10StringView12view_2einner(rest, _start_254 + 3 | 0, _match_end_257 + -1 | 0);
          _cursor_253 = _match_end_257;
          const rest$9 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          const _bind$11 = ctx.mode;
          if (_bind$11 === 0) {
            return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$9, "Unicode escape sequences are not allowed", 0));
          }
          const c$2 = _M0FPC36string8internal13regex__parser5hex2i(hex$2);
          let _tmp$11;
          if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, c$2)) {
            _tmp$11 = { _0: rest$9, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(c$2) };
          } else {
            return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$9, "Character out of range", 0));
          }
          _labelled_block_result = _tmp$11;
          break _L;
        }
        case 15: {
          const hex$3 = _M0MPC16string10StringView12view_2einner(rest, _start_254 + 2 | 0, _start_254 + 6 | 0);
          _cursor_253 = _match_end_257;
          const rest2 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          const _bind$12 = ctx.mode;
          if (_bind$12 === 0) {
            return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unicode escape sequences are not allowed", 0));
          }
          const c$3 = _M0FPC36string8internal13regex__parser5hex2i(hex$3);
          let _tmp$12;
          if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, c$3)) {
            _tmp$12 = { _0: rest2, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(c$3) };
          } else {
            return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Character out of range", 0));
          }
          _labelled_block_result = _tmp$12;
          break _L;
        }
        case 16: {
          _cursor_253 = _match_end_257;
          return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid POSIX character class", 0));
        }
        case 17: {
          _cursor_253 = _match_end_257;
          const rest$10 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$10, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser19posix__cset__xdigit) };
          break _L;
        }
        case 18: {
          _cursor_253 = _match_end_257;
          return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unsupported POSIX character class", 0));
        }
        case 19: {
          _cursor_253 = _match_end_257;
          const rest$11 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$11, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(ctx.profile.word) };
          break _L;
        }
        case 20: {
          _cursor_253 = _match_end_257;
          const rest$12 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$12, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__upper) };
          break _L;
        }
        case 21: {
          _cursor_253 = _match_end_257;
          const rest$13 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$13, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__space) };
          break _L;
        }
        case 22: {
          _cursor_253 = _match_end_257;
          const rest$14 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$14, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__lower) };
          break _L;
        }
        case 23: {
          _cursor_253 = _match_end_257;
          const rest$15 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$15, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__digit) };
          break _L;
        }
        case 24: {
          _cursor_253 = _match_end_257;
          const rest$16 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$16, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__blank) };
          break _L;
        }
        case 25: {
          _cursor_253 = _match_end_257;
          const rest$17 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$17, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__ascii) };
          break _L;
        }
        case 26: {
          _cursor_253 = _match_end_257;
          const rest$18 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$18, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__alpha) };
          break _L;
        }
        case 27: {
          _cursor_253 = _match_end_257;
          const rest$19 = _M0MPC16string10StringView12view_2einner(rest, _match_end_257, _input_end_255);
          _labelled_block_result = { _0: rest$19, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass5Class(_M0FPC36string8internal13regex__parser18posix__cset__alnum) };
          break _L;
        }
        default: {
          _cursor_253 = _start_254;
          _labelled_block_result = $panic();
          break _L;
        }
      }
    }
    _bind$2 = _labelled_block_result$2;
    const _$42$start_254_match_end23 = _bind$2._0;
    const _c = _bind$2._1;
    _cursor_253 = _$42$start_254_match_end23;
    const rest$2 = _M0MPC16string10StringView12view_2einner(rest, _$42$start_254_match_end23, _input_end_255);
    if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, _c)) {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: rest$2, _1: new _M0DTPC36string8internal13regex__parser11CharOrClass4Char(_c) });
    } else {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$2, "Character out of range", 0));
    }
  }
  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC36string8internal13regex__parser11CharOrClassERPC36string8internal13regex__parser11ParserErrorE2Ok(_labelled_block_result);
}
function _M0MPC36string8internal13regex__parser6Parser15class__contents(rest, ctx) {
  let _tmp;
  let _tmp$2 = rest;
  let _tmp$3 = _M0DTPC48internal13regex__engine13shared__types11rechar__set4Tree5Empty__;
  _L: while (true) {
    const rest$2 = _tmp$2;
    const char_set = _tmp$3;
    if ((rest$2.end - rest$2.start | 0) === 0) {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$2, "Unclosed character class", 0));
    } else {
      const _x = rest$2.str.charCodeAt(rest$2.start);
      if (_x === 93) {
        _tmp = { _0: rest$2, _1: char_set };
        break;
      } else {
        let _bind$2;
        _L$2: {
          _L$3: {
            _L$4: {
              _L$5: {
                if ((rest$2.end - rest$2.start | 0) >= 2) {
                  const _x$2 = rest$2.str.charCodeAt(rest$2.start);
                  if (_x$2 === 91) {
                    const _x$3 = rest$2.str.charCodeAt(rest$2.start + 1 | 0);
                    if (_x$3 === 58) {
                      const _bind$3 = _M0MPC36string8internal13regex__parser6Parser11class__atom(rest$2, ctx);
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$2 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                    } else {
                      break _L$5;
                    }
                  } else {
                    break _L$3;
                  }
                } else {
                  if ((rest$2.end - rest$2.start | 0) >= 1) {
                    const _x$2 = rest$2.str.charCodeAt(rest$2.start);
                    if (_x$2 === 91) {
                      break _L$5;
                    } else {
                      break _L$3;
                    }
                  } else {
                    break _L$3;
                  }
                }
                break _L$4;
              }
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$2, "Unsupported nested character class", 0));
            }
            break _L$2;
          }
          const _bind$3 = _M0MPC36string8internal13regex__parser6Parser11class__atom(rest$2, ctx);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _bind$2 = _ok._0;
          } else {
            return _bind$3;
          }
        }
        const _rest = _bind$2._0;
        const _left = _bind$2._1;
        let rest$3;
        let left_set;
        _L$3: {
          if (_left.$tag === 0) {
            const _Char = _left;
            const _c = _Char._0;
            _L$4: {
              let rest$4;
              _L$5: {
                if ((_rest.end - _rest.start | 0) >= 2) {
                  const _x$2 = _rest.str.charCodeAt(_rest.start);
                  if (_x$2 === 45) {
                    const _x$3 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                    switch (_x$3) {
                      case 45: {
                        return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Unsupported character class set expression", 0));
                      }
                      case 93: {
                        return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Dash at the start or end of character class is not supported, use \\- to match a literal dash", 0));
                      }
                      default: {
                        const _x$4 = new _M0TPC16string10StringView(_rest.str, _rest.start + 1 | 0, _rest.end);
                        rest$4 = _x$4;
                        break _L$5;
                      }
                    }
                  } else {
                    break _L$4;
                  }
                } else {
                  if ((_rest.end - _rest.start | 0) >= 1) {
                    const _x$2 = _rest.str.charCodeAt(_rest.start);
                    if (_x$2 === 45) {
                      const _x$3 = new _M0TPC16string10StringView(_rest.str, _rest.start + 1 | 0, _rest.end);
                      rest$4 = _x$3;
                      break _L$5;
                    } else {
                      break _L$4;
                    }
                  } else {
                    break _L$4;
                  }
                }
              }
              const _bind$3 = _M0MPC36string8internal13regex__parser6Parser11class__atom(rest$4, ctx);
              let _bind$4;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _bind$4 = _ok._0;
              } else {
                return _bind$3;
              }
              const _rest2 = _bind$4._0;
              const _right = _bind$4._1;
              if (_right.$tag === 0) {
                const _Char$2 = _right;
                const _c2 = _Char$2._0;
                if (_c <= _c2) {
                  rest$3 = _rest2;
                  left_set = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(_c, _c2);
                  break _L$3;
                } else {
                  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$4, "Invalid character class range", 0));
                }
              } else {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$4, "Character class range over sets", 1));
              }
            }
            rest$3 = _rest;
            left_set = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(_c);
            break _L$3;
          } else {
            const _Class = _left;
            const _cs = _Class._0;
            rest$3 = _rest;
            left_set = _cs;
            break _L$3;
          }
        }
        const char_set$2 = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Add3add(char_set, left_set);
        _L$4: {
          if ((rest$3.end - rest$3.start | 0) >= 2) {
            const _x$2 = rest$3.str.charCodeAt(rest$3.start);
            switch (_x$2) {
              case 45: {
                const _x$3 = rest$3.str.charCodeAt(rest$3.start + 1 | 0);
                if (_x$3 === 45) {
                  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$3, "Unsupported character class set expression", 0));
                } else {
                  break _L$4;
                }
              }
              case 38: {
                const _x$4 = rest$3.str.charCodeAt(rest$3.start + 1 | 0);
                if (_x$4 === 38) {
                  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$3, "Unsupported character class set expression", 0));
                } else {
                  break _L$4;
                }
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        _tmp$2 = rest$3;
        _tmp$3 = char_set$2;
        continue;
      }
    }
  }
  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE2Ok(_tmp);
}
function _M0MPC36string8internal13regex__parser6Parser16character__class(rest, ctx) {
  let rest$2;
  let neg;
  _L: {
    _L$2: {
      let rest$3;
      _L$3: {
        if ((rest.end - rest.start | 0) >= 2) {
          const _x = rest.str.charCodeAt(rest.start);
          if (_x === 91) {
            const _x$2 = rest.str.charCodeAt(rest.start + 1 | 0);
            if (_x$2 === 94) {
              const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 2 | 0, rest.end);
              rest$2 = _x$3;
              neg = true;
              break _L;
            } else {
              const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              rest$3 = _x$3;
              break _L$3;
            }
          } else {
            break _L$2;
          }
        } else {
          if ((rest.end - rest.start | 0) >= 1) {
            const _x = rest.str.charCodeAt(rest.start);
            if (_x === 91) {
              const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              rest$3 = _x$2;
              break _L$3;
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        }
      }
      rest$2 = rest$3;
      neg = false;
      break _L;
    }
    return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unexpected character", 0));
  }
  if ((rest$2.end - rest$2.start | 0) >= 1) {
    const _x = rest$2.str.charCodeAt(rest$2.start);
    if (_x === 45) {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$2, "Dash at the start or end of character class is not supported, use \\- to match a literal dash", 0));
    }
  }
  const _bind$2 = _M0MPC36string8internal13regex__parser6Parser15class__contents(rest$2, ctx);
  let _bind$3;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _bind$3 = _ok._0;
  } else {
    return _bind$2;
  }
  const _rest = _bind$3._0;
  const _char_set = _bind$3._1;
  if ((_rest.end - _rest.start | 0) >= 1) {
    const _x = _rest.str.charCodeAt(_rest.start);
    if (_x === 93) {
      const _x$2 = new _M0TPC16string10StringView(_rest.str, _rest.start + 1 | 0, _rest.end);
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: _x$2, _1: neg ? _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB3Sub3sub(ctx.profile.valid, _char_set) : _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(_char_set, ctx.profile.valid) });
    } else {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE2Ok($panic());
    }
  } else {
    return new _M0DTPC16result6ResultGURPC16string10StringViewRPC48internal13regex__engine13shared__types11rechar__set9RecharSetERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Unclosed character class", 0));
  }
}
function _M0MPC36string8internal13regex__parser6Parser12quant__bound(digits, ctx) {
  const _bind$2 = digits.str;
  const _bind$3 = digits.start;
  const _bind$4 = digits.end;
  let _tmp;
  let _tmp$2 = _bind$3;
  let _tmp$3 = 0;
  while (true) {
    const _string_index = _tmp$2;
    const value = _tmp$3;
    if (_string_index < _bind$4) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$5 = _bind$2.charCodeAt(_string_index);
        if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
          const _bind$6 = _bind$2.charCodeAt(_string_index + 1 | 0);
          if (_bind$6 >= 56320 && _bind$6 <= 57343) {
            const _tmp$4 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$4 = _string_index + 1 | 0;
            const _p = _bind$5;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$4 = _string_index + 1 | 0;
          const _p = _bind$5;
          _decoded_next_string_index = _tmp$4;
          _decoded_char = _p;
          break _L;
        }
      }
      const digit = _decoded_char - 48 | 0;
      const next = (Math.imul(value, 10) | 0) + digit | 0;
      if (next <= 256) {
        _tmp$2 = _decoded_next_string_index;
        _tmp$3 = next;
        continue;
      } else {
        return new _M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, digits, "Quantifier too large", 0));
      }
    } else {
      _tmp = value;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC36string8internal13regex__parser11ParserErrorE2Ok(_tmp);
}
function _M0MPC36string8internal13regex__parser6Parser15quantifier__opt(rest, ctx) {
  let rest$2;
  let range;
  _L: {
    let _cursor_151 = 0;
    const _input_end_153 = rest.end - rest.start | 0;
    const _start_152 = _cursor_151;
    let _accept_state_154 = -1;
    let _match_end_155 = -1;
    let _state_156 = 8;
    let _match_tag_saver_0_157 = -1;
    let _tag_0_159 = -1;
    while (true) {
      if (_state_156 !== 11) {
        if (_state_156 < 8) {
          const _bind$2 = _state_156;
          switch (_bind$2) {
            case 6: {
              _match_tag_saver_0_157 = _tag_0_159;
              break;
            }
            case 7: {
              _tag_0_159 = _cursor_151;
              break;
            }
          }
          if (_state_156 < 7) {
            _accept_state_154 = _state_156;
            _match_end_155 = _cursor_151;
          }
        }
        const _tmp = Math.imul(_state_156, 8) | 0;
        let _next_char_162;
        if (_cursor_151 < _input_end_153) {
          const _char_161 = rest.str.charCodeAt(rest.start + _cursor_151 | 0);
          _cursor_151 = _cursor_151 + 1 | 0;
          _next_char_162 = _char_161;
        } else {
          _next_char_162 = -1;
        }
        const _p = _tmp + (_next_char_162 < 58 ? (_next_char_162 < 44 ? (_next_char_162 < 42 ? 7 : _next_char_162 > 42 ? 1 : 0) : _next_char_162 > 44 ? (_next_char_162 < 48 ? 7 : 3) : 2) : _next_char_162 > 62 ? (_next_char_162 < 124 ? (_next_char_162 < 64 ? 4 : _next_char_162 > 122 ? 5 : 7) : _next_char_162 > 124 ? (_next_char_162 < 126 ? 6 : 7) : 7) : 7) | 0;
        _state_156 = _M0MPC36string8internal13regex__parser6Parser15quantifier__optN25_2atransition__table__163S174[_p];
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = _accept_state_154;
    switch (_bind$2) {
      case 0: {
        _cursor_151 = _match_end_155;
        const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        rest$2 = rest$3;
        range = { _0: 0, _1: undefined };
        break _L;
      }
      case 1: {
        _cursor_151 = _match_end_155;
        const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        rest$2 = rest$4;
        range = { _0: 1, _1: undefined };
        break _L;
      }
      case 2: {
        _cursor_151 = _match_end_155;
        const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        rest$2 = rest$5;
        range = _M0MPC36string8internal13regex__parser6Parser15quantifier__optN6constrS764;
        break _L;
      }
      case 3: {
        _cursor_151 = _match_end_155;
        return new _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid quantifier", 0));
      }
      case 4: {
        const min = _M0MPC16string10StringView12view_2einner(rest, _start_152 + 1 | 0, _match_end_155 + -1 | 0);
        _cursor_151 = _match_end_155;
        const rest$6 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        const _bind$3 = _M0MPC36string8internal13regex__parser6Parser12quant__bound(min, ctx);
        let min$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          min$2 = _ok._0;
        } else {
          return _bind$3;
        }
        rest$2 = rest$6;
        range = { _0: min$2, _1: min$2 };
        break _L;
      }
      case 5: {
        const min$3 = _M0MPC16string10StringView12view_2einner(rest, _start_152 + 1 | 0, _match_end_155 + -2 | 0);
        _cursor_151 = _match_end_155;
        const rest$7 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        const _bind$4 = _M0MPC36string8internal13regex__parser6Parser12quant__bound(min$3, ctx);
        let min$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          min$4 = _ok._0;
        } else {
          return _bind$4;
        }
        rest$2 = rest$7;
        range = { _0: min$4, _1: undefined };
        break _L;
      }
      case 6: {
        const max = _M0MPC16string10StringView12view_2einner(rest, _match_tag_saver_0_157 + 1 | 0, _match_end_155 + -1 | 0);
        const min$5 = _M0MPC16string10StringView12view_2einner(rest, _start_152 + 1 | 0, _match_tag_saver_0_157);
        _cursor_151 = _match_end_155;
        const rest$8 = _M0MPC16string10StringView12view_2einner(rest, _match_end_155, _input_end_153);
        const _bind$5 = _M0MPC36string8internal13regex__parser6Parser12quant__bound(min$5, ctx);
        let min$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          min$6 = _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0MPC36string8internal13regex__parser6Parser12quant__bound(max, ctx);
        let max$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          max$2 = _ok._0;
        } else {
          return _bind$6;
        }
        if (min$6 <= max$2) {
          rest$2 = rest$8;
          range = { _0: min$6, _1: max$2 };
          break _L;
        } else {
          return new _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$8, "Invalid quantifier", 0));
        }
      }
      default: {
        _cursor_151 = _start_152;
        rest$2 = rest;
        range = undefined;
        break _L;
      }
    }
  }
  if (range === undefined) {
    return new _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: rest$2, _1: undefined });
  } else {
    const _Some = range;
    const _x = _Some;
    const _min = _x._0;
    const _max = _x._1;
    let rest$3;
    let mode;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x$2 = rest$2.str.charCodeAt(rest$2.start);
          switch (_x$2) {
            case 63: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$3 = _x$3;
              mode = 1;
              break _L$2;
            }
            case 43: {
              return new _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$2, "Unsupported possessive quantifier", 0));
            }
            default: {
              break _L$3;
            }
          }
        } else {
          break _L$3;
        }
      }
      rest$3 = rest$2;
      mode = 0;
      break _L$2;
    }
    return new _M0DTPC16result6ResultGURPC16string10StringViewORPC46string8internal13regex__engine3ast10QuantifierERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: rest$3, _1: new _M0TPC46string8internal13regex__engine3ast10Quantifier(_min, _max, mode) });
  }
}
function _M0MPC36string8internal13regex__parser6Parser4term(rest, ctx) {
  let _cursor_59 = 0;
  const _input_end_61 = rest.end - rest.start | 0;
  const _start_60 = _cursor_59;
  let _accept_state_62 = -1;
  let _match_end_63 = -1;
  let _state_64 = 36;
  let _bind$2;
  let _labelled_block_result;
  _L: {
    let _start_60_match_end15;
    let _labelled_block_result$2;
    _L$2: {
      let _start_60_match_end28;
      let _labelled_block_result$3;
      _L$3: {
        let _bind$3;
        let _labelled_block_result$4;
        _L$4: {
          while (true) {
            if (_state_64 !== 51) {
              if (_state_64 < 36) {
                _accept_state_62 = _state_64;
                _match_end_63 = _cursor_59;
              }
              const _tmp = Math.imul(_state_64, 37) | 0;
              let _next_char_67;
              if (_cursor_59 < _input_end_61) {
                const _char_66 = rest.str.charCodeAt(rest.start + _cursor_59 | 0);
                _cursor_59 = _cursor_59 + 1 | 0;
                _next_char_67 = _char_66;
              } else {
                _next_char_67 = -1;
              }
              const _p = _tmp + (_next_char_67 < 91 ? (_next_char_67 < 60 ? (_next_char_67 < 40 ? (_next_char_67 < 34 ? (_next_char_67 < 0 ? 36 : _next_char_67 > 32 ? 1 : 0) : _next_char_67 > 34 ? (_next_char_67 < 36 ? 0 : _next_char_67 > 36 ? 0 : 3) : 2) : _next_char_67 > 40 ? (_next_char_67 < 47 ? (_next_char_67 < 44 ? 5 : _next_char_67 > 45 ? 6 : 0) : _next_char_67 > 47 ? (_next_char_67 < 58 ? 7 : _next_char_67 > 58 ? 0 : 8) : 2) : 4) : _next_char_67 > 60 ? (_next_char_67 < 68 ? (_next_char_67 < 64 ? (_next_char_67 < 62 ? 10 : _next_char_67 > 62 ? 12 : 11) : _next_char_67 > 64 ? (_next_char_67 < 66 ? 13 : _next_char_67 > 66 ? 13 : 14) : 0) : _next_char_67 > 68 ? (_next_char_67 < 84 ? (_next_char_67 < 71 ? 13 : _next_char_67 > 82 ? 17 : 16) : _next_char_67 > 86 ? (_next_char_67 < 88 ? 17 : 16) : 16) : 15) : 9) : _next_char_67 > 91 ? (_next_char_67 < 115 ? (_next_char_67 < 99 ? (_next_char_67 < 95 ? (_next_char_67 < 93 ? 19 : _next_char_67 > 93 ? 20 : 5) : _next_char_67 > 95 ? (_next_char_67 < 97 ? 0 : _next_char_67 > 97 ? 22 : 13) : 21) : _next_char_67 > 99 ? (_next_char_67 < 103 ? (_next_char_67 < 101 ? 15 : _next_char_67 > 101 ? 23 : 13) : _next_char_67 > 109 ? (_next_char_67 < 111 ? 24 : _next_char_67 > 113 ? 25 : 16) : 16) : 13) : _next_char_67 > 115 ? (_next_char_67 < 124 ? (_next_char_67 < 119 ? (_next_char_67 < 117 ? 26 : _next_char_67 > 117 ? 28 : 27) : _next_char_67 > 119 ? (_next_char_67 < 121 ? 29 : _next_char_67 > 122 ? 30 : 16) : 17) : _next_char_67 > 124 ? (_next_char_67 < 56319 ? (_next_char_67 < 126 ? 31 : _next_char_67 > 55295 ? 32 : 0) : _next_char_67 > 56319 ? (_next_char_67 < 57344 ? 34 : 35) : 33) : 5) : 17) : 18) | 0;
              _state_64 = _M0MPC36string8internal13regex__parser6Parser4termN24_2atransition__table__68S76[_p];
              continue;
            } else {
              break;
            }
          }
          const _bind$4 = _accept_state_62;
          switch (_bind$4) {
            case 0: {
              const _tmp = _match_end_63;
              const _bind$5 = _match_end_63 - _start_60 | 0;
              let _tmp$2;
              switch (_bind$5) {
                case 1: {
                  _tmp$2 = rest.str.charCodeAt(rest.start + _start_60 | 0);
                  break;
                }
                case 2: {
                  _tmp$2 = (rest.str.charCodeAt(rest.start + _start_60 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_60 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
                  break;
                }
                default: {
                  _tmp$2 = $panic();
                }
              }
              _labelled_block_result$4 = { _0: _tmp, _1: _tmp$2 };
              break _L$4;
            }
            case 1: {
              _cursor_59 = _match_end_63;
              const rest$2 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$2, _1: _M0FPC46string8internal13regex__engine3ast14end__of__input, _2: true };
              break _L;
            }
            case 2: {
              _cursor_59 = _match_end_63;
              const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$6 = _M0MPC36string8internal13regex__parser6Parser22parse__group__continue(rest$3, ctx);
              let _bind$7;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _bind$7 = _ok._0;
              } else {
                return _bind$6;
              }
              const _rest = _bind$7._0;
              const _pat = _bind$7._1;
              _labelled_block_result = { _0: _rest, _1: _M0FPC46string8internal13regex__engine3ast7capture(undefined, _pat), _2: false };
              break _L;
            }
            case 3: {
              _labelled_block_result$3 = _match_end_63;
              break _L$3;
            }
            case 4: {
              _cursor_59 = _match_end_63;
              const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$4, _1: _M0FPC46string8internal13regex__engine3ast4char(ctx.profile.valid), _2: false };
              break _L;
            }
            case 5: {
              _cursor_59 = _match_end_63;
              const _bind$8 = _M0MPC36string8internal13regex__parser6Parser16character__class(rest, ctx);
              let _bind$9;
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                _bind$9 = _ok._0;
              } else {
                return _bind$8;
              }
              const _rest$2 = _bind$9._0;
              const _char_set = _bind$9._1;
              _labelled_block_result = { _0: _rest$2, _1: _M0FPC46string8internal13regex__engine3ast4char(_char_set), _2: false };
              break _L;
            }
            case 6: {
              _labelled_block_result$3 = _match_end_63;
              break _L$3;
            }
            case 7: {
              _cursor_59 = _match_end_63;
              const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$5, _1: _M0FPC46string8internal13regex__engine3ast16start__of__input, _2: true };
              break _L;
            }
            case 8: {
              const _tmp$3 = _match_end_63;
              const _bind$10 = _match_end_63 - _start_60 | 0;
              let _tmp$4;
              switch (_bind$10) {
                case 1: {
                  _tmp$4 = rest.str.charCodeAt(rest.start + _start_60 | 0);
                  break;
                }
                case 2: {
                  _tmp$4 = (rest.str.charCodeAt(rest.start + _start_60 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_60 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
                  break;
                }
                default: {
                  _tmp$4 = $panic();
                }
              }
              _labelled_block_result$4 = { _0: _tmp$3, _1: _tmp$4 };
              break _L$4;
            }
            case 9: {
              const _tmp$5 = _match_end_63;
              const _bind$11 = _match_end_63 - _start_60 | 0;
              let _tmp$6;
              switch (_bind$11) {
                case 1: {
                  _tmp$6 = rest.str.charCodeAt(rest.start + _start_60 | 0);
                  break;
                }
                case 2: {
                  _tmp$6 = (rest.str.charCodeAt(rest.start + _start_60 | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + (_start_60 + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
                  break;
                }
                default: {
                  _tmp$6 = $panic();
                }
              }
              _labelled_block_result$4 = { _0: _tmp$5, _1: _tmp$6 };
              break _L$4;
            }
            case 10: {
              _labelled_block_result$2 = _match_end_63;
              break _L$2;
            }
            case 11: {
              const _bind$12 = (_start_60 + 2 | 0) - (_start_60 + 1 | 0) | 0;
              let c;
              switch (_bind$12) {
                case 1: {
                  c = rest.str.charCodeAt(rest.start + (_start_60 + 1 | 0) | 0);
                  break;
                }
                case 2: {
                  c = (rest.str.charCodeAt(rest.start + (_start_60 + 1 | 0) | 0) - 55296 << 10 | (rest.str.charCodeAt(rest.start + ((_start_60 + 1 | 0) + 1 | 0) | 0) - 56320 | 0)) + 65536 | 0;
                  break;
                }
                default: {
                  c = $panic();
                }
              }
              _cursor_59 = _match_end_63;
              const rest$6 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$6, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(c)), _2: false };
              break _L;
            }
            case 12: {
              _cursor_59 = _match_end_63;
              const rest$7 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$7, _1: _M0FPC46string8internal13regex__engine3ast19not__word__boundary, _2: true };
              break _L;
            }
            case 13: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Use POSIX character class instead of \\w, \\W, \\d, \\D, \\s, \\S", 0));
            }
            case 14: {
              _cursor_59 = _match_end_63;
              const rest$8 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$8, _1: _M0FPC46string8internal13regex__engine3ast3alt([_M0FPC46string8internal13regex__engine3ast15start__of__word, _M0FPC46string8internal13regex__engine3ast13end__of__word]), _2: true };
              break _L;
            }
            case 15: {
              _cursor_59 = _match_end_63;
              const rest$9 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$9, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(12)), _2: false };
              break _L;
            }
            case 16: {
              _cursor_59 = _match_end_63;
              const rest$10 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$10, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(10)), _2: false };
              break _L;
            }
            case 17: {
              _cursor_59 = _match_end_63;
              const rest$11 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$11, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(13)), _2: false };
              break _L;
            }
            case 18: {
              _cursor_59 = _match_end_63;
              const rest$12 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$12, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(9)), _2: false };
              break _L;
            }
            case 19: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid escape sequence", 0));
            }
            case 20: {
              _cursor_59 = _match_end_63;
              const rest$13 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              _labelled_block_result = { _0: rest$13, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(11)), _2: false };
              break _L;
            }
            case 21: {
              _labelled_block_result$2 = _match_end_63;
              break _L$2;
            }
            case 22: {
              _labelled_block_result$2 = _match_end_63;
              break _L$2;
            }
            case 23: {
              _labelled_block_result$2 = _match_end_63;
              break _L$2;
            }
            case 24: {
              const hex = _M0MPC16string10StringView12view_2einner(rest, _start_60 + 2 | 0, _start_60 + 4 | 0);
              _cursor_59 = _match_end_63;
              const rest$14 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$13 = ctx.mode;
              if (_bind$13 === 1) {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$14, "Byte escape sequences are not allowed", 0));
              }
              _labelled_block_result = { _0: rest$14, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(_M0FPC36string8internal13regex__parser5hex2i(hex))), _2: false };
              break _L;
            }
            case 25: {
              const hex$2 = _M0MPC16string10StringView12view_2einner(rest, _start_60 + 3 | 0, _match_end_63 + -1 | 0);
              _cursor_59 = _match_end_63;
              const rest$15 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$14 = ctx.mode;
              if (_bind$14 === 0) {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$15, "Unicode escape sequences are not allowed", 0));
              }
              const c$2 = _M0FPC36string8internal13regex__parser5hex2i(hex$2);
              let _tmp$7;
              if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, c$2)) {
                _tmp$7 = { _0: rest$15, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(c$2)), _2: false };
              } else {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$15, "Character out of range", 0));
              }
              _labelled_block_result = _tmp$7;
              break _L;
            }
            case 26: {
              const hex$3 = _M0MPC16string10StringView12view_2einner(rest, _start_60 + 2 | 0, _start_60 + 6 | 0);
              _cursor_59 = _match_end_63;
              const rest$16 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$15 = ctx.mode;
              if (_bind$15 === 0) {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$16, "Unicode escape sequences are not allowed", 0));
              }
              const c$3 = _M0FPC36string8internal13regex__parser5hex2i(hex$3);
              let _tmp$8;
              if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, c$3)) {
                _tmp$8 = { _0: rest$16, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(c$3)), _2: false };
              } else {
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$16, "Character out of range", 0));
              }
              _labelled_block_result = _tmp$8;
              break _L;
            }
            case 27: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid character class, bare POSIX character class not allowed", 0));
            }
            case 28: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unsupported negative lookahead assertion", 0));
            }
            case 29: {
              _cursor_59 = _match_end_63;
              const rest$17 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$16 = _M0MPC36string8internal13regex__parser6Parser22parse__group__continue(rest$17, ctx);
              let _bind$17;
              if (_bind$16.$tag === 1) {
                const _ok = _bind$16;
                _bind$17 = _ok._0;
              } else {
                return _bind$16;
              }
              const _rest$3 = _bind$17._0;
              const _pat$2 = _bind$17._1;
              _labelled_block_result = { _0: _rest$3, _1: _pat$2, _2: false };
              break _L;
            }
            case 30: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid group", 0));
            }
            case 31: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unsupported lookahead assertion", 0));
            }
            case 32: {
              const modifier = _M0MPC16string10StringView12view_2einner(rest, _start_60 + 2 | 0, _match_end_63 + -1 | 0);
              _cursor_59 = _match_end_63;
              const rest$18 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              let _tmp$9;
              _L$5: {
                _L$6: {
                  if ((modifier.end - modifier.start | 0) === 1) {
                    const _x = modifier.str.charCodeAt(modifier.start);
                    if (_x === 105) {
                      const need_process = !ctx.ignore_case;
                      const _bind$18 = _M0MPC36string8internal13regex__parser6Parser22parse__group__continue(rest$18, new _M0TPC36string8internal13regex__parser13ParserContext(ctx.profile, ctx.base, true, ctx.mode));
                      let _bind$19;
                      if (_bind$18.$tag === 1) {
                        const _ok = _bind$18;
                        _bind$19 = _ok._0;
                      } else {
                        return _bind$18;
                      }
                      const _rest$4 = _bind$19._0;
                      const _pat$3 = _bind$19._1;
                      _tmp$9 = { _0: _rest$4, _1: need_process ? _M0FPC36string8internal13regex__parser18pattern__map__char(_pat$3, _M0FPC36string8internal13regex__parser12ignore__case) : _pat$3, _2: false };
                    } else {
                      break _L$6;
                    }
                  } else {
                    break _L$6;
                  }
                  break _L$5;
                }
                return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest$18, "Invalid group", 0));
              }
              _labelled_block_result = _tmp$9;
              break _L;
            }
            case 33: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unsupported negative lookbehind assertion", 0));
            }
            case 34: {
              _cursor_59 = _match_end_63;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unsupported lookbehind assertion", 0));
            }
            case 35: {
              const name = _M0MPC16string10StringView12view_2einner(rest, _start_60 + 3 | 0, _match_end_63 + -1 | 0);
              _cursor_59 = _match_end_63;
              const rest$19 = _M0MPC16string10StringView12view_2einner(rest, _match_end_63, _input_end_61);
              const _bind$18 = _M0MPC36string8internal13regex__parser6Parser22parse__group__continue(rest$19, ctx);
              let _bind$19;
              if (_bind$18.$tag === 1) {
                const _ok = _bind$18;
                _bind$19 = _ok._0;
              } else {
                return _bind$18;
              }
              const _rest$4 = _bind$19._0;
              const _pat$3 = _bind$19._1;
              _labelled_block_result = { _0: _rest$4, _1: _M0FPC46string8internal13regex__engine3ast7capture(_M0MPC16string10StringView9to__owned(name), _pat$3), _2: false };
              break _L;
            }
            default: {
              _cursor_59 = _start_60;
              return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unexpected character", 0));
            }
          }
        }
        _bind$3 = _labelled_block_result$4;
        const _$42$start_60_match_end29 = _bind$3._0;
        const _c = _bind$3._1;
        _cursor_59 = _$42$start_60_match_end29;
        const rest2 = _M0MPC16string10StringView12view_2einner(rest, _$42$start_60_match_end29, _input_end_61);
        let _tmp;
        if (_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet8contains(ctx.profile.valid, _c)) {
          _tmp = { _0: rest2, _1: _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(_c)), _2: false };
        } else {
          return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Character out of range", 0));
        }
        _labelled_block_result = _tmp;
        break _L;
      }
      _start_60_match_end28 = _labelled_block_result$3;
      _cursor_59 = _start_60_match_end28;
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Unexpected character", 0));
    }
    _start_60_match_end15 = _labelled_block_result$2;
    _cursor_59 = _start_60_match_end15;
    return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, rest, "Invalid escape sequence", 0));
  }
  _bind$2 = _labelled_block_result;
  const _rest = _bind$2._0;
  const _pat = _bind$2._1;
  const _is_assertion = _bind$2._2;
  if (!_is_assertion) {
    const _bind$3 = _M0MPC36string8internal13regex__parser6Parser15quantifier__opt(_rest, ctx);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _rest$2 = _bind$4._0;
    const _quantifier = _bind$4._1;
    if (_quantifier === undefined) {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: _rest$2, _1: _pat });
    } else {
      const _Some = _quantifier;
      const _q = _Some;
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: _rest$2, _1: _M0FPC46string8internal13regex__engine3ast10quantifier(_pat, _q) });
    }
  } else {
    return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: _rest, _1: _pat });
  }
}
function _M0MPC36string8internal13regex__parser6Parser22parse__group__continue(rest, ctx) {
  const _bind$2 = _M0MPC36string8internal13regex__parser6Parser11disjunction(rest, ctx);
  let _bind$3;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _bind$3 = _ok._0;
  } else {
    return _bind$2;
  }
  const _rest = _bind$3._0;
  const _pat = _bind$3._1;
  if ((_rest.end - _rest.start | 0) >= 1) {
    const _x = _rest.str.charCodeAt(_rest.start);
    if (_x === 41) {
      const _x$2 = new _M0TPC16string10StringView(_rest.str, _rest.start + 1 | 0, _rest.end);
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: _x$2, _1: _pat });
    } else {
      return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Unexpected character", 0));
    }
  } else {
    return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Unclosed group", 0));
  }
}
function _M0MPC36string8internal13regex__parser6Parser11disjunction(rest, ctx) {
  const alts = [];
  const _bind$2 = _M0MPC36string8internal13regex__parser6Parser11alternative(rest, ctx);
  let _bind$3;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _bind$3 = _ok._0;
  } else {
    return _bind$2;
  }
  const _rest = _bind$3._0;
  const _alt = _bind$3._1;
  _M0MPC15array5Array4pushGRPB4JsonE(alts, _alt);
  let rest$2;
  let _tmp = _rest;
  while (true) {
    const rest$3 = _tmp;
    _L: {
      if ((rest$3.end - rest$3.start | 0) >= 1) {
        const _x = rest$3.str.charCodeAt(rest$3.start);
        if (_x === 124) {
          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
          const _bind$4 = _M0MPC36string8internal13regex__parser6Parser11alternative(_x$2, ctx);
          let _bind$5;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _bind$5 = _ok._0;
          } else {
            return _bind$4;
          }
          const _rest$2 = _bind$5._0;
          const _pat = _bind$5._1;
          _M0MPC15array5Array4pushGRPB4JsonE(alts, _pat);
          _tmp = _rest$2;
          continue;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    rest$2 = rest$3;
    break;
  }
  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: rest$2, _1: _M0FPC46string8internal13regex__engine3ast3alt(_M0MPC15array13ReadOnlyArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(alts, 0, alts.length))) });
}
function _M0MPC36string8internal13regex__parser6Parser11alternative(rest, ctx) {
  const seq = [];
  let rest$2;
  let _tmp = rest;
  _L: while (true) {
    const rest$3 = _tmp;
    _L$2: {
      if ((rest$3.end - rest$3.start | 0) === 0) {
        break _L$2;
      } else {
        const _x = rest$3.str.charCodeAt(rest$3.start);
        switch (_x) {
          case 124: {
            break _L$2;
          }
          case 41: {
            break _L$2;
          }
          default: {
            const _bind$2 = _M0MPC36string8internal13regex__parser6Parser4term(rest$3, ctx);
            let _bind$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _bind$3 = _ok._0;
            } else {
              return _bind$2;
            }
            const _rest = _bind$3._0;
            const _pat = _bind$3._1;
            _M0MPC15array5Array4pushGRPB4JsonE(seq, _pat);
            _tmp = _rest;
            continue _L;
          }
        }
      }
    }
    rest$2 = rest$3;
    break;
  }
  return new _M0DTPC16result6ResultGURPC16string10StringViewRPC46string8internal13regex__engine3ast7PatternERPC36string8internal13regex__parser11ParserErrorE2Ok({ _0: rest$2, _1: _M0FPC46string8internal13regex__engine3ast3seq(_M0MPC15array13ReadOnlyArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(seq, 0, seq.length))) });
}
function _M0FPC36string8internal13regex__parser5parse(profile, mode, pattern) {
  const ctx = _M0MPC36string8internal13regex__parser13ParserContext3new(profile, pattern.start, mode);
  const _bind$2 = _M0MPC36string8internal13regex__parser6Parser11disjunction(pattern, ctx);
  let _bind$3;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _bind$3 = _ok._0;
  } else {
    return _bind$2;
  }
  const _rest = _bind$3._0;
  const _pat = _bind$3._1;
  if (!((_rest.end - _rest.start | 0) === 0)) {
    return new _M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE3Err(_M0MPC36string8internal13regex__parser13ParserContext17error__at_2einner(ctx, _rest, "Unexpected character", 0));
  }
  return new _M0DTPC16result6ResultGRPC46string8internal13regex__engine3ast7PatternRPC36string8internal13regex__parser11ParserErrorE2Ok(_pat);
}
function _M0FPC16string19re__surrogate__pair(codepoint) {
  const cp = codepoint - 65536 | 0;
  const high = 55296 + (cp >> 10 & 1023) | 0;
  const low = 56320 + (cp & 1023) | 0;
  return { _0: high, _1: low };
}
function _M0FPC16string15re__lower__cset(cs) {
  const cset1 = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(cs, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(0, 65535));
  const cset2 = _M0IPC48internal13regex__engine13shared__types11rechar__set9RecharSetPB6BitAnd4land(cs, _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(65536, 1114111));
  const alts = [];
  if (!_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9is__empty(cset1)) {
    _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast4char(cset1));
  }
  const _it = _M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet9intervals(cset2);
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _interval = _Some;
      const _lo = _interval._0;
      const _hi = _interval._1;
      if (_lo === _hi) {
        const pair = _M0FPC16string19re__surrogate__pair(_lo);
        _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(pair._0)), _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(pair._1))]));
      } else {
        const lo = _M0FPC16string19re__surrogate__pair(_lo);
        const hi = _M0FPC16string19re__surrogate__pair(_hi);
        if (lo._0 === hi._0) {
          _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(lo._0)), _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(lo._1, hi._1))]));
        } else {
          _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(lo._0)), _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(lo._1, 57343))]));
          if ((lo._0 + 1 | 0) < hi._0) {
            _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(lo._0 + 1 | 0, hi._0 - 1 | 0)), _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(56320, 57343))]));
          }
          _M0MPC15array5Array4pushGRPB4JsonE(alts, _M0FPC46string8internal13regex__engine3ast3seq([_M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet4char(hi._0)), _M0FPC46string8internal13regex__engine3ast4char(_M0MPC48internal13regex__engine13shared__types11rechar__set9RecharSet11char__range(56320, hi._1))]));
        }
      }
      continue;
    }
  }
  return _M0FPC46string8internal13regex__engine3ast8shortest(_M0FPC46string8internal13regex__engine3ast3alt(_M0MPC15array13ReadOnlyArray11from__arrayGRPC46string8internal13regex__engine3ast7PatternE(new _M0TPB9ArrayViewGRPC46string8internal13regex__engine3ast7PatternE(alts, 0, alts.length))));
}
function _M0FPC16string20re__lower__to__utf16(ast) {
  const _bind$2 = ast.desc;
  switch (_bind$2.$tag) {
    case 0: {
      const _Char = _bind$2;
      const _cs = _Char._0;
      return _M0FPC16string15re__lower__cset(_cs);
    }
    case 1: {
      const _Sequence = _bind$2;
      const _exprs = _Sequence._0;
      return _M0FPC46string8internal13regex__engine3ast3seq(_M0MPC15array13ReadOnlyArray3mapGRPC46string8internal13regex__engine3ast7PatternRPC46string8internal13regex__engine3ast7PatternE(_exprs, (e) => _M0FPC16string20re__lower__to__utf16(e)));
    }
    case 2: {
      const _Alternation = _bind$2;
      const _exprs$2 = _Alternation._0;
      return _M0FPC46string8internal13regex__engine3ast3alt(_M0MPC15array13ReadOnlyArray3mapGRPC46string8internal13regex__engine3ast7PatternRPC46string8internal13regex__engine3ast7PatternE(_exprs$2, (e) => _M0FPC16string20re__lower__to__utf16(e)));
    }
    case 3: {
      const _Quantifier = _bind$2;
      const _q = _Quantifier._0;
      const _expr = _Quantifier._1;
      return _M0FPC46string8internal13regex__engine3ast10quantifier(_M0FPC16string20re__lower__to__utf16(_expr), _q);
    }
    case 4: {
      const _Preference = _bind$2;
      const _p = _Preference._0;
      const _expr$2 = _Preference._1;
      return _M0FPC46string8internal13regex__engine3ast10preference(_p, _M0FPC16string20re__lower__to__utf16(_expr$2));
    }
    case 5: {
      const _Capture = _bind$2;
      const _name = _Capture._0;
      const _expr$3 = _Capture._1;
      return _M0FPC46string8internal13regex__engine3ast7capture(_name, _M0FPC16string20re__lower__to__utf16(_expr$3));
    }
    default: {
      const _Assertion = _bind$2;
      const _a = _Assertion._0;
      return _M0FPC46string8internal13regex__engine3ast9assertion(_a);
    }
  }
}
function _M0MPC16string5Regex2re(self) {
  const _bind$2 = self.re;
  if (_bind$2 === undefined) {
    const lowered_pat = _M0FPC16string20re__lower__to__utf16(self.pat);
    const re = _M0FPC36string8internal13regex__engine7compile(_M0FPC16string18re__profile__utf16, lowered_pat);
    self.re = re;
    return re;
  } else {
    const _Some = _bind$2;
    return _Some;
  }
}
function _M0MPC16string5Regex15execute_2einner(self, input, last_index) {
  const _bind$2 = _M0MPC36string8internal13regex__engine5Regex7execute(_M0MPC16string5Regex2re(self), input, last_index);
  if (_bind$2.$tag === 0) {
    return undefined;
  } else {
    const _Some = _bind$2;
    const _result = _Some._0;
    const _p = _M0MPC16string5Regex2re(self);
    return new _M0TPC16string11MatchResult(input, _p.groups, _result);
  }
}
function _M0MPC16string5Regex5Regex(pattern) {
  const _bind$2 = _M0FPC36string8internal13regex__parser5parse(_M0FPC16string20re__profile__unicode, 1, pattern);
  let pat;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    pat = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRPC16string5RegexRPC15error5ErrorE2Ok(new _M0TPC16string5Regex(pat, undefined));
}
function _M0MP311QuietlyChan10moonschema5rules6Parser4peek(self) {
  return _M0MPC15array5Array3getGRP311QuietlyChan10moonschema5rules5TokenE(self.toks, self.pos);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser4next(self) {
  const t = _M0MPC15array5Array3getGRP311QuietlyChan10moonschema5rules5TokenE(self.toks, self.pos);
  if (t === undefined) {
  } else {
    self.pos = self.pos + 1 | 0;
  }
  return t;
}
function _M0MP311QuietlyChan10moonschema5rules6Parser3err(self, what) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule syntax error at offset ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.pos);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.src.length);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " in \"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, self.src);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\": ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, what);
  return new _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(_string_builder.val);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10expect__op(self, op) {
  _L: {
    _L$2: {
      const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser4peek(self);
      if (_bind$2 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _TOp = _x;
          const _actual = _TOp._0;
          if (_actual === op) {
            self.pos = self.pos + 1 | 0;
            return new _M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(undefined);
          } else {
            break _L;
          }
        } else {
          break _L$2;
        }
      }
    }
    break _L;
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected \"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, op);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
  return new _M0DTPC16result6ResultGuRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(self, _string_builder.val));
}
function _M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, op) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser4peek(self);
  if (_bind$2 === undefined) {
    return false;
  } else {
    const _Some = _bind$2;
    const _x = _Some;
    if (_x.$tag === 3) {
      const _TOp = _x;
      const _actual = _TOp._0;
      return _actual === op;
    } else {
      return false;
    }
  }
}
function _M0FP311QuietlyChan10moonschema5rules8tokenize(src) {
  const toks = [];
  const chars = _M0MPC16string6String9to__array(src);
  const n = chars.length;
  let i = 0;
  while (true) {
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c === 32 || (c === 9 || (c === 10 || c === 13))) {
        i = i + 1 | 0;
      } else {
        if (c >= 48 && c <= 57) {
          const start = i;
          while (true) {
            if (i < n && (_M0MPC15array5Array2atGcE(chars, i) >= 48 && _M0MPC15array5Array2atGcE(chars, i) <= 57)) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i < n && _M0MPC15array5Array2atGcE(chars, i) === 46) {
            i = i + 1 | 0;
            while (true) {
              if (i < n && (_M0MPC15array5Array2atGcE(chars, i) >= 48 && _M0MPC15array5Array2atGcE(chars, i) <= 57)) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (i < n && (_M0MPC15array5Array2atGcE(chars, i) === 101 || _M0MPC15array5Array2atGcE(chars, i) === 69)) {
            i = i + 1 | 0;
            if (i < n && (_M0MPC15array5Array2atGcE(chars, i) === 43 || _M0MPC15array5Array2atGcE(chars, i) === 45)) {
              i = i + 1 | 0;
            }
            while (true) {
              if (i < n && (_M0MPC15array5Array2atGcE(chars, i) >= 48 && _M0MPC15array5Array2atGcE(chars, i) <= 57)) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          const text = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, start, i));
          let parsed;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$2 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(text, 0, text.length));
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                const _err = _bind$2;
                _try_err = _err._0;
                break _L$2;
              }
              parsed = new _M0DTPC16option6OptionGdE4Some(_tmp);
              break _L;
            }
            parsed = _M0DTPC16option6OptionGdE4None__;
          }
          if (parsed.$tag === 1) {
            const _Some = parsed;
            const _d = _Some._0;
            _M0MPC15array5Array4pushGRPB4JsonE(toks, new _M0DTP311QuietlyChan10moonschema5rules5Token4TNum(_d));
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule syntax error at offset ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": invalid number \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, text);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
            return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err(new _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(_string_builder.val));
          }
        } else {
          if (c === 34) {
            i = i + 1 | 0;
            const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
            let closed = false;
            while (true) {
              if (i < n) {
                const sc = _M0MPC15array5Array2atGcE(chars, i);
                if (sc === 92) {
                  if ((i + 1 | 0) >= n) {
                    break;
                  }
                  const esc = _M0MPC15array5Array2atGcE(chars, i + 1 | 0);
                  switch (esc) {
                    case 34: {
                      _M0IPB13StringBuilderPB6Logger11write__char(b, 34);
                      break;
                    }
                    case 92: {
                      _M0IPB13StringBuilderPB6Logger11write__char(b, 92);
                      break;
                    }
                    case 110: {
                      _M0IPB13StringBuilderPB6Logger11write__char(b, 10);
                      break;
                    }
                    case 116: {
                      _M0IPB13StringBuilderPB6Logger11write__char(b, 9);
                      break;
                    }
                    case 114: {
                      _M0IPB13StringBuilderPB6Logger11write__char(b, 13);
                      break;
                    }
                    default: {
                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule syntax error at offset ");
                      _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": invalid escape \"\\");
                      _M0MPB13StringBuilder13write__objectGcE(_string_builder, esc);
                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
                      return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err(new _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(_string_builder.val));
                    }
                  }
                  i = i + 2 | 0;
                } else {
                  if (sc === 34) {
                    closed = true;
                    i = i + 1 | 0;
                    break;
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(b, sc);
                    i = i + 1 | 0;
                  }
                }
                continue;
              } else {
                break;
              }
            }
            if (!closed) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(49);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule syntax error at offset ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": unterminated string");
              return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err(new _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(_string_builder.val));
            }
            _M0MPC15array5Array4pushGRPB4JsonE(toks, new _M0DTP311QuietlyChan10moonschema5rules5Token4TStr(b.val));
          } else {
            if (c >= 97 && c <= 122 || (c >= 65 && c <= 90 || c === 95)) {
              const start = i;
              while (true) {
                if (i < n) {
                  const ic = _M0MPC15array5Array2atGcE(chars, i);
                  if (ic >= 97 && ic <= 122 || (ic >= 65 && ic <= 90 || (ic >= 48 && ic <= 57 || ic === 95))) {
                    i = i + 1 | 0;
                  } else {
                    break;
                  }
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPB4JsonE(toks, new _M0DTP311QuietlyChan10moonschema5rules5Token6TIdent(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, start, i))));
            } else {
              let two;
              if ((i + 1 | 0) < n) {
                const pair = _M0MPB13StringBuilder21StringBuilder_2einner(0);
                _M0IPB13StringBuilderPB6Logger11write__char(pair, c);
                _M0IPB13StringBuilderPB6Logger11write__char(pair, _M0MPC15array5Array2atGcE(chars, i + 1 | 0));
                two = pair.val;
              } else {
                two = "";
              }
              if (two === "&&" || (two === "||" || (two === "==" || (two === "!=" || (two === "<=" || two === ">="))))) {
                _M0MPC15array5Array4pushGRPB4JsonE(toks, new _M0DTP311QuietlyChan10moonschema5rules5Token3TOp(two));
                i = i + 2 | 0;
              } else {
                if (c === 60 || (c === 62 || (c === 43 || (c === 45 || (c === 42 || (c === 47 || (c === 37 || (c === 33 || (c === 40 || (c === 41 || (c === 91 || (c === 93 || c === 46)))))))))))) {
                  const single = _M0MPB13StringBuilder21StringBuilder_2einner(0);
                  _M0IPB13StringBuilderPB6Logger11write__char(single, c);
                  _M0MPC15array5Array4pushGRPB4JsonE(toks, new _M0DTP311QuietlyChan10moonschema5rules5Token3TOp(single.val));
                  i = i + 1 | 0;
                } else {
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(53);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule syntax error at offset ");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": unexpected character \"");
                  _M0MPB13StringBuilder13write__objectGcE(_string_builder, c);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
                  return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE3Err(new _M0DTPC15error5Error57QuietlyChan_2fmoonschema_2frules_2eExprError_2eExprSyntax(_string_builder.val));
                }
              }
            }
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema5rules5TokenERP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(toks);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser9parse__or(self) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__and(self);
  let left;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    left = _ok._0;
  } else {
    return _bind$2;
  }
  while (true) {
    if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "||")) {
      _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
      const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__and(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        right = _ok._0;
      } else {
        return _bind$3;
      }
      left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6ELogic("||", left, right);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(left);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10parse__and(self) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__not(self);
  let left;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    left = _ok._0;
  } else {
    return _bind$2;
  }
  while (true) {
    if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "&&")) {
      _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
      const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__not(self);
      let right;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        right = _ok._0;
      } else {
        return _bind$3;
      }
      left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6ELogic("&&", left, right);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(left);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10parse__not(self) {
  if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "!")) {
    _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
    const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__not(self);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr4ENot(_tmp));
  }
  return _M0MP311QuietlyChan10moonschema5rules6Parser10parse__cmp(self);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10parse__cmp(self) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__add(self);
  let left;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    left = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser4peek(self);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    if (_x.$tag === 3) {
      const _TOp = _x;
      const _op = _TOp._0;
      if (_op === "==" || (_op === "!=" || (_op === "<" || (_op === "<=" || (_op === ">" || _op === ">="))))) {
        _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
        const _bind$4 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__add(self);
        let right;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          right = _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr4ECmp(_op, left, right));
      }
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(left);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10parse__add(self) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__mul(self);
  let left;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    left = _ok._0;
  } else {
    return _bind$2;
  }
  let looping = true;
  while (true) {
    if (looping) {
      if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "+")) {
        _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
        const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__mul(self);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("+", left, _tmp);
      } else {
        if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "-")) {
          _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
          const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser10parse__mul(self);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("-", left, _tmp);
        } else {
          looping = false;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(left);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser10parse__mul(self) {
  const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self);
  let left;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    left = _ok._0;
  } else {
    return _bind$2;
  }
  let looping = true;
  while (true) {
    if (looping) {
      if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "*")) {
        _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
        const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
        }
        left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("*", left, _tmp);
      } else {
        if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "/")) {
          _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
          const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self);
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            return _bind$3;
          }
          left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("/", left, _tmp);
        } else {
          if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "%")) {
            _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
            const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self);
            let _tmp;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp = _ok._0;
            } else {
              return _bind$3;
            }
            left = new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("%", left, _tmp);
          } else {
            looping = false;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(left);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self) {
  if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "-")) {
    _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
    const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unary(self);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr6EArith("-", _M0MP311QuietlyChan10moonschema5rules6Parser12parse__unaryN6constrS619, _tmp));
  }
  return _M0MP311QuietlyChan10moonschema5rules6Parser14parse__primary(self);
}
function _M0MP311QuietlyChan10moonschema5rules6Parser14parse__primary(self) {
  _L: {
    const _bind$2 = _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
    if (_bind$2 === undefined) {
      break _L;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x.$tag) {
        case 0: {
          const _TNum = _x;
          const _d = _TNum._0;
          return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr4ENum(_d));
        }
        case 1: {
          const _TStr = _x;
          const _s = _TStr._0;
          return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr4EStr(_s));
        }
        case 2: {
          const _TIdent = _x;
          const _name = _TIdent._0;
          switch (_name) {
            case "true": {
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(_M0MP311QuietlyChan10moonschema5rules6Parser14parse__primaryN6constrS620);
            }
            case "false": {
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(_M0MP311QuietlyChan10moonschema5rules6Parser14parse__primaryN6constrS621);
            }
            case "null": {
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(_M0DTP311QuietlyChan10moonschema5rules4Expr5ENull__);
            }
            default: {
              const segs = [new _M0DTP311QuietlyChan10moonschema5rules7PathSeg4PKey(_name)];
              let walking = true;
              while (true) {
                if (walking) {
                  if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, ".")) {
                    _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
                    _L$2: {
                      _L$3: {
                        const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
                        if (_bind$3 === undefined) {
                          break _L$3;
                        } else {
                          const _Some$2 = _bind$3;
                          const _x$2 = _Some$2;
                          if (_x$2.$tag === 2) {
                            const _TIdent$2 = _x$2;
                            const _key = _TIdent$2._0;
                            _M0MPC15array5Array4pushGRPB4JsonE(segs, new _M0DTP311QuietlyChan10moonschema5rules7PathSeg4PKey(_key));
                          } else {
                            break _L$3;
                          }
                        }
                        break _L$2;
                      }
                      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(self, "expected identifier after \".\""));
                    }
                  } else {
                    if (_M0MP311QuietlyChan10moonschema5rules6Parser6is__op(self, "[")) {
                      _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
                      _L$2: {
                        _L$3: {
                          const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser4next(self);
                          if (_bind$3 === undefined) {
                            break _L$3;
                          } else {
                            const _Some$2 = _bind$3;
                            const _x$2 = _Some$2;
                            if (_x$2.$tag === 0) {
                              const _TNum$2 = _x$2;
                              const _d$2 = _TNum$2._0;
                              if (!(_d$2 >= 0 && (_d$2 === _M0MPC16double6Double5floor(_d$2) && _d$2 < 1000000000))) {
                                return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(self, "array index must be a small non-negative integer"));
                              }
                              _M0MPC15array5Array4pushGRPB4JsonE(segs, new _M0DTP311QuietlyChan10moonschema5rules7PathSeg6PIndex(_M0MPC16double6Double7to__int(_d$2)));
                            } else {
                              break _L$3;
                            }
                          }
                          break _L$2;
                        }
                        return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(self, "expected array index inside \"[\""));
                      }
                      const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser10expect__op(self, "]");
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _ok._0;
                      } else {
                        return _bind$3;
                      }
                    } else {
                      walking = false;
                    }
                  }
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(new _M0DTP311QuietlyChan10moonschema5rules4Expr5EPath(segs));
            }
          }
        }
        default: {
          const _TOp = _x;
          const _x$2 = _TOp._0;
          if (_x$2 === "(") {
            const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser9parse__or(self);
            let e;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              e = _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MP311QuietlyChan10moonschema5rules6Parser10expect__op(self, ")");
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(e);
          } else {
            break _L;
          }
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(self, "expected expression"));
}
function _M0FP311QuietlyChan10moonschema5rules13compile__expr(src) {
  const _bind$2 = _M0FP311QuietlyChan10moonschema5rules8tokenize(src);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const p = new _M0TP311QuietlyChan10moonschema5rules6Parser(_tmp, 0, src);
  const _bind$3 = _M0MP311QuietlyChan10moonschema5rules6Parser9parse__or(p);
  let e;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    e = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP311QuietlyChan10moonschema5rules6Parser4peek(p);
  if (!(_bind$4 === undefined)) {
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE3Err(_M0MP311QuietlyChan10moonschema5rules6Parser3err(p, "unexpected trailing tokens"));
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema5rules9ExprErrorE2Ok(e);
}
function _M0MP311QuietlyChan10moonschema5rules5Value6truthy(self) {
  if (self.$tag === 0) {
    const _VBool = self;
    return _VBool._0;
  } else {
    return false;
  }
}
function _M0FP311QuietlyChan10moonschema5rules7resolve(root, segs) {
  let cur = root;
  const _bind$2 = segs.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const seg = segs[_];
      let next;
      _L: {
        _L$2: {
          const _bind$3 = cur;
          if (_bind$3 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            switch (_x.$tag) {
              case 6: {
                const _Object = _x;
                const _m = _Object._0;
                if (seg.$tag === 0) {
                  const _PKey = seg;
                  const _k = _PKey._0;
                  next = _M0MPB3Map3getGsRPB4JsonE(_m, _k);
                } else {
                  break _L$2;
                }
                break;
              }
              case 5: {
                const _Array = _x;
                const _a = _Array._0;
                if (seg.$tag === 1) {
                  const _PIndex = seg;
                  const _i = _PIndex._0;
                  next = _i < _a.length ? _M0MPC15array5Array2atGRPB4JsonE(_a, _i) : undefined;
                } else {
                  break _L$2;
                }
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        next = undefined;
      }
      cur = next;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _L: {
    const _bind$3 = cur;
    if (_bind$3 === undefined) {
      break _L;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      switch (_x.$tag) {
        case 3: {
          const _Number = _x;
          const _x$2 = _Number._0;
          return new _M0DTP311QuietlyChan10moonschema5rules5Value4VNum(_x$2);
        }
        case 4: {
          const _String = _x;
          const _s = _String._0;
          return new _M0DTP311QuietlyChan10moonschema5rules5Value4VStr(_s);
        }
        case 1: {
          return _M0FP311QuietlyChan10moonschema5rules7resolveN6constrS622;
        }
        case 2: {
          return _M0FP311QuietlyChan10moonschema5rules7resolveN6constrS623;
        }
        case 0: {
          return _M0DTP311QuietlyChan10moonschema5rules5Value5VNull__;
        }
        default: {
          break _L;
        }
      }
    }
  }
  return _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing__;
}
function _M0FP311QuietlyChan10moonschema5rules5order(lv, rv) {
  _L: {
    switch (lv.$tag) {
      case 1: {
        const _VNum = lv;
        const _a = _VNum._0;
        if (rv.$tag === 1) {
          const _VNum$2 = rv;
          const _b = _VNum$2._0;
          return _a < _b ? _M0FP311QuietlyChan10moonschema5rules5orderN6constrS624 : _a > _b ? _M0FP311QuietlyChan10moonschema5rules5orderN6constrS625 : _M0FP311QuietlyChan10moonschema5rules5orderN6constrS626;
        } else {
          break _L;
        }
      }
      case 2: {
        const _VStr = lv;
        const _a$2 = _VStr._0;
        if (rv.$tag === 2) {
          const _VStr$2 = rv;
          const _b = _VStr$2._0;
          return _M0IP016_24default__implPB7Compare6op__ltGsE(_a$2, _b) ? _M0FP311QuietlyChan10moonschema5rules5orderN6constrS627 : _M0IP016_24default__implPB7Compare6op__gtGsE(_a$2, _b) ? _M0FP311QuietlyChan10moonschema5rules5orderN6constrS628 : _M0FP311QuietlyChan10moonschema5rules5orderN6constrS629;
        } else {
          break _L;
        }
      }
      default: {
        break _L;
      }
    }
  }
  return undefined;
}
function _M0FP311QuietlyChan10moonschema5rules9value__eq(lv, rv) {
  switch (lv.$tag) {
    case 1: {
      const _VNum = lv;
      const _a = _VNum._0;
      if (rv.$tag === 1) {
        const _VNum$2 = rv;
        const _b = _VNum$2._0;
        return _a === _b;
      } else {
        return false;
      }
    }
    case 2: {
      const _VStr = lv;
      const _a$2 = _VStr._0;
      if (rv.$tag === 2) {
        const _VStr$2 = rv;
        const _b = _VStr$2._0;
        return _a$2 === _b;
      } else {
        return false;
      }
    }
    case 0: {
      const _VBool = lv;
      const _a$3 = _VBool._0;
      if (rv.$tag === 0) {
        const _VBool$2 = rv;
        const _b = _VBool$2._0;
        return _a$3 === _b;
      } else {
        return false;
      }
    }
    case 3: {
      if (rv.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      return false;
    }
  }
}
function _M0FP311QuietlyChan10moonschema5rules7compare(op, lv, rv) {
  _L: {
    _L$2: {
      if (lv.$tag === 4) {
        break _L$2;
      } else {
        if (rv.$tag === 4) {
          break _L$2;
        }
      }
      break _L;
    }
    return false;
  }
  switch (op) {
    case "==": {
      return _M0FP311QuietlyChan10moonschema5rules9value__eq(lv, rv);
    }
    case "!=": {
      return !_M0FP311QuietlyChan10moonschema5rules9value__eq(lv, rv);
    }
    case "<": {
      const _bind$2 = _M0FP311QuietlyChan10moonschema5rules5order(lv, rv);
      if (_bind$2 === undefined) {
        return false;
      } else {
        const _Some = _bind$2;
        const _lt = _Some;
        return _lt < 0;
      }
    }
    case "<=": {
      const _bind$3 = _M0FP311QuietlyChan10moonschema5rules5order(lv, rv);
      if (_bind$3 === undefined) {
        return false;
      } else {
        const _Some = _bind$3;
        const _le = _Some;
        return _le <= 0;
      }
    }
    case ">": {
      const _bind$4 = _M0FP311QuietlyChan10moonschema5rules5order(lv, rv);
      if (_bind$4 === undefined) {
        return false;
      } else {
        const _Some = _bind$4;
        const _gt = _Some;
        return _gt > 0;
      }
    }
    case ">=": {
      const _bind$5 = _M0FP311QuietlyChan10moonschema5rules5order(lv, rv);
      if (_bind$5 === undefined) {
        return false;
      } else {
        const _Some = _bind$5;
        const _ge = _Some;
        return _ge >= 0;
      }
    }
    default: {
      return false;
    }
  }
}
function _M0FP311QuietlyChan10moonschema5rules4eval(e, root) {
  switch (e.$tag) {
    case 0: {
      const _ENum = e;
      const _d = _ENum._0;
      return new _M0DTP311QuietlyChan10moonschema5rules5Value4VNum(_d);
    }
    case 1: {
      const _EStr = e;
      const _s = _EStr._0;
      return new _M0DTP311QuietlyChan10moonschema5rules5Value4VStr(_s);
    }
    case 2: {
      const _EBool = e;
      const _b = _EBool._0;
      return new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(_b);
    }
    case 3: {
      return _M0DTP311QuietlyChan10moonschema5rules5Value5VNull__;
    }
    case 4: {
      const _EPath = e;
      const _segs = _EPath._0;
      return _M0FP311QuietlyChan10moonschema5rules7resolve(root, _segs);
    }
    case 5: {
      const _ENot = e;
      const _inner = _ENot._0;
      return new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(!_M0MP311QuietlyChan10moonschema5rules5Value6truthy(_M0FP311QuietlyChan10moonschema5rules4eval(_inner, root)));
    }
    case 6: {
      const _EArith = e;
      const _op = _EArith._0;
      const _l = _EArith._1;
      const _r = _EArith._2;
      const lv = _M0FP311QuietlyChan10moonschema5rules4eval(_l, root);
      const rv = _M0FP311QuietlyChan10moonschema5rules4eval(_r, root);
      _L: {
        if (lv.$tag === 1) {
          const _VNum = lv;
          const _a = _VNum._0;
          if (rv.$tag === 1) {
            const _VNum$2 = rv;
            const _b$2 = _VNum$2._0;
            let v;
            switch (_op) {
              case "+": {
                v = _a + _b$2;
                break;
              }
              case "-": {
                v = _a - _b$2;
                break;
              }
              case "*": {
                v = _a * _b$2;
                break;
              }
              case "/": {
                v = _a / _b$2;
                break;
              }
              case "%": {
                v = _M0IPC16double6DoublePB3Mod3mod(_a, _b$2);
                break;
              }
              default: {
                return _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing__;
              }
            }
            return v !== v || v !== 0 && v / 2 === v ? _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing__ : new _M0DTP311QuietlyChan10moonschema5rules5Value4VNum(v);
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      }
      return _M0DTP311QuietlyChan10moonschema5rules5Value8VMissing__;
    }
    case 7: {
      const _ECmp = e;
      const _op$2 = _ECmp._0;
      const _l$2 = _ECmp._1;
      const _r$2 = _ECmp._2;
      const lv$2 = _M0FP311QuietlyChan10moonschema5rules4eval(_l$2, root);
      const rv$2 = _M0FP311QuietlyChan10moonschema5rules4eval(_r$2, root);
      return new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(_M0FP311QuietlyChan10moonschema5rules7compare(_op$2, lv$2, rv$2));
    }
    default: {
      const _ELogic = e;
      const _op$3 = _ELogic._0;
      const _l$3 = _ELogic._1;
      const _r$3 = _ELogic._2;
      const lt = _M0MP311QuietlyChan10moonschema5rules5Value6truthy(_M0FP311QuietlyChan10moonschema5rules4eval(_l$3, root));
      return _op$3 === "&&" ? (!lt ? _M0FP311QuietlyChan10moonschema5rules4evalN6constrS630 : new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(_M0MP311QuietlyChan10moonschema5rules5Value6truthy(_M0FP311QuietlyChan10moonschema5rules4eval(_r$3, root)))) : lt ? _M0FP311QuietlyChan10moonschema5rules4evalN6constrS631 : new _M0DTP311QuietlyChan10moonschema5rules5Value5VBool(_M0MP311QuietlyChan10moonschema5rules5Value6truthy(_M0FP311QuietlyChan10moonschema5rules4eval(_r$3, root)));
    }
  }
}
function _M0FP311QuietlyChan10moonschema5rules14collect__paths(e, out) {
  let _tmp = e;
  _L: while (true) {
    const e$2 = _tmp;
    switch (e$2.$tag) {
      case 4: {
        const _EPath = e$2;
        const _segs = _EPath._0;
        _M0MPC15array5Array4pushGRPB5ArrayGRP311QuietlyChan10moonschema5rules7PathSegEE(out, _segs);
        return;
      }
      case 5: {
        const _ENot = e$2;
        const _inner = _ENot._0;
        _tmp = _inner;
        continue _L;
      }
      case 6: {
        const _EArith = e$2;
        const _l = _EArith._1;
        const _r = _EArith._2;
        _M0FP311QuietlyChan10moonschema5rules14collect__paths(_l, out);
        _tmp = _r;
        continue _L;
      }
      case 7: {
        const _ECmp = e$2;
        const _l$2 = _ECmp._1;
        const _r$2 = _ECmp._2;
        _M0FP311QuietlyChan10moonschema5rules14collect__paths(_l$2, out);
        _tmp = _r$2;
        continue _L;
      }
      case 8: {
        const _ELogic = e$2;
        const _l$3 = _ELogic._1;
        const _r$3 = _ELogic._2;
        _M0FP311QuietlyChan10moonschema5rules14collect__paths(_l$3, out);
        _tmp = _r$3;
        continue _L;
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP311QuietlyChan10moonschema5rules11rule__holds(e, root) {
  const paths = [];
  _M0FP311QuietlyChan10moonschema5rules14collect__paths(e, paths);
  const _bind$2 = paths.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const segs = paths[_];
      const _bind$3 = _M0FP311QuietlyChan10moonschema5rules7resolve(root, segs);
      if (_bind$3.$tag === 4) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0FP311QuietlyChan10moonschema5rules4eval(e, root);
  if (_bind$3.$tag === 0) {
    const _VBool = _bind$3;
    const _x = _VBool._0;
    if (_x === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0IP311QuietlyChan10moonschema6schema8JsonTypePB2Eq5equal(_x_384, _x_385) {
  switch (_x_384) {
    case 0: {
      if (_x_385 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_385 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_385 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_385 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_385 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_385 === 5) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_385 === 6) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP311QuietlyChan10moonschema6schema22escape__pointer__token(t) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$2 = t.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$2) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$3 = t.charCodeAt(_string_index);
        if (_bind$3 >= 55296 && _bind$3 <= 56319 && (_string_index + 1 | 0) < _bind$2) {
          const _bind$4 = t.charCodeAt(_string_index + 1 | 0);
          if (_bind$4 >= 56320 && _bind$4 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$3 - 55296 | 0, 1024) | 0) + _bind$4 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$3;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$3;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char === 126) {
        _M0IPB13StringBuilderPB6Logger13write__string(b, "~0");
      } else {
        if (_decoded_char === 47) {
          _M0IPB13StringBuilderPB6Logger13write__string(b, "~1");
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(b, _decoded_char);
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema25render__instance__pointer(toks) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$2 = toks.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      _M0IPB13StringBuilderPB6Logger13write__string(b, "/");
      const _bind$3 = _M0MPC15array5Array2atGRPB4JsonE(toks, i);
      if (_bind$3.$tag === 0) {
        const _PTKey = _bind$3;
        const _k = _PTKey._0;
        _M0IPB13StringBuilderPB6Logger13write__string(b, _M0FP311QuietlyChan10moonschema6schema22escape__pointer__token(_k));
      } else {
        const _PTIndex = _bind$3;
        const _n = _PTIndex._0;
        _M0IPB13StringBuilderPB6Logger13write__string(b, _M0MPC13int3Int18to__string_2einner(_n, 10));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema23render__schema__pointer(toks) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$2 = toks.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      if (i === 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(b, "#");
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(b, "/");
      }
      if (i > 0) {
        const _bind$3 = _M0MPC15array5Array2atGRPB4JsonE(toks, i);
        if (_bind$3.$tag === 0) {
          const _PTKey = _bind$3;
          const _k = _PTKey._0;
          _M0IPB13StringBuilderPB6Logger13write__string(b, _M0FP311QuietlyChan10moonschema6schema22escape__pointer__token(_k));
        } else {
          const _PTIndex = _bind$3;
          const _n = _PTIndex._0;
          _M0IPB13StringBuilderPB6Logger13write__string(b, _M0MPC13int3Int18to__string_2einner(_n, 10));
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema3err(keyword, ipath, spath, message) {
  const _tmp = _M0FP311QuietlyChan10moonschema6schema25render__instance__pointer(ipath);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP311QuietlyChan10moonschema6schema23render__schema__pointer(spath));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP311QuietlyChan10moonschema6schema22escape__pointer__token(keyword));
  return new _M0TP311QuietlyChan10moonschema6schema15ValidationError(keyword, _tmp, _string_builder.val, message);
}
function _M0FP311QuietlyChan10moonschema6schema13err__no__leaf(keyword, ipath, spath, message) {
  return new _M0TP311QuietlyChan10moonschema6schema15ValidationError(keyword, _M0FP311QuietlyChan10moonschema6schema25render__instance__pointer(ipath), _M0FP311QuietlyChan10moonschema6schema23render__schema__pointer(spath), message);
}
function _M0FP311QuietlyChan10moonschema6schema14key__is__known(kw, k) {
  const _bind$2 = kw.properties;
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _p = _Some;
    if (_M0MPB3Map8containsGsRP311QuietlyChan10moonschema6schema6SchemaE(_p, k)) {
      return true;
    }
  }
  const _bind$3 = kw.pattern_properties;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _pairs = _Some._0;
    const _bind$4 = _pairs.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$4) {
        const _bind$5 = _M0MPC16string5Regex15execute_2einner(_M0MPC15array5Array2atGRPB4JsonE(_pairs, i)._0, new _M0TPC16string10StringView(k, 0, k.length), 0);
        if (_bind$5 === undefined) {
        } else {
          return true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return false;
}
function _M0FP311QuietlyChan10moonschema6schema2tr(locale, en, zh) {
  if (locale === 0) {
    return en;
  } else {
    return zh;
  }
}
function _M0FP311QuietlyChan10moonschema6schema9is__email(s) {
  const n = s.length;
  const chars = _M0MPC16string6String9to__array(s);
  let at = -1;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c === 64) {
        if (at >= 0) {
          return false;
        }
        at = i;
      } else {
        if (c === 32 || (c === 9 || (c === 10 || c === 13))) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (at <= 0 || at >= (n - 1 | 0)) {
    return false;
  }
  let dots = 0;
  const _bind$2 = at + 1 | 0;
  let _tmp$2 = _bind$2;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c === 46) {
        dots = dots + 1 | 0;
      } else {
        if (c === 32 || c === 9) {
          return false;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return dots >= 1 && (_M0MPC15array5Array2atGcE(chars, at + 1 | 0) !== 46 && _M0MPC15array5Array2atGcE(chars, n - 1 | 0) !== 46);
}
function _M0FP311QuietlyChan10moonschema6schema8is__ipv4(s) {
  const chars = _M0MPC16string6String9to__array(s);
  const n = chars.length;
  let octets = 0;
  let val = 0;
  let digits = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c >= 48 && c <= 57) {
        val = (Math.imul(val, 10) | 0) + (c - 48 | 0) | 0;
        digits = digits + 1 | 0;
        if (digits > 3 || val > 255) {
          return false;
        }
      } else {
        if (c === 46) {
          if (digits === 0) {
            return false;
          }
          octets = octets + 1 | 0;
          val = 0;
          digits = 0;
        } else {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return octets === 3 && digits > 0;
}
function _M0FP311QuietlyChan10moonschema6schema14is__hex__digit(c) {
  return c >= 48 && c <= 57 || (c >= 97 && c <= 102 || c >= 65 && c <= 70);
}
function _M0FP311QuietlyChan10moonschema6schema8is__uuid(s) {
  if (s.length !== 36) {
    return false;
  }
  const chars = _M0MPC16string6String9to__array(s);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 36) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (i === 8 || (i === 13 || (i === 18 || i === 23))) {
        if (c !== 45) {
          return false;
        }
      } else {
        if (!_M0FP311QuietlyChan10moonschema6schema14is__hex__digit(c)) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP311QuietlyChan10moonschema6schema13check__format(f, s) {
  switch (f) {
    case "email": {
      return _M0FP311QuietlyChan10moonschema6schema9is__email(s);
    }
    case "uuid": {
      return _M0FP311QuietlyChan10moonschema6schema8is__uuid(s);
    }
    case "ipv4": {
      return _M0FP311QuietlyChan10moonschema6schema8is__ipv4(s);
    }
    default: {
      return -1;
    }
  }
}
function _M0FP311QuietlyChan10moonschema6schema15schema__pointer(path) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$2 = path.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      if (i === 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(b, _M0MPC15array5Array2atGRPB4JsonE(path, 0));
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(b, "/");
        _M0IPB13StringBuilderPB6Logger13write__string(b, _M0FP311QuietlyChan10moonschema6schema22escape__pointer__token(_M0MPC15array5Array2atGRPB4JsonE(path, i)));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema14compile__count(kw_name, v, spath) {
  const path = _M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath);
  if (v.$tag === 3) {
    const _Number = v;
    const _d = _Number._0;
    if (_d !== _d || !(_d >= 0 && (_d <= 9e+015 && _d === _M0MPC16double6Double5floor(_d)))) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be a non-negative integer");
      return new _M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
    }
    return new _M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_M0MPC16double6Double7to__int(_d));
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be a non-negative integer");
    return new _M0DTPC16result6ResultGiRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema15compile__number(kw_name, v, spath) {
  const path = _M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath);
  if (v.$tag === 3) {
    const _Number = v;
    const _d = _Number._0;
    return new _M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_d);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be a number");
    return new _M0DTPC16result6ResultGdRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema14compile__regex(p, path) {
  let parsed;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0MPC16string5Regex5Regex(new _M0TPC16string10StringView(p, 0, p.length));
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        parsed = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    parsed = undefined;
  }
  if (parsed === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid regular expression \"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, p);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    return new _M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  } else {
    const _Some = parsed;
    const _re = _Some;
    return new _M0DTPC16result6ResultGRPC16string5RegexRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_re);
  }
}
function _M0FP311QuietlyChan10moonschema6schema13compile__rule(src, path) {
  let r;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP311QuietlyChan10moonschema5rules13compile__expr(src);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        r = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const _ExprSyntax = _try_err;
    const _m = _ExprSyntax._0;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid rule \"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, src);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _m);
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
  if (r === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid rule \"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, src);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  } else {
    const _Some = r;
    const _e = _Some;
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema5rules4ExprRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_e);
  }
}
function _M0FP311QuietlyChan10moonschema6schema8get__str(kw_name, v, path) {
  if (v.$tag === 4) {
    const _String = v;
    const _s = _String._0;
    return new _M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_s);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be a string");
    return new _M0DTPC16result6ResultGsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema21compile__string__list(kw_name, v, spath) {
  const path = _M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath);
  if (v.$tag === 5) {
    const _Array = v;
    const _arr = _Array._0;
    const list = [];
    const _bind$2 = _arr.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const _bind$3 = _M0FP311QuietlyChan10moonschema6schema8get__str(kw_name, _M0MPC15array5Array2atGRPB4JsonE(_arr, i), path);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(list, _tmp$2);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(list);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be an array of strings");
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema20compile__string__map(kw_name, v, spath) {
  if (v.$tag === 6) {
    const _Object = v;
    const _m = _Object._0;
    const _bind$2 = [];
    const out = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$2, 0, 0), _M0FP311QuietlyChan10moonschema6schema20compile__string__mapN6constrS1465);
    const _it = _M0MPB3Map5iter2GsRPB4JsonE(_m);
    while (true) {
      const _bind$3 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _k = _x._0;
        const _arr = _x._1;
        _M0MPC15array5Array4pushGRPB4JsonE(spath, kw_name);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _k);
        const _bind$4 = _M0FP311QuietlyChan10moonschema6schema21compile__string__list(kw_name, _arr, spath);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRPB5ArrayGsEE(out, _k, _tmp);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        continue;
      }
    }
    return new _M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(out);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be an object");
    return new _M0DTPC16result6ResultGRPB3MapGsRPB5ArrayGsEERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(_M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath), _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema16has__str__prefix(s, prefix) {
  if (s.length < prefix.length) {
    return false;
  }
  const pc = _M0MPC16string6String9to__array(prefix);
  const sc = _M0MPC16string6String9to__array(s);
  const _bind$2 = pc.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      if (_M0MPC15array5Array2atGcE(sc, i) !== _M0MPC15array5Array2atGcE(pc, i)) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MP311QuietlyChan10moonschema6schema8JsonType5parse(s, path) {
  switch (s) {
    case "null": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(0);
    }
    case "boolean": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(1);
    }
    case "object": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(2);
    }
    case "array": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(3);
    }
    case "number": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(4);
    }
    case "string": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(5);
    }
    case "integer": {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(6);
    }
    default: {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid type name \"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, s);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8JsonTypeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
    }
  }
}
function _M0MP311QuietlyChan10moonschema6schema8Keywords5empty() {
  return new _M0TP311QuietlyChan10moonschema6schema8Keywords(undefined, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4None__, _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4None__, undefined, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, undefined, undefined, undefined, undefined, undefined, undefined, -1, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None__, undefined, undefined, undefined, undefined, undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4None__, undefined, -1, undefined, undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4None__, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None__, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None__, _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4None__, undefined, undefined, undefined, undefined);
}
function _M0FP311QuietlyChan10moonschema6schema13compile__node(v, ctx, spath) {
  switch (v.$tag) {
    case 1: {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_M0FP311QuietlyChan10moonschema6schema13compile__nodeN6constrS1466);
    }
    case 2: {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(_M0FP311QuietlyChan10moonschema6schema13compile__nodeN6constrS1467);
    }
    case 6: {
      const _bind$2 = _M0FP311QuietlyChan10moonschema6schema17compile__keywords(v, ctx, spath);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(new _M0DTP311QuietlyChan10moonschema6schema4Node10SchemaNode(_tmp));
    }
    default: {
      return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema4NodeRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(_M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath), "a schema must be an object or a boolean"));
    }
  }
}
function _M0FP311QuietlyChan10moonschema6schema17compile__keywords(v, ctx, spath) {
  const path = _M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath);
  const kw = _M0MP311QuietlyChan10moonschema6schema8Keywords5empty();
  let map;
  if (v.$tag === 6) {
    const _Object = v;
    map = _Object._0;
  } else {
    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "internal: expected an object schema"));
  }
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(map);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _name = _x._0;
      const _kv = _x._1;
      switch (_name) {
        case "$schema": {
          break;
        }
        case "$comment": {
          break;
        }
        case "$defs": {
          break;
        }
        case "definitions": {
          break;
        }
        case "title": {
          break;
        }
        case "description": {
          break;
        }
        case "default": {
          break;
        }
        case "examples": {
          break;
        }
        case "deprecated": {
          break;
        }
        case "readOnly": {
          break;
        }
        case "writeOnly": {
          break;
        }
        case "contentEncoding": {
          break;
        }
        case "contentMediaType": {
          break;
        }
        case "contentSchema": {
          break;
        }
        case "type": {
          switch (_kv.$tag) {
            case 4: {
              const _String = _kv;
              const _s = _String._0;
              const _bind$3 = _M0MP311QuietlyChan10moonschema6schema8JsonType5parse(_s, path);
              let _tmp;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp = _ok._0;
              } else {
                return _bind$3;
              }
              kw.typ = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4Some([_tmp]);
              break;
            }
            case 5: {
              const _Array = _kv;
              const _a = _Array._0;
              const ts = [];
              const _bind$4 = _a.length;
              let _tmp$2 = 0;
              while (true) {
                const i = _tmp$2;
                if (i < _bind$4) {
                  const _bind$5 = _M0MPC15array5Array2atGRPB4JsonE(_a, i);
                  if (_bind$5.$tag === 4) {
                    const _String$2 = _bind$5;
                    const _s$2 = _String$2._0;
                    const _bind$6 = _M0MP311QuietlyChan10moonschema6schema8JsonType5parse(_s$2, path);
                    let _tmp$3;
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _tmp$3 = _ok._0;
                    } else {
                      return _bind$6;
                    }
                    _M0MPC15array5Array4pushGRP311QuietlyChan10moonschema6schema8JsonTypeE(ts, _tmp$3);
                  } else {
                    return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"type\" array must contain type names"));
                  }
                  _tmp$2 = i + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              kw.typ = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema8JsonTypeEE4Some(ts);
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"type\" must be a string or an array of strings"));
            }
          }
          break;
        }
        case "enum": {
          if (_kv.$tag === 5) {
            const _Array$2 = _kv;
            const _a$2 = _Array$2._0;
            kw.enum_ = new _M0DTPC16option6OptionGRPB5ArrayGRPB4JsonEE4Some(_a$2);
          } else {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"enum\" must be a non-empty array"));
          }
          break;
        }
        case "const": {
          kw.const_ = _kv;
          break;
        }
        case "multipleOf": {
          const _bind$5 = _M0FP311QuietlyChan10moonschema6schema15compile__number("multipleOf", _kv, spath);
          let d;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            d = _ok._0;
          } else {
            return _bind$5;
          }
          if (!(d > 0)) {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"multipleOf\" must be > 0"));
          }
          kw.multiple_of = new _M0DTPC16option6OptionGdE4Some(d);
          break;
        }
        case "maximum": {
          const _bind$6 = _M0FP311QuietlyChan10moonschema6schema15compile__number("maximum", _kv, spath);
          let _tmp$3;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$3 = _ok._0;
          } else {
            return _bind$6;
          }
          kw.maximum = new _M0DTPC16option6OptionGdE4Some(_tmp$3);
          break;
        }
        case "exclusiveMaximum": {
          const _bind$7 = _M0FP311QuietlyChan10moonschema6schema15compile__number("exclusiveMaximum", _kv, spath);
          let _tmp$4;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp$4 = _ok._0;
          } else {
            return _bind$7;
          }
          kw.exclusive_maximum = new _M0DTPC16option6OptionGdE4Some(_tmp$4);
          break;
        }
        case "minimum": {
          const _bind$8 = _M0FP311QuietlyChan10moonschema6schema15compile__number("minimum", _kv, spath);
          let _tmp$5;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$5 = _ok._0;
          } else {
            return _bind$8;
          }
          kw.minimum = new _M0DTPC16option6OptionGdE4Some(_tmp$5);
          break;
        }
        case "exclusiveMinimum": {
          const _bind$9 = _M0FP311QuietlyChan10moonschema6schema15compile__number("exclusiveMinimum", _kv, spath);
          let _tmp$6;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _tmp$6 = _ok._0;
          } else {
            return _bind$9;
          }
          kw.exclusive_minimum = new _M0DTPC16option6OptionGdE4Some(_tmp$6);
          break;
        }
        case "minLength": {
          const _bind$10 = _M0FP311QuietlyChan10moonschema6schema14compile__count("minLength", _kv, spath);
          let _tmp$7;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _tmp$7 = _ok._0;
          } else {
            return _bind$10;
          }
          kw.min_length = _tmp$7;
          break;
        }
        case "maxLength": {
          const _bind$11 = _M0FP311QuietlyChan10moonschema6schema14compile__count("maxLength", _kv, spath);
          let _tmp$8;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _tmp$8 = _ok._0;
          } else {
            return _bind$11;
          }
          kw.max_length = _tmp$8;
          break;
        }
        case "format": {
          const _bind$12 = _M0FP311QuietlyChan10moonschema6schema8get__str("format", _kv, path);
          let _tmp$9;
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _tmp$9 = _ok._0;
          } else {
            return _bind$12;
          }
          kw.format = _tmp$9;
          break;
        }
        case "pattern": {
          const _bind$13 = _M0FP311QuietlyChan10moonschema6schema8get__str("pattern", _kv, path);
          let p;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            p = _ok._0;
          } else {
            return _bind$13;
          }
          const _bind$14 = _M0FP311QuietlyChan10moonschema6schema14compile__regex(p, path);
          let re;
          if (_bind$14.$tag === 1) {
            const _ok = _bind$14;
            re = _ok._0;
          } else {
            return _bind$14;
          }
          kw.pattern = { _0: re, _1: p };
          break;
        }
        case "minItems": {
          const _bind$15 = _M0FP311QuietlyChan10moonschema6schema14compile__count("minItems", _kv, spath);
          let _tmp$10;
          if (_bind$15.$tag === 1) {
            const _ok = _bind$15;
            _tmp$10 = _ok._0;
          } else {
            return _bind$15;
          }
          kw.min_items = _tmp$10;
          break;
        }
        case "maxItems": {
          const _bind$16 = _M0FP311QuietlyChan10moonschema6schema14compile__count("maxItems", _kv, spath);
          let _tmp$11;
          if (_bind$16.$tag === 1) {
            const _ok = _bind$16;
            _tmp$11 = _ok._0;
          } else {
            return _bind$16;
          }
          kw.max_items = _tmp$11;
          break;
        }
        case "uniqueItems": {
          switch (_kv.$tag) {
            case 1: {
              kw.unique_items = _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1468;
              break;
            }
            case 2: {
              kw.unique_items = _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1469;
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"uniqueItems\" must be a boolean"));
            }
          }
          break;
        }
        case "prefixItems": {
          const _bind$17 = _M0FP311QuietlyChan10moonschema6schema21compile__schema__list("prefixItems", _kv, ctx, spath);
          let _tmp$12;
          if (_bind$17.$tag === 1) {
            const _ok = _bind$17;
            _tmp$12 = _ok._0;
          } else {
            return _bind$17;
          }
          kw.prefix_items = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some(_tmp$12);
          break;
        }
        case "items": {
          if (_kv.$tag === 5) {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"items\" must be a single schema in 2020-12; the array form was renamed to \"prefixItems\""));
          } else {
            const _bind$18 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("items", _kv, ctx, spath);
            let _tmp$13;
            if (_bind$18.$tag === 1) {
              const _ok = _bind$18;
              _tmp$13 = _ok._0;
            } else {
              return _bind$18;
            }
            kw.items = _tmp$13;
          }
          break;
        }
        case "contains": {
          const _bind$18 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("contains", _kv, ctx, spath);
          let _tmp$13;
          if (_bind$18.$tag === 1) {
            const _ok = _bind$18;
            _tmp$13 = _ok._0;
          } else {
            return _bind$18;
          }
          kw.contains = _tmp$13;
          break;
        }
        case "minContains": {
          const _bind$19 = _M0FP311QuietlyChan10moonschema6schema14compile__count("minContains", _kv, spath);
          let _tmp$14;
          if (_bind$19.$tag === 1) {
            const _ok = _bind$19;
            _tmp$14 = _ok._0;
          } else {
            return _bind$19;
          }
          kw.min_contains = _tmp$14;
          break;
        }
        case "maxContains": {
          const _bind$20 = _M0FP311QuietlyChan10moonschema6schema14compile__count("maxContains", _kv, spath);
          let _tmp$15;
          if (_bind$20.$tag === 1) {
            const _ok = _bind$20;
            _tmp$15 = _ok._0;
          } else {
            return _bind$20;
          }
          kw.max_contains = _tmp$15;
          break;
        }
        case "minProperties": {
          const _bind$21 = _M0FP311QuietlyChan10moonschema6schema14compile__count("minProperties", _kv, spath);
          let _tmp$16;
          if (_bind$21.$tag === 1) {
            const _ok = _bind$21;
            _tmp$16 = _ok._0;
          } else {
            return _bind$21;
          }
          kw.min_properties = _tmp$16;
          break;
        }
        case "maxProperties": {
          const _bind$22 = _M0FP311QuietlyChan10moonschema6schema14compile__count("maxProperties", _kv, spath);
          let _tmp$17;
          if (_bind$22.$tag === 1) {
            const _ok = _bind$22;
            _tmp$17 = _ok._0;
          } else {
            return _bind$22;
          }
          kw.max_properties = _tmp$17;
          break;
        }
        case "required": {
          const _bind$23 = _M0FP311QuietlyChan10moonschema6schema21compile__string__list("required", _kv, spath);
          let _tmp$18;
          if (_bind$23.$tag === 1) {
            const _ok = _bind$23;
            _tmp$18 = _ok._0;
          } else {
            return _bind$23;
          }
          kw.required = new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_tmp$18);
          break;
        }
        case "properties": {
          const _bind$24 = _M0FP311QuietlyChan10moonschema6schema20compile__schema__map("properties", _kv, ctx, spath);
          let _tmp$19;
          if (_bind$24.$tag === 1) {
            const _ok = _bind$24;
            _tmp$19 = _ok._0;
          } else {
            return _bind$24;
          }
          kw.properties = _tmp$19;
          break;
        }
        case "patternProperties": {
          if (_kv.$tag === 6) {
            const _Object = _kv;
            const _m = _Object._0;
            const arr = [];
            const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(_m);
            while (true) {
              const _bind$25 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
              if (_bind$25 === undefined) {
                break;
              } else {
                const _Some$2 = _bind$25;
                const _x$2 = _Some$2;
                const _pk = _x$2._0;
                const _sub = _x$2._1;
                const _bind$26 = _M0FP311QuietlyChan10moonschema6schema14compile__regex(_pk, path);
                let re$2;
                if (_bind$26.$tag === 1) {
                  const _ok = _bind$26;
                  re$2 = _ok._0;
                } else {
                  return _bind$26;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(spath, "patternProperties");
                _M0MPC15array5Array4pushGRPB4JsonE(spath, _pk);
                const _bind$27 = _M0FP311QuietlyChan10moonschema6schema15compile__schema(_sub, ctx, spath);
                let _tmp$20;
                if (_bind$27.$tag === 1) {
                  const _ok = _bind$27;
                  _tmp$20 = _ok._0;
                } else {
                  return _bind$27;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(arr, { _0: re$2, _1: _pk, _2: _tmp$20 });
                _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
                _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
                continue;
              }
            }
            kw.pattern_properties = new _M0DTPC16option6OptionGRPB5ArrayGURPC16string5RegexsRP311QuietlyChan10moonschema6schema6SchemaEEE4Some(arr);
          } else {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"patternProperties\" must be an object"));
          }
          break;
        }
        case "propertyNames": {
          const _bind$25 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("propertyNames", _kv, ctx, spath);
          let _tmp$20;
          if (_bind$25.$tag === 1) {
            const _ok = _bind$25;
            _tmp$20 = _ok._0;
          } else {
            return _bind$25;
          }
          kw.property_names = _tmp$20;
          break;
        }
        case "additionalProperties": {
          switch (_kv.$tag) {
            case 1: {
              break;
            }
            case 2: {
              kw.additional_closed = _M0FP311QuietlyChan10moonschema6schema17compile__keywordsN6constrS1470;
              break;
            }
            default: {
              const _bind$26 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("additionalProperties", _kv, ctx, spath);
              let _tmp$21;
              if (_bind$26.$tag === 1) {
                const _ok = _bind$26;
                _tmp$21 = _ok._0;
              } else {
                return _bind$26;
              }
              kw.additional = _tmp$21;
            }
          }
          break;
        }
        case "dependentRequired": {
          const _bind$27 = _M0FP311QuietlyChan10moonschema6schema20compile__string__map("dependentRequired", _kv, spath);
          let _tmp$22;
          if (_bind$27.$tag === 1) {
            const _ok = _bind$27;
            _tmp$22 = _ok._0;
          } else {
            return _bind$27;
          }
          kw.dependent_required = _tmp$22;
          break;
        }
        case "dependentSchemas": {
          const _bind$28 = _M0FP311QuietlyChan10moonschema6schema20compile__schema__map("dependentSchemas", _kv, ctx, spath);
          let _tmp$23;
          if (_bind$28.$tag === 1) {
            const _ok = _bind$28;
            _tmp$23 = _ok._0;
          } else {
            return _bind$28;
          }
          kw.dependent_schemas = _tmp$23;
          break;
        }
        case "x-rules": {
          if (_kv.$tag === 5) {
            const _Array$2 = _kv;
            const _a$2 = _Array$2._0;
            const srcs = [];
            const exprs = [];
            const _bind$29 = _a$2.length;
            let _tmp$24 = 0;
            while (true) {
              const i = _tmp$24;
              if (i < _bind$29) {
                const _bind$30 = _M0FP311QuietlyChan10moonschema6schema8get__str("x-rules", _M0MPC15array5Array2atGRPB4JsonE(_a$2, i), path);
                let src;
                if (_bind$30.$tag === 1) {
                  const _ok = _bind$30;
                  src = _ok._0;
                } else {
                  return _bind$30;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(srcs, src);
                const _bind$31 = _M0FP311QuietlyChan10moonschema6schema13compile__rule(src, path);
                let _tmp$25;
                if (_bind$31.$tag === 1) {
                  const _ok = _bind$31;
                  _tmp$25 = _ok._0;
                } else {
                  return _bind$31;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(exprs, _tmp$25);
                _tmp$24 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            kw.rule_srcs = new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(srcs);
            kw.rules = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema5rules4ExprEE4Some(exprs);
          } else {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, "\"x-rules\" must be an array of rule strings"));
          }
          break;
        }
        case "allOf": {
          const _bind$29 = _M0FP311QuietlyChan10moonschema6schema21compile__schema__list("allOf", _kv, ctx, spath);
          let _tmp$24;
          if (_bind$29.$tag === 1) {
            const _ok = _bind$29;
            _tmp$24 = _ok._0;
          } else {
            return _bind$29;
          }
          kw.all_of = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some(_tmp$24);
          break;
        }
        case "anyOf": {
          const _bind$30 = _M0FP311QuietlyChan10moonschema6schema21compile__schema__list("anyOf", _kv, ctx, spath);
          let _tmp$25;
          if (_bind$30.$tag === 1) {
            const _ok = _bind$30;
            _tmp$25 = _ok._0;
          } else {
            return _bind$30;
          }
          kw.any_of = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some(_tmp$25);
          break;
        }
        case "oneOf": {
          const _bind$31 = _M0FP311QuietlyChan10moonschema6schema21compile__schema__list("oneOf", _kv, ctx, spath);
          let _tmp$26;
          if (_bind$31.$tag === 1) {
            const _ok = _bind$31;
            _tmp$26 = _ok._0;
          } else {
            return _bind$31;
          }
          kw.one_of = new _M0DTPC16option6OptionGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE4Some(_tmp$26);
          break;
        }
        case "not": {
          const _bind$32 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("not", _kv, ctx, spath);
          let _tmp$27;
          if (_bind$32.$tag === 1) {
            const _ok = _bind$32;
            _tmp$27 = _ok._0;
          } else {
            return _bind$32;
          }
          kw.not_ = _tmp$27;
          break;
        }
        case "if": {
          const _bind$33 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("if", _kv, ctx, spath);
          let _tmp$28;
          if (_bind$33.$tag === 1) {
            const _ok = _bind$33;
            _tmp$28 = _ok._0;
          } else {
            return _bind$33;
          }
          kw.if_ = _tmp$28;
          break;
        }
        case "then": {
          const _bind$34 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("then", _kv, ctx, spath);
          let _tmp$29;
          if (_bind$34.$tag === 1) {
            const _ok = _bind$34;
            _tmp$29 = _ok._0;
          } else {
            return _bind$34;
          }
          kw.then_ = _tmp$29;
          break;
        }
        case "else": {
          const _bind$35 = _M0FP311QuietlyChan10moonschema6schema18compile__subschema("else", _kv, ctx, spath);
          let _tmp$30;
          if (_bind$35.$tag === 1) {
            const _ok = _bind$35;
            _tmp$30 = _ok._0;
          } else {
            return _bind$35;
          }
          kw.else_ = _tmp$30;
          break;
        }
        case "$ref": {
          const _bind$36 = _M0FP311QuietlyChan10moonschema6schema8get__str("$ref", _kv, path);
          let r;
          if (_bind$36.$tag === 1) {
            const _ok = _bind$36;
            r = _ok._0;
          } else {
            return _bind$36;
          }
          if (!_M0FP311QuietlyChan10moonschema6schema16has__str__prefix(r, "#")) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(63);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "only local \"$ref\" targets (\"#/...\") are supported in v0, got \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, r);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
          }
          let _tmp$31;
          const _p = "#";
          if (!(r === _p)) {
            _tmp$31 = !_M0FP311QuietlyChan10moonschema6schema16has__str__prefix(r, "#/");
          } else {
            _tmp$31 = false;
          }
          if (_tmp$31) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "named fragment \"$ref\" targets (e.g. \"#foo\", $anchor refs) are not supported in v0, got \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, r);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
          }
          kw.ref_ = r;
          break;
        }
        case "$id": {
          if (spath.length > 1 && ctx.strict) {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error69QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eUnsupportedKeyword(path, "$id (base URI change)"));
          }
          break;
        }
        default: {
          if (ctx.strict && !_M0FP311QuietlyChan10moonschema6schema16has__str__prefix(_name, "x-")) {
            return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error69QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eUnsupportedKeyword(path, _name));
          }
        }
      }
      continue;
    }
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema8KeywordsRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(kw);
}
function _M0FP311QuietlyChan10moonschema6schema15compile__schema(v, ctx, spath) {
  const _bind$2 = _M0FP311QuietlyChan10moonschema6schema13compile__node(v, ctx, spath);
  let node;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    node = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(new _M0TP311QuietlyChan10moonschema6schema6Schema(node, ctx));
}
function _M0FP311QuietlyChan10moonschema6schema21compile__schema__list(kw_name, v, ctx, spath) {
  const path = _M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath);
  if (v.$tag === 5) {
    const _Array = v;
    const _arr = _Array._0;
    const list = [];
    const _bind$2 = _arr.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _M0MPC15array5Array4pushGRPB4JsonE(spath, kw_name);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0MPC13int3Int18to__string_2einner(i, 10));
        const _bind$3 = _M0FP311QuietlyChan10moonschema6schema15compile__schema(_M0MPC15array5Array2atGRPB4JsonE(_arr, i), ctx, spath);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(list, _tmp$2);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(list);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be an array of schemas");
    return new _M0DTPC16result6ResultGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(path, _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema20compile__schema__map(kw_name, v, ctx, spath) {
  if (v.$tag === 6) {
    const _Object = v;
    const _m = _Object._0;
    const _bind$2 = [];
    const out = _M0MPB3Map3MapGsRP311QuietlyChan10moonschema6schema6SchemaE(new _M0TPB9ArrayViewGUsRP311QuietlyChan10moonschema6schema6SchemaEE(_bind$2, 0, 0), _M0FP311QuietlyChan10moonschema6schema20compile__schema__mapN6constrS1471);
    const _it = _M0MPB3Map5iter2GsRPB4JsonE(_m);
    while (true) {
      const _bind$3 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _k = _x._0;
        const _sub = _x._1;
        _M0MPC15array5Array4pushGRPB4JsonE(spath, kw_name);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _k);
        const _bind$4 = _M0FP311QuietlyChan10moonschema6schema15compile__schema(_sub, ctx, spath);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRP311QuietlyChan10moonschema6schema6SchemaE(out, _k, _tmp);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        continue;
      }
    }
    return new _M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(out);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, kw_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" must be an object");
    return new _M0DTPC16result6ResultGRPB3MapGsRP311QuietlyChan10moonschema6schema6SchemaERP311QuietlyChan10moonschema6schema12CompileErrorE3Err(new _M0DTPC15error5Error64QuietlyChan_2fmoonschema_2fschema_2eCompileError_2eInvalidSchema(_M0FP311QuietlyChan10moonschema6schema15schema__pointer(spath), _string_builder.val));
  }
}
function _M0FP311QuietlyChan10moonschema6schema18compile__subschema(kw_name, v, ctx, spath) {
  _M0MPC15array5Array4pushGRPB4JsonE(spath, kw_name);
  const _bind$2 = _M0FP311QuietlyChan10moonschema6schema15compile__schema(v, ctx, spath);
  let s;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    s = _ok._0;
  } else {
    return _bind$2;
  }
  _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(s);
}
function _M0FP311QuietlyChan10moonschema6schema8hex__val(c) {
  return c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : undefined;
}
function _M0FP311QuietlyChan10moonschema6schema15percent__decode(t) {
  const chars = _M0MPC16string6String9to__array(t);
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let i = 0;
  const n = chars.length;
  while (true) {
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c === 37 && (i + 2 | 0) < n) {
        const h = _M0FP311QuietlyChan10moonschema6schema8hex__val(_M0MPC15array5Array2atGcE(chars, i + 1 | 0));
        const l = _M0FP311QuietlyChan10moonschema6schema8hex__val(_M0MPC15array5Array2atGcE(chars, i + 2 | 0));
        _L: {
          _L$2: {
            if (h === undefined) {
              break _L$2;
            } else {
              const _Some = h;
              const _hh = _Some;
              if (l === undefined) {
                break _L$2;
              } else {
                const _Some$2 = l;
                const _ll = _Some$2;
                const _bind$2 = _M0MPC13int3Int8to__char((Math.imul(_hh, 16) | 0) + _ll | 0);
                if (_bind$2 === -1) {
                  _M0IPB13StringBuilderPB6Logger11write__char(b, c);
                  i = i + 1 | 0;
                } else {
                  const _Some$3 = _bind$2;
                  const _decoded = _Some$3;
                  _M0IPB13StringBuilderPB6Logger11write__char(b, _decoded);
                  i = i + 3 | 0;
                }
              }
            }
            break _L;
          }
          _M0IPB13StringBuilderPB6Logger11write__char(b, c);
          i = i + 1 | 0;
        }
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(b, c);
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema24unescape__pointer__token(t) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let pending_escape = false;
  const _bind$2 = t.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$2) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$3 = t.charCodeAt(_string_index);
        if (_bind$3 >= 55296 && _bind$3 <= 56319 && (_string_index + 1 | 0) < _bind$2) {
          const _bind$4 = t.charCodeAt(_string_index + 1 | 0);
          if (_bind$4 >= 56320 && _bind$4 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$3 - 55296 | 0, 1024) | 0) + _bind$4 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$3;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$3;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (pending_escape) {
        if (_decoded_char === 48) {
          _M0IPB13StringBuilderPB6Logger11write__char(b, 126);
        } else {
          if (_decoded_char === 49) {
            _M0IPB13StringBuilderPB6Logger11write__char(b, 47);
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(b, _decoded_char);
          }
        }
        pending_escape = false;
      } else {
        if (_decoded_char === 126) {
          pending_escape = true;
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(b, _decoded_char);
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return b.val;
}
function _M0FP311QuietlyChan10moonschema6schema17parse__local__ref(pointer) {
  if (pointer === "#") {
    return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some([]);
  }
  const chars = _M0MPC16string6String9to__array(pointer);
  if (chars.length < 2 || (_M0MPC15array5Array2atGcE(chars, 0) !== 35 || _M0MPC15array5Array2atGcE(chars, 1) !== 47)) {
    return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
  }
  const tokens = [];
  const cur = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let i = 2;
  while (true) {
    if (i < chars.length) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c === 47) {
        _M0MPC15array5Array4pushGRPB4JsonE(tokens, _M0FP311QuietlyChan10moonschema6schema24unescape__pointer__token(_M0FP311QuietlyChan10moonschema6schema15percent__decode(cur.val)));
        _M0MPB13StringBuilder5reset(cur);
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(cur, c);
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPB4JsonE(tokens, _M0FP311QuietlyChan10moonschema6schema24unescape__pointer__token(_M0FP311QuietlyChan10moonschema6schema15percent__decode(cur.val)));
  return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(tokens);
}
function _M0FP311QuietlyChan10moonschema6schema21parse__pointer__index(s) {
  const chars = _M0MPC16string6String9to__array(s);
  if (chars.length === 0) {
    return undefined;
  }
  if (chars.length > 1 && _M0MPC15array5Array2atGcE(chars, 0) === 48) {
    return undefined;
  }
  let v = 0;
  const _bind$2 = chars.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (c < 48 || c > 57) {
        return undefined;
      }
      v = (Math.imul(v, 10) | 0) + (c - 48 | 0) | 0;
      if (v > 100000000) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return v;
}
function _M0FP311QuietlyChan10moonschema6schema16resolve__pointer(root, tokens) {
  let cur = root;
  const _bind$2 = tokens.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const key = tokens[_];
      let next;
      _L: {
        _L$2: {
          const _bind$3 = cur;
          if (_bind$3 === undefined) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _x = _Some;
            switch (_x.$tag) {
              case 6: {
                const _Object = _x;
                const _m = _Object._0;
                next = _M0MPB3Map3getGsRPB4JsonE(_m, key);
                break;
              }
              case 5: {
                const _Array = _x;
                const _a = _Array._0;
                const _bind$4 = _M0FP311QuietlyChan10moonschema6schema21parse__pointer__index(key);
                if (_bind$4 === undefined) {
                  next = undefined;
                } else {
                  const _Some$2 = _bind$4;
                  const _i = _Some$2;
                  next = _i < _a.length ? _M0MPC15array5Array2atGRPB4JsonE(_a, _i) : undefined;
                }
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        next = undefined;
      }
      cur = next;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return cur;
}
function _M0FP311QuietlyChan10moonschema6schema21get__or__compile__ref(root, pointer) {
  const ctx = root.ctx;
  const _bind$2 = _M0MPB3Map3getGsRP311QuietlyChan10moonschema6schema6SchemaE(ctx.cache, pointer);
  if (_bind$2 === undefined) {
    const _bind$3 = _M0FP311QuietlyChan10moonschema6schema17parse__local__ref(pointer);
    if (_bind$3.$tag === 1) {
      const _Some = _bind$3;
      const _tokens = _Some._0;
      const _bind$4 = _M0FP311QuietlyChan10moonschema6schema16resolve__pointer(ctx.root, _tokens);
      if (_bind$4 === undefined) {
        return undefined;
      } else {
        const _Some$2 = _bind$4;
        const _target = _Some$2;
        const cpath = ["#"];
        const _bind$5 = _tokens.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$5) {
            const t = _tokens[_];
            _M0MPC15array5Array4pushGRPB4JsonE(cpath, t);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let node;
        let _try_err;
        _L: {
          _L$2: {
            const _bind$6 = _M0FP311QuietlyChan10moonschema6schema13compile__node(_target, ctx, cpath);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              node = _ok._0;
            } else {
              const _err = _bind$6;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          node = undefined;
        }
        if (node === undefined) {
          return undefined;
        } else {
          const _Some$3 = node;
          const _n = _Some$3;
          const s = new _M0TP311QuietlyChan10moonschema6schema6Schema(_n, ctx);
          _M0MPB3Map3setGsRP311QuietlyChan10moonschema6schema6SchemaE(ctx.cache, pointer, s);
          return s;
        }
      }
    } else {
      return undefined;
    }
  } else {
    const _Some = _bind$2;
    const _s = _Some;
    return _s;
  }
}
function _M0FP311QuietlyChan10moonschema6schema8json__eq(a, b) {
  switch (a.$tag) {
    case 0: {
      if (b.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (b.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (b.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      const _Number = a;
      const _x = _Number._0;
      if (b.$tag === 3) {
        const _Number$2 = b;
        const _y = _Number$2._0;
        return _x === _y;
      } else {
        return false;
      }
    }
    case 4: {
      const _String = a;
      const _x$2 = _String._0;
      if (b.$tag === 4) {
        const _String$2 = b;
        const _y = _String$2._0;
        return _x$2 === _y;
      } else {
        return false;
      }
    }
    case 5: {
      const _Array = a;
      const _x$3 = _Array._0;
      if (b.$tag === 5) {
        const _Array$2 = b;
        const _y = _Array$2._0;
        if (_x$3.length !== _y.length) {
          return false;
        } else {
          let same = true;
          const _bind$2 = _x$3.length;
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < _bind$2) {
              if (!_M0FP311QuietlyChan10moonschema6schema8json__eq(_M0MPC15array5Array2atGRPB4JsonE(_x$3, i), _M0MPC15array5Array2atGRPB4JsonE(_y, i))) {
                same = false;
              }
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return same;
        }
      } else {
        return false;
      }
    }
    default: {
      const _Object = a;
      const _x$4 = _Object._0;
      if (b.$tag === 6) {
        const _Object$2 = b;
        const _y = _Object$2._0;
        if (_x$4.size !== _y.size) {
          return false;
        } else {
          let same = true;
          const _it = _M0MPB3Map5iter2GsRPB4JsonE(_x$4);
          while (true) {
            const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
            if (_bind$2 === undefined) {
              break;
            } else {
              const _Some = _bind$2;
              const _x$5 = _Some;
              const _k = _x$5._0;
              const _v = _x$5._1;
              const _bind$3 = _M0MPB3Map3getGsRPB4JsonE(_y, _k);
              if (_bind$3 === undefined) {
                same = false;
              } else {
                const _Some$2 = _bind$3;
                const _v2 = _Some$2;
                if (!_M0FP311QuietlyChan10moonschema6schema8json__eq(_v, _v2)) {
                  same = false;
                }
              }
              continue;
            }
          }
          return same;
        }
      } else {
        return false;
      }
    }
  }
}
function _M0FP311QuietlyChan10moonschema6schema17str__code__points(s) {
  let n = 0;
  const _bind$2 = s.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$2) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$3 = s.charCodeAt(_string_index);
        if (_bind$3 >= 55296 && _bind$3 <= 56319 && (_string_index + 1 | 0) < _bind$2) {
          const _bind$4 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$4 >= 56320 && _bind$4 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$3 - 55296 | 0, 1024) | 0) + _bind$4 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$3;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$3;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      n = n + 1 | 0;
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return n;
}
function _M0MP311QuietlyChan10moonschema6schema8JsonType5label(self) {
  switch (self) {
    case 0: {
      return "null";
    }
    case 1: {
      return "boolean";
    }
    case 2: {
      return "object";
    }
    case 3: {
      return "array";
    }
    case 4: {
      return "number";
    }
    case 5: {
      return "string";
    }
    default: {
      return "integer";
    }
  }
}
function _M0EPC14json4JsonP311QuietlyChan10moonschema6schema10json__type(self) {
  _L: {
    switch (self.$tag) {
      case 0: {
        return 0;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 6: {
        return 2;
      }
      case 5: {
        return 3;
      }
      case 3: {
        return 4;
      }
      default: {
        return 5;
      }
    }
  }
  return 1;
}
function _M0EPC14json4JsonP311QuietlyChan10moonschema6schema13matches__type(self, t) {
  if (t === 6) {
    if (self.$tag === 3) {
      const _Number = self;
      const _n = _Number._0;
      return !(_n !== _n) && _n === _M0MPC16double6Double5floor(_n);
    } else {
      return false;
    }
  } else {
    return _M0IP311QuietlyChan10moonschema6schema8JsonTypePB2Eq5equal(_M0EPC14json4JsonP311QuietlyChan10moonschema6schema10json__type(self), t);
  }
}
function _M0FP311QuietlyChan10moonschema6schema14validate__node(root, node, v, ipath, spath, errors) {
  if (node.$tag === 0) {
    const _BoolNode = node;
    const _x = _BoolNode._0;
    if (_x === true) {
      return true;
    } else {
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema13err__no__leaf("false schema", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(root.ctx.locale, "boolean schema is false", "布尔模式为 false")));
      return false;
    }
  } else {
    const _SchemaNode = node;
    const _kw = _SchemaNode._0;
    return _M0FP311QuietlyChan10moonschema6schema18validate__keywords(root, _kw, v, ipath, spath, errors);
  }
}
function _M0FP311QuietlyChan10moonschema6schema18validate__keywords(root, kw, v, ipath, spath, errors) {
  const start_len = errors.length;
  const loc = root.ctx.locale;
  const _bind$2 = kw.ref_;
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _r = _Some;
    const _bind$3 = _M0FP311QuietlyChan10moonschema6schema21get__or__compile__ref(root, _r);
    if (_bind$3 === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cannot resolve $ref \"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _r);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
      const _tmp = _string_builder.val;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "无法解析 $ref \"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _r);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("$ref", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
    } else {
      const _Some$2 = _bind$3;
      const _s = _Some$2;
      _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _s.node, v, ipath, spath, errors);
    }
  }
  const _bind$3 = kw.typ;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _ts = _Some._0;
    let ok = false;
    const _bind$4 = _ts.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$4) {
        if (_M0EPC14json4JsonP311QuietlyChan10moonschema6schema13matches__type(v, _M0MPC15array5Array2atGRP311QuietlyChan10moonschema6schema8JsonTypeE(_ts, i))) {
          ok = true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!ok) {
      const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      const _bind$5 = _ts.length;
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < _bind$5) {
          if (i > 0) {
            if (i === (_ts.length - 1 | 0)) {
              _M0IPB13StringBuilderPB6Logger13write__string(b, " or ");
            } else {
              _M0IPB13StringBuilderPB6Logger13write__string(b, ", ");
            }
          }
          _M0IPB13StringBuilderPB6Logger13write__string(b, _M0MP311QuietlyChan10moonschema6schema8JsonType5label(_M0MPC15array5Array2atGRP311QuietlyChan10moonschema6schema8JsonTypeE(_ts, i)));
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, b.val);
      const _tmp$3 = _string_builder.val;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须是 ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, b.val);
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("type", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$3, _string_builder$2.val)));
    }
  }
  const _bind$4 = kw.const_;
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _c = _Some;
    if (!_M0FP311QuietlyChan10moonschema6schema8json__eq(v, _c)) {
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("const", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, "must be equal to constant", "必须等于常量值")));
    }
  }
  const _bind$5 = kw.enum_;
  if (_bind$5.$tag === 1) {
    const _Some = _bind$5;
    const _vals = _Some._0;
    let ok = false;
    const _bind$6 = _vals.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$6) {
        if (_M0FP311QuietlyChan10moonschema6schema8json__eq(v, _M0MPC15array5Array2atGRPB4JsonE(_vals, i))) {
          ok = true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!ok) {
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("enum", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, "must be equal to one of the allowed values", "必须是允许的枚举值之一")));
    }
  }
  if (v.$tag === 3) {
    const _Number = v;
    const _n = _Number._0;
    const _bind$6 = kw.multiple_of;
    if (_bind$6.$tag === 1) {
      const _Some = _bind$6;
      const _m = _Some._0;
      const q = _n / _m;
      const frac = q - _M0MPC16double6Double5floor(q);
      const mag = Math.abs(q) > 1 ? Math.abs(q) : 1;
      const eps = 1e-009 * mag;
      if (!(frac === 0 || (frac < eps || 1 - frac < eps))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be multiple of ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _m);
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须是 ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _m);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " 的倍数");
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("multipleOf", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$7 = kw.maximum;
    if (_bind$7.$tag === 1) {
      const _Some = _bind$7;
      const _m = _Some._0;
      if (_n > _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be <= ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _m);
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须 <= ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("maximum", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$8 = kw.exclusive_maximum;
    if (_bind$8.$tag === 1) {
      const _Some = _bind$8;
      const _m = _Some._0;
      if (_n >= _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be < ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _m);
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须 < ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("exclusiveMaximum", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$9 = kw.minimum;
    if (_bind$9.$tag === 1) {
      const _Some = _bind$9;
      const _m = _Some._0;
      if (_n < _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be >= ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _m);
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须 >= ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("minimum", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$10 = kw.exclusive_minimum;
    if (_bind$10.$tag === 1) {
      const _Some = _bind$10;
      const _m = _Some._0;
      if (_n <= _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must be > ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, _m);
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须 > ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("exclusiveMinimum", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
  }
  if (v.$tag === 4) {
    const _String = v;
    const _sv = _String._0;
    const _bind$6 = kw.min_length;
    if (_bind$6 === undefined) {
    } else {
      const _Some = _bind$6;
      const _ml = _Some;
      if (_M0FP311QuietlyChan10moonschema6schema17str__code__points(_sv) < _ml) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have fewer than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _ml);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " characters");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "字符数不能少于 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _ml);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("minLength", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$7 = kw.max_length;
    if (_bind$7 === undefined) {
    } else {
      const _Some = _bind$7;
      const _ml = _Some;
      if (_M0FP311QuietlyChan10moonschema6schema17str__code__points(_sv) > _ml) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have more than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _ml);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " characters");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "字符数不能超过 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _ml);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("maxLength", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$8 = kw.format;
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const _f = _Some;
      if (root.ctx.assert_format) {
        const _bind$9 = _M0FP311QuietlyChan10moonschema6schema13check__format(_f, _sv);
        if (_bind$9 === -1) {
        } else {
          const _Some$2 = _bind$9;
          const _x = _Some$2;
          if (_x === false) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must match format \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, _f);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
            const _tmp = _string_builder.val;
            const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须符合格式 \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _f);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
            _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("format", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
          }
        }
      }
    }
    const _bind$9 = kw.pattern;
    if (_bind$9 === undefined) {
    } else {
      const _Some = _bind$9;
      const _x = _Some;
      const _re = _x._0;
      const _src = _x._1;
      const _bind$10 = _M0MPC16string5Regex15execute_2einner(_re, new _M0TPC16string10StringView(_sv, 0, _sv.length), 0);
      if (_bind$10 === undefined) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must match pattern \"");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _src);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须匹配模式 \"");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _src);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("pattern", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
  }
  if (v.$tag === 5) {
    const _Array = v;
    const _arr = _Array._0;
    const _bind$6 = kw.min_items;
    if (_bind$6 === undefined) {
    } else {
      const _Some = _bind$6;
      const _m = _Some;
      if (_arr.length < _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have fewer than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _m);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " items");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(25);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "元素个数不能少于 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("minItems", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$7 = kw.max_items;
    if (_bind$7 === undefined) {
    } else {
      const _Some = _bind$7;
      const _m = _Some;
      if (_arr.length > _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have more than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _m);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " items");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(25);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "元素个数不能超过 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("maxItems", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$8 = kw.unique_items;
    if (_bind$8 === -1) {
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      if (_x === true) {
        const n = _arr.length;
        let dup_found = false;
        let i = 0;
        while (true) {
          if (i < n) {
            if (dup_found) {
              break;
            }
            let j = 0;
            while (true) {
              if (j < i) {
                if (_M0FP311QuietlyChan10moonschema6schema8json__eq(_M0MPC15array5Array2atGRPB4JsonE(_arr, i), _M0MPC15array5Array2atGRPB4JsonE(_arr, j))) {
                  dup_found = true;
                  break;
                }
                j = j + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (dup_found) {
          _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("uniqueItems", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, "must NOT have duplicate items", "不能包含重复元素")));
        }
      }
    }
    const _bind$9 = kw.prefix_items;
    let pcount;
    if (_bind$9.$tag === 1) {
      const _Some = _bind$9;
      const _p = _Some._0;
      pcount = _p.length;
    } else {
      pcount = 0;
    }
    const _bind$10 = _arr.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$10) {
        _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
        if (i < pcount) {
          const p = _M0MPC15array5Array2atGRPB4JsonE(_M0MPC16option6Option6unwrapGRPB5ArrayGRP311QuietlyChan10moonschema6schema6SchemaEE(kw.prefix_items), i);
          _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1472);
          _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
          _M0FP311QuietlyChan10moonschema6schema14validate__node(root, p.node, _M0MPC15array5Array2atGRPB4JsonE(_arr, i), ipath, spath, errors);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        } else {
          const _bind$11 = kw.items;
          if (_bind$11 === undefined) {
          } else {
            const _Some = _bind$11;
            const _it = _Some;
            _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1473);
            _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _it.node, _M0MPC15array5Array2atGRPB4JsonE(_arr, i), ipath, spath, errors);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          }
        }
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$11 = kw.contains;
    if (_bind$11 === undefined) {
    } else {
      const _Some = _bind$11;
      const _cs = _Some;
      const min_c = _M0MPC16option6Option10unwrap__orGiE(kw.min_contains, 1);
      let count = 0;
      const _bind$12 = _arr.length;
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < _bind$12) {
          const sub = [];
          _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
          _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1474);
          const ok = _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _cs.node, _M0MPC15array5Array2atGRPB4JsonE(_arr, i), ipath, spath, sub);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
          if (ok) {
            count = count + 1 | 0;
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (count < min_c) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must contain at least ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, min_c);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " valid item(s)");
        const _tmp$3 = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(42);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "至少包含 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, min_c);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " 个匹配 contains 的元素");
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("contains", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$3, _string_builder$2.val)));
      }
      const _bind$13 = kw.max_contains;
      if (_bind$13 === undefined) {
      } else {
        const _Some$2 = _bind$13;
        const _mc = _Some$2;
        if (count > _mc) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(40);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must contain no more than ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, _mc);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " valid item(s)");
          const _tmp$3 = _string_builder.val;
          const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(42);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "匹配 contains 的元素不能超过 ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _mc);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " 个");
          _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("maxContains", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$3, _string_builder$2.val)));
        }
      }
    }
  }
  if (v.$tag === 6) {
    const _Object = v;
    const _obj = _Object._0;
    const _bind$6 = kw.min_properties;
    if (_bind$6 === undefined) {
    } else {
      const _Some = _bind$6;
      const _m = _Some;
      if (_obj.size < _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have fewer than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _m);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " properties");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(25);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "属性个数不能少于 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("minProperties", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$7 = kw.max_properties;
    if (_bind$7 === undefined) {
    } else {
      const _Some = _bind$7;
      const _m = _Some;
      if (_obj.size > _m) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have more than ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _m);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " properties");
        const _tmp = _string_builder.val;
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(25);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "属性个数不能超过 ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _m);
        _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("maxProperties", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
      }
    }
    const _bind$8 = kw.required;
    if (_bind$8.$tag === 1) {
      const _Some = _bind$8;
      const _req = _Some._0;
      const _bind$9 = _req.length;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _bind$9) {
          const p = _M0MPC15array5Array2atGRPB4JsonE(_req, i);
          if (!_M0MPB3Map8containsGsRPB4JsonE(_obj, p)) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must have required property \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, p);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
            const _tmp$2 = _string_builder.val;
            const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "缺少必需属性 \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, p);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
            _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("required", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$2, _string_builder$2.val)));
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    const _bind$9 = kw.properties;
    if (_bind$9 === undefined) {
    } else {
      const _Some = _bind$9;
      const _props = _Some;
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_props);
      while (true) {
        const _bind$10 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$10 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$10;
          const _x = _Some$2;
          const _k = _x._0;
          const _sub = _x._1;
          const _bind$11 = _M0MPB3Map3getGsRPB4JsonE(_obj, _k);
          if (_bind$11 === undefined) {
          } else {
            const _Some$3 = _bind$11;
            const _pv = _Some$3;
            _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
            _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1475);
            _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
            _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _sub.node, _pv, ipath, spath, errors);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
          }
          continue;
        }
      }
    }
    const _bind$10 = kw.pattern_properties;
    if (_bind$10.$tag === 1) {
      const _Some = _bind$10;
      const _pairs = _Some._0;
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_obj);
      while (true) {
        const _bind$11 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$11 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$11;
          const _x = _Some$2;
          const _k = _x._0;
          const _ov = _x._1;
          const _bind$12 = _pairs.length;
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < _bind$12) {
              const pair = _M0MPC15array5Array2atGRPB4JsonE(_pairs, i);
              const _bind$13 = _M0MPC16string5Regex15execute_2einner(pair._0, new _M0TPC16string10StringView(_k, 0, _k.length), 0);
              if (_bind$13 === undefined) {
              } else {
                _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
                _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1476);
                _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(pair._1));
                _M0FP311QuietlyChan10moonschema6schema14validate__node(root, pair._2.node, _ov, ipath, spath, errors);
                _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
                _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
                _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
              }
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          continue;
        }
      }
    }
    const _bind$11 = kw.additional_closed;
    if (_bind$11 === -1) {
    } else {
      const _Some = _bind$11;
      const _x = _Some;
      if (_x === true) {
        const _it = _M0MPB3Map5iter2GsRPB4JsonE(_obj);
        while (true) {
          const _bind$12 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
          if (_bind$12 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$12;
            const _x$2 = _Some$2;
            const _k = _x$2._0;
            if (!_M0FP311QuietlyChan10moonschema6schema14key__is__known(kw, _k)) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(40);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must NOT have additional properties (\"");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, _k);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\")");
              const _tmp = _string_builder.val;
              const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(32);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "不允许出现多余属性 (\"");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _k);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\")");
              _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("additionalProperties", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp, _string_builder$2.val)));
            }
            continue;
          }
        }
      }
    }
    const _bind$12 = kw.additional;
    if (_bind$12 === undefined) {
    } else {
      const _Some = _bind$12;
      const _add = _Some;
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_obj);
      while (true) {
        const _bind$13 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$13 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$13;
          const _x = _Some$2;
          const _k = _x._0;
          const _ov = _x._1;
          if (!_M0FP311QuietlyChan10moonschema6schema14key__is__known(kw, _k)) {
            _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
            _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1477);
            _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _add.node, _ov, ipath, spath, errors);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
          }
          continue;
        }
      }
    }
    const _bind$13 = kw.property_names;
    if (_bind$13 === undefined) {
    } else {
      const _Some = _bind$13;
      const _pn = _Some;
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_obj);
      while (true) {
        const _bind$14 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$14 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$14;
          const _x = _Some$2;
          const _k = _x._0;
          _M0MPC15array5Array4pushGRPB4JsonE(ipath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
          _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1478);
          _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _pn.node, new _M0DTPB4Json6String(_k), ipath, spath, errors);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(ipath);
          continue;
        }
      }
    }
    const _bind$14 = kw.dependent_required;
    if (_bind$14 === undefined) {
    } else {
      const _Some = _bind$14;
      const _m = _Some;
      const _it = _M0MPB3Map5iter2GsRPB5ArrayGsEE(_m);
      while (true) {
        const _bind$15 = _M0MPB5Iter24nextGsRPB5ArrayGsEE(_it);
        if (_bind$15 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$15;
          const _x = _Some$2;
          const _k = _x._0;
          const _deps = _x._1;
          if (_M0MPB3Map8containsGsRPB4JsonE(_obj, _k)) {
            const _bind$16 = _deps.length;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < _bind$16) {
                const d = _M0MPC15array5Array2atGRPB4JsonE(_deps, i);
                if (!_M0MPB3Map8containsGsRPB4JsonE(_obj, d)) {
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(49);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must have property \"");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder, d);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" when property \"");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _k);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" is present");
                  const _tmp$2 = _string_builder.val;
                  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(40);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "存在属性 \"");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _k);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" 时必须同时提供 \"");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, d);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
                  _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("dependentRequired", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$2, _string_builder$2.val)));
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          continue;
        }
      }
    }
    const _bind$15 = kw.dependent_schemas;
    if (_bind$15 === undefined) {
    } else {
      const _Some = _bind$15;
      const _m = _Some;
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_m);
      while (true) {
        const _bind$16 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$16 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$16;
          const _x = _Some$2;
          const _k = _x._0;
          const _ds = _x._1;
          if (_M0MPB3Map8containsGsRPB4JsonE(_obj, _k)) {
            _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1479);
            _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok5PTKey(_k));
            _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _ds.node, v, ipath, spath, errors);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          }
          continue;
        }
      }
    }
  }
  const _bind$6 = kw.all_of;
  if (_bind$6.$tag === 1) {
    const _Some = _bind$6;
    const _list = _Some._0;
    const _bind$7 = _list.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$7) {
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1480);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
        _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _M0MPC15array5Array2atGRPB4JsonE(_list, i).node, v, ipath, spath, errors);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind$7 = kw.any_of;
  if (_bind$7.$tag === 1) {
    const _Some = _bind$7;
    const _list = _Some._0;
    let matched = false;
    const _bind$8 = _list.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$8) {
        const sub = [];
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1481);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
        const ok = _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _M0MPC15array5Array2atGRPB4JsonE(_list, i).node, v, ipath, spath, sub);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        if (ok) {
          matched = true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!matched) {
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("anyOf", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, "must match a schema in anyOf", "必须匹配 anyOf 中的至少一个模式")));
    }
  }
  const _bind$8 = kw.one_of;
  if (_bind$8.$tag === 1) {
    const _Some = _bind$8;
    const _list = _Some._0;
    let pass_count = 0;
    const _bind$9 = _list.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$9) {
        const sub = [];
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1482);
        _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
        const ok = _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _M0MPC15array5Array2atGRPB4JsonE(_list, i).node, v, ipath, spath, sub);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
        if (ok) {
          pass_count = pass_count + 1 | 0;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!(pass_count === 1)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(49);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "must match exactly one schema in oneOf (matched ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, pass_count);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
      const _tmp$2 = _string_builder.val;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(69);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "必须且只能匹配 oneOf 中的一个模式（实际匹配 ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, pass_count);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " 个）");
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("oneOf", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$2, _string_builder$2.val)));
    }
  }
  const _bind$9 = kw.not_;
  if (_bind$9 === undefined) {
  } else {
    const _Some = _bind$9;
    const _n = _Some;
    const sub = [];
    _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1483);
    const ok = _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _n.node, v, ipath, spath, sub);
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
    if (ok) {
      _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema3err("not", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, "must NOT be valid", "不能匹配 not 模式")));
    }
  }
  const _bind$10 = kw.if_;
  if (_bind$10 === undefined) {
  } else {
    const _Some = _bind$10;
    const _i = _Some;
    const sub = [];
    _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1484);
    const ok = _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _i.node, v, ipath, spath, sub);
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
    if (ok) {
      const _bind$11 = kw.then_;
      if (_bind$11 === undefined) {
      } else {
        const _Some$2 = _bind$11;
        const _t = _Some$2;
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1485);
        _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _t.node, v, ipath, spath, errors);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
      }
    } else {
      const _bind$11 = kw.else_;
      if (_bind$11 === undefined) {
      } else {
        const _Some$2 = _bind$11;
        const _e = _Some$2;
        _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1486);
        _M0FP311QuietlyChan10moonschema6schema14validate__node(root, _e.node, v, ipath, spath, errors);
        _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
      }
    }
  }
  const _bind$11 = kw.rules;
  if (_bind$11.$tag === 1) {
    const _Some = _bind$11;
    const _exprs = _Some._0;
    const _bind$12 = kw.rule_srcs;
    if (_bind$12.$tag === 1) {
      const _Some$2 = _bind$12;
      const _srcs = _Some$2._0;
      const _bind$13 = _exprs.length;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _bind$13) {
          if (!_M0FP311QuietlyChan10moonschema5rules11rule__holds(_M0MPC15array5Array2atGRPB4JsonE(_exprs, i), v)) {
            _M0MPC15array5Array4pushGRPB4JsonE(spath, _M0FP311QuietlyChan10moonschema6schema18validate__keywordsN6constrS1487);
            _M0MPC15array5Array4pushGRPB4JsonE(spath, new _M0DTP311QuietlyChan10moonschema6schema7PathTok7PTIndex(i));
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "rule \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGRPB4JsonE(_srcs, i));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" is not satisfied");
            const _tmp$2 = _string_builder.val;
            const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "规则 \"");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0MPC15array5Array2atGRPB4JsonE(_srcs, i));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" 未满足");
            _M0MPC15array5Array4pushGRPB4JsonE(errors, _M0FP311QuietlyChan10moonschema6schema13err__no__leaf("x-rules", ipath, spath, _M0FP311QuietlyChan10moonschema6schema2tr(loc, _tmp$2, _string_builder$2.val)));
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(spath);
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return errors.length === start_len;
}
function _M0IP311QuietlyChan10moonschema6schema12CompileErrorPB4Show6output(self, logger) {
  if (self.$tag === 6) {
    const _InvalidSchema = self;
    const _path = _InvalidSchema._0;
    const _reason = _InvalidSchema._1;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid schema at ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _path);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _reason);
    logger.method_table.method_0(logger.self, _string_builder.val);
    return;
  } else {
    const _UnsupportedKeyword = self;
    const _path = _UnsupportedKeyword._0;
    const _kw = _UnsupportedKeyword._1;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(40);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "unsupported keyword \"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _kw);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" at ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _path);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (strict mode)");
    logger.method_table.method_0(logger.self, _string_builder.val);
    return;
  }
}
function _M0MP311QuietlyChan10moonschema6schema14CompileOptions11new_2einner(strict, assert_format, locale) {
  return new _M0TP311QuietlyChan10moonschema6schema14CompileOptions(strict, assert_format, locale);
}
function _M0MP311QuietlyChan10moonschema6schema14CompileOptions3new(strict$46$opt, assert_format$46$opt, locale$46$opt) {
  const strict = strict$46$opt === -1 ? true : strict$46$opt;
  const assert_format = assert_format$46$opt === -1 ? false : assert_format$46$opt;
  let locale;
  if (locale$46$opt === undefined) {
    locale = 0;
  } else {
    const _Some = locale$46$opt;
    locale = _Some;
  }
  return _M0MP311QuietlyChan10moonschema6schema14CompileOptions11new_2einner(strict, assert_format, locale);
}
function _M0MP311QuietlyChan10moonschema6schema6Schema8validate(self, instance) {
  const errors = [];
  _M0FP311QuietlyChan10moonschema6schema14validate__node(self, self.node, instance, [], [_M0MP311QuietlyChan10moonschema6schema6Schema8validateN6constrS1488], errors);
  return errors;
}
function _M0MP311QuietlyChan10moonschema6schema6Schema5check(self, instance) {
  const _p = _M0MP311QuietlyChan10moonschema6schema6Schema8validate(self, instance);
  return _p.length === 0;
}
function _M0FP311QuietlyChan10moonschema6schema15compile_2einner(schema, options) {
  const _tmp = options.strict;
  const _tmp$2 = options.assert_format;
  const _tmp$3 = options.locale;
  const _bind$2 = [];
  const ctx = new _M0TP311QuietlyChan10moonschema6schema3Ctx(schema, _tmp, _tmp$2, _tmp$3, _M0MPB3Map3MapGsRP311QuietlyChan10moonschema6schema6SchemaE(new _M0TPB9ArrayViewGUsRP311QuietlyChan10moonschema6schema6SchemaEE(_bind$2, 0, 0), _M0FP311QuietlyChan10moonschema6schema15compile_2einnerN6constrS1489));
  const _bind$3 = _M0FP311QuietlyChan10moonschema6schema13compile__node(schema, ctx, ["#"]);
  let node;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    node = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGRP311QuietlyChan10moonschema6schema6SchemaRP311QuietlyChan10moonschema6schema12CompileErrorE2Ok(new _M0TP311QuietlyChan10moonschema6schema6Schema(node, ctx));
}
function _M0FP311QuietlyChan10moonschema6schema22fix__integer__overflow(v) {
  switch (v.$tag) {
    case 3: {
      const _Number = v;
      const _n = _Number._0;
      const _repr = _Number._1;
      const broken = _n !== _n || _n !== 0 && _n / 2 === _n;
      if (!broken) {
        return v;
      }
      let s;
      if (_repr === undefined) {
        return v;
      } else {
        const _Some = _repr;
        s = _Some;
      }
      let fixed;
      let _try_err;
      _L: {
        _L$2: {
          const _bind$2 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(s, 0, s.length));
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err = _err._0;
            break _L$2;
          }
          fixed = new _M0DTPC16option6OptionGdE4Some(_tmp);
          break _L;
        }
        fixed = _M0DTPC16option6OptionGdE4None__;
      }
      if (fixed.$tag === 1) {
        const _Some = fixed;
        const _d = _Some._0;
        const _p = s;
        return new _M0DTPB4Json6Number(_d, _p);
      } else {
        return v;
      }
    }
    case 5: {
      const _Array = v;
      const _arr = _Array._0;
      const out = [];
      const _bind$2 = _arr.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const x = _arr[_];
          _M0MPC15array5Array4pushGRPB4JsonE(out, _M0FP311QuietlyChan10moonschema6schema22fix__integer__overflow(x));
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPB4Json5Array(out);
    }
    case 6: {
      const _Object = v;
      const _m = _Object._0;
      const _bind$3 = [];
      const out$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 0), _M0FP311QuietlyChan10moonschema6schema22fix__integer__overflowN6constrS1490);
      const _it = _M0MPB3Map5iter2GsRPB4JsonE(_m);
      while (true) {
        const _bind$4 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
        if (_bind$4 === undefined) {
          break;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _k = _x._0;
          const _x$2 = _x._1;
          _M0MPB3Map3setGsRPB4JsonE(out$2, _k, _M0FP311QuietlyChan10moonschema6schema22fix__integer__overflow(_x$2));
          continue;
        }
      }
      return new _M0DTPB4Json6Object(out$2);
    }
    default: {
      return v;
    }
  }
}
function _M0FP311QuietlyChan10moonschema6schema5parse(text) {
  const _bind$2 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(text, 0, text.length), 1024);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FP311QuietlyChan10moonschema6schema22fix__integer__overflow(_tmp));
}
function _M0FP211QuietlyChan10moonschema5parse(text) {
  return _M0FP311QuietlyChan10moonschema6schema5parse(text);
}
function _M0FP211QuietlyChan10moonschema15compile_2einner(schema, options) {
  return _M0FP311QuietlyChan10moonschema6schema15compile_2einner(schema, options);
}
function _M0FP211QuietlyChan10moonschema7compile(schema, options$46$opt) {
  let options;
  if (options$46$opt === undefined) {
    options = _M0MP311QuietlyChan10moonschema6schema14CompileOptions3new(-1, -1, undefined);
  } else {
    const _Some = options$46$opt;
    options = _Some;
  }
  return _M0FP211QuietlyChan10moonschema15compile_2einner(schema, options);
}
function _M0FP311QuietlyChan10moonschema10playground11wrap__error(field, value_json) {
  const b = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(b, "{\"valid\": false, \"");
  _M0IPB13StringBuilderPB6Logger13write__string(b, field);
  _M0IPB13StringBuilderPB6Logger13write__string(b, "\": ");
  _M0IPB13StringBuilderPB6Logger13write__string(b, value_json);
  _M0IPB13StringBuilderPB6Logger13write__string(b, "}");
  return b.val;
}
function _M0FP311QuietlyChan10moonschema10playground14validate__json(schema_text, data_text) {
  let schema;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP211QuietlyChan10moonschema5parse(schema_text);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        schema = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder13write__objectGRPC14json10ParseErrorE(_string_builder, _try_err);
    const _p = _string_builder.val;
    return _M0FP311QuietlyChan10moonschema10playground11wrap__error("schema_error", _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6String(_p), false, 0, undefined));
  }
  let v;
  let _try_err$2;
  _L$2: {
    _L$3: {
      const _bind$2 = _M0FP211QuietlyChan10moonschema7compile(schema, undefined);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        v = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err$2 = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder13write__objectGRP311QuietlyChan10moonschema6schema12CompileErrorE(_string_builder, _try_err$2);
    const _p = _string_builder.val;
    return _M0FP311QuietlyChan10moonschema10playground11wrap__error("schema_error", _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6String(_p), false, 0, undefined));
  }
  let data;
  let _try_err$3;
  _L$3: {
    _L$4: {
      const _bind$2 = _M0FP211QuietlyChan10moonschema5parse(data_text);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        data = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err$3 = _err._0;
        break _L$4;
      }
      break _L$3;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder13write__objectGRPC14json10ParseErrorE(_string_builder, _try_err$3);
    const _p = _string_builder.val;
    return _M0FP311QuietlyChan10moonschema10playground11wrap__error("data_parse_error", _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6String(_p), false, 0, undefined));
  }
  const errors = _M0MP311QuietlyChan10moonschema6schema6Schema8validate(v, data);
  const err_json = [];
  const _bind$2 = errors.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = errors[_];
      const _p = e.keyword;
      const _tmp$2 = { _0: "keyword", _1: new _M0DTPB4Json6String(_p) };
      const _p$2 = e.instance_path;
      const _tmp$3 = { _0: "instance_path", _1: new _M0DTPB4Json6String(_p$2) };
      const _p$3 = e.schema_path;
      const _tmp$4 = { _0: "schema_path", _1: new _M0DTPB4Json6String(_p$3) };
      const _p$4 = e.message;
      const _bind$3 = [_tmp$2, _tmp$3, _tmp$4, { _0: "message", _1: new _M0DTPB4Json6String(_p$4) }];
      const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 4), undefined);
      _M0MPC15array5Array4pushGRPB4JsonE(err_json, new _M0DTPB4Json6Object(_p$5));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p = errors.length === 0;
  const _bind$3 = [{ _0: "valid", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ }, { _0: "errors", _1: new _M0DTPB4Json5Array(err_json) }];
  const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 2), undefined);
  return _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6Object(_p$2), false, 0, undefined);
}
function _M0FP311QuietlyChan10moonschema10playground7version() {
  return "0.1.0";
}
function _M0FP311QuietlyChan10moonschema10playground15compile__schema(schema_text) {
  let schema;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP211QuietlyChan10moonschema5parse(schema_text);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        schema = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return -1;
  }
  let v;
  let _try_err$2;
  _L$2: {
    _L$3: {
      const _bind$2 = _M0FP211QuietlyChan10moonschema7compile(schema, undefined);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        v = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err$2 = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    return -1;
  }
  const h = _M0FP311QuietlyChan10moonschema10playground12next__handle.val;
  _M0FP311QuietlyChan10moonschema10playground12next__handle.val = _M0FP311QuietlyChan10moonschema10playground12next__handle.val + 1 | 0;
  _M0MPB3Map3setGiRP311QuietlyChan10moonschema6schema6SchemaE(_M0FP311QuietlyChan10moonschema10playground8registry, h, v);
  return h;
}
function _M0FP311QuietlyChan10moonschema10playground14validate__with(handle, data_text) {
  const _bind$2 = _M0MPB3Map3getGiRP311QuietlyChan10moonschema6schema6SchemaE(_M0FP311QuietlyChan10moonschema10playground8registry, handle);
  let v;
  if (_bind$2 === undefined) {
    return "{\"error\":\"bad handle\"}";
  } else {
    const _Some = _bind$2;
    v = _Some;
  }
  let data;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = _M0FP211QuietlyChan10moonschema5parse(data_text);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        data = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder13write__objectGRPC14json10ParseErrorE(_string_builder, _try_err);
    const _p = _string_builder.val;
    return _M0FP311QuietlyChan10moonschema10playground11wrap__error("data_parse_error", _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6String(_p), false, 0, undefined));
  }
  const errors = _M0MP311QuietlyChan10moonschema6schema6Schema8validate(v, data);
  const err_json = [];
  const _bind$3 = errors.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const e = errors[_];
      const _p = e.keyword;
      const _tmp$2 = { _0: "keyword", _1: new _M0DTPB4Json6String(_p) };
      const _p$2 = e.instance_path;
      const _tmp$3 = { _0: "instance_path", _1: new _M0DTPB4Json6String(_p$2) };
      const _p$3 = e.schema_path;
      const _tmp$4 = { _0: "schema_path", _1: new _M0DTPB4Json6String(_p$3) };
      const _p$4 = e.message;
      const _bind$4 = [_tmp$2, _tmp$3, _tmp$4, { _0: "message", _1: new _M0DTPB4Json6String(_p$4) }];
      const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 4), undefined);
      _M0MPC15array5Array4pushGRPB4JsonE(err_json, new _M0DTPB4Json6Object(_p$5));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p = errors.length === 0;
  const _bind$4 = [{ _0: "valid", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ }, { _0: "errors", _1: new _M0DTPB4Json5Array(err_json) }];
  const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 2), undefined);
  return _M0MPC14json4Json17stringify_2einner(new _M0DTPB4Json6Object(_p$2), false, 0, undefined);
}
function _M0FP311QuietlyChan10moonschema10playground11check__with(handle, data_text) {
  const _bind$2 = _M0MPB3Map3getGiRP311QuietlyChan10moonschema6schema6SchemaE(_M0FP311QuietlyChan10moonschema10playground8registry, handle);
  let v;
  if (_bind$2 === undefined) {
    return false;
  } else {
    const _Some = _bind$2;
    v = _Some;
  }
  let data;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = _M0FP211QuietlyChan10moonschema5parse(data_text);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        data = _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return false;
  }
  return _M0MP311QuietlyChan10moonschema6schema6Schema5check(v, data);
}
export { _M0FP311QuietlyChan10moonschema10playground14validate__json as validate_json, _M0FP311QuietlyChan10moonschema10playground7version as version, _M0FP311QuietlyChan10moonschema10playground15compile__schema as compile_schema, _M0FP311QuietlyChan10moonschema10playground14validate__with as validate_with, _M0FP311QuietlyChan10moonschema10playground11check__with as check_with }
