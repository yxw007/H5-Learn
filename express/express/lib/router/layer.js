/**
 * 创建日期: 2022-08-24
 * 文件名称：layer.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

function Layer(path, handler) {
	this.path = path;
	this.handler = handler;
}

Layer.prototype.match = function (path) {
	if (path === this.path) {
		return true;
	}

	if (this.isMiddleWare()) {
		if (this.path === "/") {
			return true;
		} else {
			return path.startsWith(this.path + "/");
		}
	} else {

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
