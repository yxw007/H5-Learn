/**
 * 创建日期: 2022-09-19
 * 文件名称：test-throttle.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：节流测试
 */

const { throttle } = require("lodash");

/**
 * 节流
 * @param {*} callback
 * @param {*} delay
 */
function throttleTimer(callback, delay) {
	let timerId = 0;
	let context = null;
	let args = null;

	return function () {
		context = this;
		args = arguments;
		if (!timerId) {
			timerId = setTimeout(() => {
				timerId = 0;
				callback.apply(context, args);
			}, delay);
		}
	};
}

(() => {
	const fn = throttleTimer((...args) => {
		console.log("trigger:", args);
	}, 1000);

	/* const fn = throttle((...args) => {
		console.log("trigger:", args);
	}, 1000); */

	let i = 0;
	const timerId = setInterval(() => {
		console.log("setInterval:", ++i);
		fn(i);
		if (i >= 3) {
			clearInterval(timerId);
		}
	}, 500);
})();
