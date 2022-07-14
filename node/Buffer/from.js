/**
 * 创建日期: 2022-07-14
 * 文件名称：base.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：Buffer 基本使用
 */

const { Buffer } = require("buffer");
const { autoRun } = require("../common");


autoRun("1.声明长度为10字节的缓冲区,默认用0填充", () => {
	const buf = Buffer.alloc(10);
	console.log(buf);
});

autoRun("2.声明长度为10字节的缓冲区,采用1填充", () => {
	const buf = Buffer.alloc(10, 1);
	console.log(buf);
	//输出：<Buffer 01 01 01 01 01 01 01 01 01 01>
});

autoRun("3. 创建长度为 10 的未初始化的缓冲区", () => {
	// 比Buffer.alloc()快，但是可能包含旧数据，需要fill()、write()填充旧数据
	const buf = Buffer.allocUnsafe(10);
	console.log(buf);
});

autoRun("4. 将数组转成buffer,字节数=元素个数", () => {
	const buf = Buffer.from([1, 2, 3]);
	console.log(buf);
});


autoRun("5. 将数组转成buffer, 每个元素限定在1个字节的取值范围", () => {
	//所有元素都使用 `(value & 255)` 截断以符合范围 0–255。
	const buf = Buffer.from([257, 257.5, -255, '1']);
	console.log(buf);
});

autoRun("6. 将字符串转成buffer,每个字符1个字节", () => {
	const buff = Buffer.from('tést');
	console.log(buff);
});

autoRun("7. 将字符串转成buffer,latin1: 每个字符对应1个字节, 不合服规范字符将被截断", () => {
	const buff = Buffer.from('啊', 'latin1');
	console.log(buff);
});

autoRun("8. 编码转换, from 第2参数未传编码格式, 默认: utf8", () => {
	const buf = Buffer.from('hello world', 'utf8');
	console.log("hex:", buf.toString('hex'));
	console.log("base64:", buf.toString('base64'));
});

