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
const statuses = require('statuses')
const mime = require("mime");
const fs = require("fs");
const url = require("url");

function Application() {
	this.router = new Router();
	this.use((req, res, next) => {
		const { pathname, query } = url.parse(req.url, true);
		req.path = pathname;
		req.query = query;
		res.sendFile = function (path) {
			res.setHeader("Content-Type", mime.getType(path) + ";charset=utf-8");
			fs.createReadStream(path).pipe(res);
		}
		res.send = function (val) {
			if (typeof val === 'string' || Buffer.isBuffer(val)) {
				res.end(val);
			} else if (typeof val === 'number') {
				res.statusCode = val;
				res.end(statuses.message[val]);
			} else if (typeof val === 'object') {
				res.setHeader("Content-Type", mime.getType("json"));
				res.end(JSON.stringify(val));
			}
		}
		next();
	})
}

methods.forEach(method => {
	Application.prototype[method] = function (path, handlers) {
		this.router[method](path, handlers);
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
