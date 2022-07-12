/**
 * 创建日期: 2022-07-12
 * 文件名称：EventEmitter.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

function EventEmitter() {
	this.events = {};
}

/**
 * 订阅事件
 * @param {*} eventName 
 * @param {*} listener 
 */
EventEmitter.prototype.on = function (eventName, listener) {
	if (!this.events[eventName]) {
		this.events[eventName] = [];
	}

	//! 添加其他事情之前，先执行newListener事件
	if (eventName != "newListener") {
		this.emit("newListener", eventName, listener);
	}

	this.events[eventName].push({ isOnce: false, listener });
}

/**
 * 订阅事件-1次
 * @param {*} eventName 
 * @param {*} listener 
 */
EventEmitter.prototype.once = function (eventName, listener) {
	if (!this.events[eventName]) {
		this.events[eventName] = [];
	}

	this.events[eventName].push({
		isOnce: true,
		listener
	});
}

/**
 * 发布事件
 * @param {*} eventName 
 * @param  {...any} args 
 */
EventEmitter.prototype.emit = function (eventName, ...args) {
	if (!this.events[eventName]) {
		throw new Error("not register this event,eventName=" + eventName);
	}

	let arr = this.events[eventName];
	for (const item of arr) {
		item.listener.call(this, ...args);
	}

	this.events[eventName] = arr.filter(item => !item.isOnce);
}

/**
 * 关闭事件
 * @param {*} eventName 
 * @param {*} listener 
 * @returns 
 */
EventEmitter.prototype.off = function (eventName, listener) {
	if (!this.events[eventName]) {
		return;
	}

	let arr = this.events[eventName];
	arr = arr.filter(item => item.listener != listener);
	this.events[eventName] = arr;
}

/**
 * 移除事件
 * @param {*} eventName 
 */
EventEmitter.prototype.removeAllListeners = function (eventName) {
	if (this.events[eventName]) {
		this.events[eventName] = null;
	}
}

module.exports = EventEmitter;
