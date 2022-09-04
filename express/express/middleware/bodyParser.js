/**
 * 创建日期: 2022-09-04
 * 文件名称：bodyParser.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const qs = require("query-string");

module.exports = {
	json: function () {
		return (req, res, next) => {
			if (req.headers['content-type'] !== 'application/json') {
				return next();
			}

			let data = [];
			req.on("data", (chunk) => {
				data.push(chunk);
			});

			req.on("end", () => {
				let jsonStr = Buffer.concat(data).toString();
				req.body = JSON.parse(jsonStr);
				next();
			});
		}
	},
	urlencoded: function () {
		return (req, res, next) => {
			if (req.headers['content-type'] !== 'application/x-www-form-urlencoded') {
				return next();
			}

			let data = [];
			req.on("data", (chunk) => {
				data.push(chunk);
			});

			req.on("end", () => {
				let urlEncodeStr = Buffer.concat(data).toString();
				req.body = qs.parse(urlEncodeStr);
				next();
			});
		}
	}
};
