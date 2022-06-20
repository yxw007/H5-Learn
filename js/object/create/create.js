/**
 * 创建日期: 2022-06-20
 * 文件名称：create.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

exports.myCreate1 = function (proto, propertiesObject) {
	if (proto != null && !(proto instanceof Object)) {
		throw "TypeError"
	}

	function Fn() {
	}

	Fn.prototype = proto;
	let obj = new Fn();

	if (propertiesObject !== undefined) {
		Object.defineProperties(obj, propertiesObject)
	}

	if (proto === null) {
		obj.__proto__ = null
	}

	return obj;
}

exports.myCreate = function (proto, propertiesObject) {
	if (proto != null && !(proto instanceof Object)) {
		throw "TypeError"
	}

	let obj = {};
	obj.__proto__ = proto;

	if (propertiesObject !== undefined) {
		Object.defineProperties(obj, propertiesObject)
	}

	return obj;
}
