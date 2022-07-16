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

autoRun("2. copy typeArray to other buffer", () => {
	const arr = new Uint16Array(2);
	arr[0] = 6;
	arr[1] = 8;
	console.log("arr:", arr);
	console.log("arr.length 类型数组元素个数:", arr.length);
	console.log("arr.byteLength 字节长度:", arr.byteLength);

	//1.复制arr全部内容, 会用arr的length 创建buffer个字节
	const buf1 = Buffer.from(arr);
	console.log("buf1:", buf1);
	// 输出: <Buffer 88 a0>

	//2.复制arr内容，从偏移byteOffset位置开始copy至最后
	const buf2 = Buffer.from(arr, 2);
	console.log("buf2:", buf2);

	//3.复制arr内容,从偏移byteOffset位置开始copy length个字节内容
	const buf3 = Buffer.from(arr, 2, 1);
	console.log("buf3:", buf3);

	console.log("arr:", arr);
	console.log("buf1:", buf1);
	console.log("buf2:", buf2);
	console.log("buf3:", buf3);
});

autoRun("3.使用Buffer.from(buf.buffer)会内存共享", () => {
	const buf = Buffer.from([1, 2, 3, 4]);
	console.log("buf:", buf);
	console.log("buf.length:", buf.length);

	//TODO: 学习到此处?
	//! 为啥buf2是5c? 使用的默认内存空间数据
	const buf2 = Buffer.from(buf.buffer, 0, 1);
	console.log("buf2:", buf2);

	const buf3 = Buffer.from(buf, 2);
	console.log("buf3:", buf3);
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
