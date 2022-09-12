/**
 * 创建日期: 2022-09-07
 * 文件名称：response.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const response = {
	_body: null,
	get body() {
		return this._body;
	},
	set body(val) {
		this.res.statusCode = 200;
		this._body = val;
	}
};

module.exports = response;
