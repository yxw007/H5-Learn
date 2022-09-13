/**
 * 创建日期: 2022-09-08
 * 文件名称：delegate.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

module.exports = Delegator;

function Delegator(proto, target) {
	if (!(this instanceof Delegator)) return new Delegator(proto, target);
	this.proto = proto;
	this.target = target;
	//! 说明：避免get set 属性的重复定义
	this.getters = {};
	this.setters = {};
}

Delegator.prototype.method = function (name) {
	let proto = this.proto;
	let target = this.target;

	proto[name] = function () {
		return this[target][name].apply(this[target], arguments);
	}

	return this;
}

Delegator.prototype.access = function (name) {
	if (this.getters[name] || this.setters[name]) {
		throw new Error("Cannot redefine property ", name);
	}

	let proto = this.proto;
	let target = this.target;

	this.getters[name] = true;
	this.setters[name] = true;

	//! 代理访问target对象  比如：ctx.url 代理访问 ctx.request.url => ctx.request.req.url
	Object.defineProperty(proto, name, {
		get() {
			return this[target][name];
		},
		set(val) {
			this[target][name] = val;
		}
	});

	return this;
}

Delegator.prototype.getter = function (name) {
	if (this.getters[name] || this.setters[name]) {
		throw new Error("Cannot redefine property ", name);
	}

	let proto = this.proto;
	let target = this.target;

	this.getters[name] = true;

	Object.defineProperty(proto, name, {
		get() {
			return this[target][name];
		}
	});
	return this;
}

Delegator.prototype.setter = function (name) {
	if (this.getters[name] || this.setters[name]) {
		throw new Error("Cannot redefine property ", name);
	}

	let proto = this.proto;
	let target = this.target;
	this.setters[name] = true;

	Object.defineProperty(proto, name, {
		set(val) {
			return this[target][name] = val;
		}
	});
	return this;
}

