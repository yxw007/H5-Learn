/**
 * 创建日期: 2022-06-12
 * 文件名称：call.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

Function.prototype.myCall = function (context) {
	//! 说明：node环境根作用域this 就是globalthis, browser 环境就是window
	if (context) {
		//! 参数：可能不为对象，所以需要利用Object包裹一层
		if (typeof context !== 'object') {
			context = Object(context);
		}
	} else {
		context = globalThis;
	}

	//! 由于第一个参数为context，后面的才为调用函数参数，所以需要slice(1)
	//! 由于arguments参数为对象，所以需要利用Array.from 将其转为数组
	const args = Array.from(arguments).slice(1);

	//! f1 调用的myCall方法, 此时this就是调用的函数本身
	context.fn = this;
	let ret = context.fn(...args);


	//! 说明：不应该改变了this指向，就给调用方法的对象添加一个方法属性，所以调用完后需要删除
	delete context.fn;

	return ret;
}

