/**
 * 创建日期: 2022-09-12
 * 文件名称：bodyparser.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

module.exports = function () {
	return async (ctx, next) => {
		return new Promise((resolve) => {
			let { req } = ctx.req;

			let data = [];
			req.on("data", (chunk) => {
				data.push(chunk);
			});
			req.on("end", () => {
				//! TOOD: 修改到此处，需要根据类型来判断解析成什么类型的参数
			});
		});
	}
}
