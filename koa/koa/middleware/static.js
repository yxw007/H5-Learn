/**
 * 创建日期: 2022-09-12
 * 文件名称：static.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const path = require("path");
const fs = require("fs");
const mine = require("mime");
const util = require("util");
const stat = util.promisify(fs.stat);

module.exports = function (dir) {
	return async (ctx, next) => {
		let pathname = path.join(dir, ctx.path);
		try {
			let stats = await stat(pathname);
			if (stats.isFile()) {
				ctx.res.setHeader("Content-Type", mine.getType(pathname));
				ctx.body = fs.createReadStream(pathname);
			} else {
				return next();
			}
		} catch (error) {
			return next(error);
		}
	}
}
