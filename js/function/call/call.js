/**
 * 创建日期: 2022-06-12
 * 文件名称：call.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

/* 学习到此处? */
Function.prototype.call = function (context) {
	context = context ? Object.create(context) : globalThis; //! node环境根作用域this 就是globalthis, browser 环境就是window
	context.fn = this;
	// console.log(arguments);

	let args = [];
	for (let i = 1; i < arguments.length; i++) {
		args.push('arguments[' + i + ']');
	}

	const ret = eval('context.fn(' + args + ')');
	delete context.fn;

	return ret;
}

function f1() {
	console.log("f1, this:", this, "arguments:", arguments);
}

f1.call();


