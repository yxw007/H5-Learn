/**
 * 创建日期: 2022-08-23
 * 文件名称：application.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */
const http = require("http");
const Router = require("./router");
const methods = require("methods");

function Application() {
	this.router = new Router();
}

methods.forEach(method => {
	Application.prototype[method] = function (path, handlers) {
		//TODO:
	}
});

/**
 * use 中间件函数
 * 说明：第一个参数可能是路径，也可能直接是处理函数
 */
Application.prototype.use = function () {
	this.router.use(...arguments);
}

Application.prototype.listen = function (port, callback) {
	let app = http.createServer((req, res) => {
		function done() {
			res.end(`Cannot ${req.method} ${req.url} Own`);
		}
		this.router.handleRequest(req, res, done);
	});
	app.listen(port, callback);
}

module.exports = Application;
