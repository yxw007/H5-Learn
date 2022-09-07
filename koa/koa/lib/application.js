/**
 * 创建日期: 2022-09-06
 * 文件名称：application.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");
class Application extends Emitter {
	constructor() {
		super();
		//! 说明：避免多应用共享context、request、response的问题
		this.context = Object.create(context);
		this.request = Object.create(request);
		this.response = Object.create(response);
		this.middleware = [];
	}
	createContext(req, res) {
		//! 说明：避免应用多请求共享context、request、response的问题
		let context = Object.create(this.context);
		let request = Object.create(this.request);
		let response = Object.create(this.response);
		context.request = request;
		context.req = request.req = req;

		context.response = response;
		context.res = response.res = res;

		return context;
	}
	callback() {
		//! 说明：避免每个请求都compse影响性能，所以通过高阶函数返回一个fn
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
		return function (ctx) {
			const dispatch = (index) => {
				if (index >= middlewares.length) {
					return Promise.resolve();
				}

				let fn = middlewares[index];
				try {
					return Promise.resolve(fn(ctx, dispatch.bind(null, index + 1)));
				} catch (error) {
					return Promise.reject(error);
				}
			}
			return dispatch(0);
		}
	}
	handleRequest(ctx, fnMiddleware) {
		const res = ctx.res;
		res.statusCode = 404;

		const onError = (error) => {
			//TODO: 处理错误
		}

		const handleResponse = () => {
			//TODO: 处理返回结果
			//TOOD: 修改到此处?
		}

		fnMiddleware(ctx).then(handleResponse).catch(onError);
	}
}

module.exports = Application;
