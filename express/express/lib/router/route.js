/**
 * 创建日期: 2022-08-24
 * 文件名称：route.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const methods = require("methods");
const Layer = require("./layer");

function Route() {
	this.stack = [];
	//存放此路由内注册的请求方法
	this.methods = {};
}

methods.forEach(method => {
	Route.prototype[method] = function (handers) {
		handers = Array.isArray(handers) ? handers : [handers];
		this.methods[method] = true;

		handers.forEach(handler => {
			let layer = new Layer(null, handler);
			//说明：具体请求，需要匹配path和method才处理
			layer.method = method;
			this.stack.push(layer);
		});
	}
});

Route.prototype.dispatch = function (req, res, out) {
	let index = 0;
	let next = () => {
		//TODO: 处理函数抛出错误来为考虑怎么处理?
		if (index >= this.stack.length) {
			out();
			return;
		}

		let layer = this.stack[index++];
		if (layer.method === req.method.toLowerCase()) {
			layer.handleRequest(req, res, next);
		} else {
			next();
		}
	}
	next();
}

module.exports = Route;
