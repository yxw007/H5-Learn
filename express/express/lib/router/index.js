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
const proto = Object.create(null);

function Router() {
	//! 伪造成中间件函数，express.Router()又可以承当子路由处理
	let middleware = (req, res, next) => {
		middleware.handleRequest(req, res, next);
	};
	//! 说明：让middleware继承proto原型上的属性和方法
	Object.setPrototypeOf(middleware, proto);
	middleware.stack = [];
	return middleware;
}

proto.use = function (path, ...handlers) {
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
	proto[method] = function (path, handers) {
		let route = new Route();
		route[method](handers);

		let layer = new Layer(path, route.dispatch.bind(route));
		layer.route = route;

		this.stack.push(layer);
	}
});

proto.handleRequest = function (req, res, out) {
	const { pathname, query } = url.parse(req.url, true);
	console.log("handleRequest:---------->");
	console.log("pathname:", pathname);
	console.log("query:", query);

	let index = 0;
	//! 中间件路径前缀
	let removed = '';
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
				if (layer.isMiddleWare()) {
					//! 说明：如果layer.path 根路径就无需去前缀，否则需要去掉前缀 原因：二级路径是需要父路由path去掉，然后进内层匹配子路由的
					removed = layer.path === '/' ? "" : layer.path;

					//! 说明：如果是中间件路由，需要把父级路由path去掉
					req.url = req.url.slice(removed.length) || "/";

					layer.handleRequest(req, res, next);
				} else {
					if (layer.isRoute() && layer.matchMethod(req.method.toLowerCase())) {
						layer.handleRequest(req, res, next);
					} else {
						next();
					}
				}
			}
		} else {
			next(error);
		}
	}
	next();
}

module.exports = Router;
