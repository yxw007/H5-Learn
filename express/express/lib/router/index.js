/**
 * 创建日期: 2022-08-23
 * 文件名称：router.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const url = require("url");
const methods = require("methods");
const Layer = require("./layer");
const Route = require("./route");

function Router() {
	this.stack = [];
}

Router.prototype.use = function (path, ...handlers) {
	if (typeof path !== 'string' && typeof path !== 'function') {
		throw new Error("params is invalid !");
	}
	//! 说明：如果是方法，说明未传路径就代表根路径/
	if (typeof path === 'function') {
		handlers.unshift(path);
		path = "/";
	}

	handlers.forEach(handler => {
		let layer = new Layer(path, handler);
		this.stack.push(layer);
	});
}

methods.forEach(method => {
	Router.prototype[method] = function (path, handers) {
		let route = new Route();
		route[method](handers);

		let layer = new Layer(path, route.dispatch.bind(route));
		layer.route = route;

		this.stack.push(layer);
	}
});

Router.prototype.handleRequest = function (req, res, out) {
	const { pathname, query } = url.parse(req.url, true);
	console.log("handleRequest:---------->");
	console.log("pathname:", pathname);
	console.log("query:", query);

	let index = 0;
	let next = (error) => {
		if (index >= this.stack.length) {
			out();
			return;
		}

		let layer = this.stack[index++];
		if (layer.match(pathname)) {
			if (error) {
				if (layer.isErrorMiddleWare()) {
					layer.handleError(error, req, res, next);
				} else {
					next(error);
				}
			} else {
				layer.handleRequest(req, res, next);
			}
		} else {
			next(error);
		}
	}
	next();
}

module.exports = Router;
