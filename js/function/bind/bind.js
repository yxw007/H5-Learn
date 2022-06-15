/**
 * 创建日期: 2022-06-14
 * 文件名称：bind.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

Function.prototype.myBind = function (context) {
	if (context) {
		if (typeof context !== 'object') {
			context = Object(context);
		}
	} else {
		context = globalThis;
	}

	let originArgs = Array.from(arguments).slice(1);
	let originFn = this;

	function innerFn() {
		//! 注意：此处slice(0) 而不是slice(1), 因为不像bind函数的调用，前面有对象。所以此处为slice(0)
		let args = Array.from(arguments).slice(0);
		if (this instanceof innerFn) {
			context = this;
		}
		context.fn = originFn;
		let ret = context.fn(...originArgs.concat(args));
		delete context.fn;
		return ret;
	}

	return innerFn;
}
