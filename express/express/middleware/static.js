/**
 * 创建日期: 2022-09-04
 * 文件名称：static.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const path = require("path");
const fs = require("fs");
const mime = require("mime");

module.exports = function (rootPath) {
	return function (req, res, next) {
		if (req.method !== 'GET' && req.method !== 'HEAD') {
			res.statusCode = 405
			res.setHeader('Allow', 'GET, HEAD')
			res.setHeader('Content-Length', '0')
			res.end()
			return;
		}

		let filePath = path.join(rootPath, req.path);
		fs.stat(filePath, (error, stat) => {
			if (error) {
				return next();
			}

			if (stat.isFile()) {
				res.setHeader("Content-Type", mime.getType(filePath) + ";charset=utf8");
				fs.createReadStream(filePath).pipe(res);
			} else {
				//TODO: 目录暂不处理
				next();
			}
		});
	}
}
