const buf = new ArrayBuffer(8);
const view = new DataView(buf);

view.setInt8(0, 1.5);
console.log(view.getUint8(0));
//输出：1

view.setUint8(0, [4]);
console.log(view.getUint8(0));
//输出：4

view.setUint8(0, "f");
console.log(view.getUint8(0));
//! 输出：0 (没搞懂设置'f')

//! 说明：报错, 不能设置symbol
// view.setUint8(0, Symbol())

let a = "'b'";

