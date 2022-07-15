/**
 * 创建日期: 2022-07-15
 * 文件名称：TypeArray.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */
const { autoRun } = require('../common');
const { Buffer } = require("buffer");

autoRun("1. buffer to typeArray", () => {
	const buf = Buffer.from([1, 2, 3, 4]);
	const uint32array = new Uint32Array(buf);

	console.log("buf:", buf);
	console.log("uint32array:", uint32array);
});

autoRun("2. ", () => {
	const arr = new Uint16Array(2);
	arr[0] = 5000;
	arr[1] = 4000;

	console.log("arr.length 类型数组元素个数:", arr.length);

	console.log("arr.byteLength 字节长度:", arr.byteLength);

	// 复制 `arr` 的内容。
	const buf1 = Buffer.from(arr);
	console.log(buf1);
	// 打印: <Buffer 88 a0>

	// 与 `arr` 共享内存。
	const buf2 = Buffer.from(arr.buffer);

	console.log(buf2);
	// 打印: <Buffer 88 13 a0 0f>
});
