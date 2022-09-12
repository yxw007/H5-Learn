/**
 * 创建日期: 2022-09-07
 * 文件名称：request.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */
const parse = require("parseurl");
const url = require("url");

const request = {
	get url() {
		return this.req.url;
	},
	set url(val) {
		this.req.url = val;
	},
	get query() {
		let { query } = url.parse(this.req.url, true);
		return query;
	},
	get path() {
		return parse(this.req).pathname;
	}
};

module.exports = request;
