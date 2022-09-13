/**
 * 创建日期: 2022-09-12
 * 文件名称：bodyparser.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const qs = require("qs");

module.exports = function () {
	return async (ctx, next) => {
		return new Promise((resolve) => {
			let { req } = ctx;
			let data = [];
			req.on("data", (chunk) => {
				data.push(chunk);
			});
			req.on("end", async () => {
				let type = req.headers["content-type"];
				let buffer = Buffer.concat(data);
				if (type === "application/json") {
					ctx.request.body = JSON.parse(buffer.toString());
				}
				else if (type === "application/x-www-form-urlencoded") {
					ctx.request.body = qs.parse(buffer.toString());
				}
				resolve();
				await next();
			});
		});
	}
}
