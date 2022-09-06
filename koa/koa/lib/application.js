/**
 * 创建日期: 2022-09-06
 * 文件名称：application.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const http = require("http");

class Application extends Emitter {
	constructor() {
		super();
		this.middleware = [];
	}
	callback() {
		const fn = compose(this.middleware);
		const handleRequest = (req, res) => {
			const ctx = this.createContext(req, res);
			return this.handleRequest(ctx, fn);
		}
		return handleRequest;
	}
	use(middleware) {
		this.middleware.push(middleware);
	}
	listen(...args) {
		const server = http.createServer(this.callback());
		return server.listen(...args);
	}
	compose(middlewares) {
		/* return middlewares.reduce((pre, cur) => {
			return pre.then(Promise.resolve(cur))
		}, Promise.resolve()) */
		//TODO: 修改到此处?
	}
	handleRequest(ctx, fn) {

	}
}

module.exports = Application;
