/**
 * 创建日期: 2022-08-23
 * 文件名称：router.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const url = require("url");

function Router() {
	this.stack = [];
}

Router.prototype.use = function () {
	//TODO:
}

Router.prototype.handleRequest = function (req, res, out) {
	const { pathname, query } = url.parse(req.url, true);
	console.log("handleRequest:---------->");
	console.log("pathname:", pathname);
	console.log("query:", query);

	function next() {
		//TODO:
	}

	next();
}

module.exports = Router;
