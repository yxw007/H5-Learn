/**
 * 创建日期: 2022-06-13
 * 文件名称：apply.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

Function.prototype.myApply = function (context) {
	if (context) {
		if (typeof context !== 'object') {
			context = Object(context);
		}
	} else {
		context = globalThis;
	}

	context.fn = this;
	const args = arguments[1] ?? [];
	const ret = context.fn(...args);
	delete context.fn;

	return ret;
}
