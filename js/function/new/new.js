/**
 * 创建日期: 2022-06-18
 * 文件名称：new.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

exports.mockNew = function (fn) {
	const constructor = fn;
	const args = Array.from(arguments).slice(1);

	const obj = {};
	//! 说明：是对象上的原型的隐藏属性__proto__，而不是obj.prototype, 对象实例上是无prototype属性的，只有方法上有
	obj.__proto__ = constructor.prototype;

	/* const bindFn = constructor.bind(obj, ...args);
	const ret = bindFn(); */
	//! 简化代码：通过apply可直接调用函数 + 数组参数
	const ret = constructor.apply(obj, args);

	//! 说明：如果构造方法返回了对象就用这个对象，没有则用obj
	return ret instanceof Object ? ret : obj;
}
