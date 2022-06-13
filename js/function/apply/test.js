/**
 * 创建日期: 2022-06-13
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

require('./apply');

const { autoRun } = require("../../helper");

autoRun("1.不传参", () => {
	function fn1() {
		console.log("fn1: this:", this, ",arguments:", arguments);
	}

	fn1.apply();
	console.log("-------------------------------------------------------------------------");
	fn1.myApply();
});


autoRun("2.传1个参数", () => {
	function fn1() {
		console.log("fn1: this:", this, ",arguments:", arguments);
	}

	fn1.apply("abc");
	console.log("-------------------------------------------------------------------------");
	fn1.myApply("abc");
});

autoRun("3.传2个参数", () => {
	function fn1() {
		console.log("fn1: this:", this, ",arguments:", arguments);
	}

	//! 说明：第二个参数需要为数组
	fn1.apply({}, [1, 123]);
	console.log("-------------------------------------------------------------------------");
	fn1.myApply({}, [1, 123]);
});
