const buf = new ArrayBuffer(1)
const view = new DataView(buf);

view.setInt8(0, 1.5);
console.log(view.getUint8(0));

view.setUint8(0, [4])
console.log(view.getUint8(0));

//说明：没搞懂设置'f', 输出为0
view.setUint8(0, 'f')
console.log(view.getUint8(0));

// view.setUint8(0, Symbol())
