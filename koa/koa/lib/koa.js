/**
 * 创建日期: 2022-09-06
 * 文件名称：koa.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

let http = require("http");

class Koa {
	constructor() {
		this.middleware = [];
	}
	use(fn) {
		this.middleware.push(fn);
	}
	listen(port) {
		let middleware = this.middleware;
		let server = http.createServer((req, res) => {
			let ctx = { req, res };
			function dispatch(idx) {
				middleware[idx](ctx, () => dispatch(idx + 1));
			}
			dispatch(0);
		});
		server.listen(port);
	}
}

module.exports = Koa;
