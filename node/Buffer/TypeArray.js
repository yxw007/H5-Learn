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

	// 复制 `arr` 的内容, 会用arr的length 创建buffer个字节
	const buf1 = Buffer.from(arr);
	console.log("buf1:", buf1);
	// 打印: <Buffer 88 a0>

	//! 第2个参数，byteOffset 不生效，需要使用TypeArray.buffer 才可以
	const buf2 = Buffer.from(arr.buffer, 2);
	console.log("buf2:", buf2);

	const buf3 = Buffer.from(arr.buffer, 2, 1);
	console.log("buf3:", buf3);

	// 与 `arr` 共享内存。
	const buf4 = Buffer.from(arr.buffer);
	console.log(buf4);
	// 打印: <Buffer 88 13 a0 0f>
});

autoRun("3.", () => {
	const ab = [];
	for (let i = 0; i < 10; i++) {
		ab[i] = i + 1;
	}

	try {
		const buf = Buffer.from(ab);
		console.log("buf:", buf);
		console.log("buf.length:", buf.length);

		//! 为啥buf2是5c? 使用的默认内存空间数据  学习到此处：http://nodejs.cn/api-v16/buffer.html#static-method-bufferfromarraybuffer-byteoffset-length
		const buf2 = Buffer.from(buf.buffer, 0, 1);
		console.log("buf2:", buf2);

		const buf3 = Buffer.from(buf, 2);
		console.log("buf3:", buf3);
	} catch (error) {
		console.error(error);
	}
});


autoRun("4.修改共享内存值，测试变化", () => {
	const arrA = Uint8Array.from([0x63, 0x64, 0x65, 0x66]); // 4 个元素
	const arrB = new Uint8Array(arrA.buffer, 1, 2); // 2 个元素
	console.log(arrA.buffer === arrB.buffer); // true

	arrB[0] = 1;
	arrA[2] = 22;

	//! 说明：由于arrA和arrB 使用同一块空间，所以更改arrB位置元素，arrA对应元素也同步更新
	console.log(arrB[0]);
	console.log(arrA[1]);
	console.log("arrA:", arrA);
	console.log("arrB:", arrB);
});
