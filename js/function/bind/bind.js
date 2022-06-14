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
	context.fn = this;

	return function () {
		let args = Array.from(arguments).slice(1);
		let ret = context.fn(...originArgs.concat(args));
		delete context.fn;
		return ret;
	};
}
