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
	if (path === '/') {
		return true;
	}

	if (path === this.path) {
		return true;
	}

	return false;
}

Layer.prototype.handleRequest = function (req, res, out) {
	try {
		this.handler(req, res, out);
	} catch (error) {
		out(error);
	}
}

module.exports = Layer;
