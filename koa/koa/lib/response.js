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
	},
	set(field, val) {
		if (2 === arguments.length) {
			if (Array.isArray(val)) {
				val = val.map(v => typeof v === 'string' ? v : String(v));
			} else if (typeof val !== 'string') {
				val = String(val);
			}
			this.res.setHeader(field, val);
		} else {
			for (const key in field) {
				this.set(key, field[key]);
			}
		}
	}
};

module.exports = response;
