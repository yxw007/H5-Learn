/**
 * 创建日期: 2022-08-24
 * 文件名称：layer.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */
const { pathToRegexp } = require('path-to-regexp')

function Layer(path, handler, regexpOption = { sensitive: false, strict: false, end: false }) {
	this.path = path;
	//! 说明：getUsers/:province/:city, keys 匹配记录[{name:province,...},{name:city,...}]
	this.keys = [];
	//! 说明：添加正则匹配参数，避免严格匹配导致匹配不到记录问题  比如：/getUsers/:provice  访问：/getUsers/gz/sz 匹配不到记录问题
	this.regex = pathToRegexp(path, this.keys, regexpOption);
	this.params = {};

	this.handler = handler;
}

Layer.prototype.match = function (path) {
	if (path === this.path) {
		return true;
	}

	let matches = path.match(this.regex);
	if (matches && matches.length >= 1) {//仅匹配路径
		if (matches.length >= 2) {
			//! 说明：getUsers/gz/sz 匹配到的值 value=["gz","sz"], 第一个匹配项为正则所以过滤掉
			let values = matches.slice(1);
			//! 将keys和values合并成对象放置params，提供给上层使用
			this.keys.reduce((pre, cur, index) => {
				return (pre[cur.name] = values[index], pre);
			}, this.params);
		}
		return true;
	}

	if (this.isMiddleWare()) {
		if (this.path === "/") {
			return true;
		} else {
			return path.startsWith(this.path + "/");
		}
	}

	return false;
}

Layer.prototype.matchMethod = function (method) {
	if (!this.route) {
		throw Error("occur logic error, please check layer and route relative code");
	}

	return this.route.methods[method];
}

Layer.prototype.isRoute = function () {
	return !!this.route;
}

Layer.prototype.isMiddleWare = function () {
	//! 说明：无route 就是中间件
	return !this.route;
}

Layer.prototype.isErrorMiddleWare = function () {
	//! 说明：中间件 && 处理函数参数为4个就是错误处理中间件
	return this.isMiddleWare() && this.handler.length === 4;
}

Layer.prototype.handleError = function (error, req, res, next) {
	this.handler(error, req, res, next);
}

Layer.prototype.handleRequest = function (req, res, out) {
	try {
		this.handler(req, res, out);
	} catch (error) {
		out(error);
	}
}

module.exports = Layer;
