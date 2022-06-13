/**
 * 创建日期: 2022-06-12
 * 文件名称：call.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 *
 * 特点：
 * 1.改变this
 * 2.让当前函数执行
 */

require("./call");
const { autoRun } = require("../../helper");

autoRun("1. 不传参数", () => {
	function fn() {
		console.log("fn, this:", this, "arguments:", arguments); //! this 指向global or window
	}

	fn.call();
	fn.myCall();
});

autoRun("2.传绑定this对象", () => {
	function fn() {
		console.log("fn, this:", this, "arguments:", arguments);	//! this 指向hello 字符串对象
	}

	fn.call("hello");
	fn.myCall("hello");
});


autoRun("3.传绑定this对象", () => {
	function fn() {
		console.log("fn, this:", this); //! this 指向{name:'pt'} 对象
	}

	fn.call({ name: "pt" });
	fn.myCall({ name: "pt" });
});


autoRun("4.传绑定this对象和1个参数", () => {
	function fn() {
		console.log("fn, this:", this, arguments); //! this 指向{name:'pt'} 对象, 参数为[1,2,3]
		for (let i = 0; i < arguments.length; i++) {
			console.log(`${i}:`, arguments[i]);
		}
	}

	fn.call({ name: "pt" }, [1, 2, 3]);
	fn.myCall({ name: "pt" }, [1, 2, 3]);
});


autoRun("4.传绑定this对象和多个参数", () => {
	function fn() {
		console.log("fn, this:", this, arguments); //! this 指向{name:'pt'} 对象, 参数为[1,2,3]
	}

	fn.call({ name: "pt" }, 1, 2, 3);
	fn.myCall({ name: "pt" }, 1, 2, 3);
});

autoRun("5.calll.call(fn2)", () => {
	function fn() {
		console.log("fn, this:", this, arguments); //! this 指向{name:'pt'} 对象, 参数为[1,2,3]
	}

	function fn2() {
		console.log("fn2,this:", this, ",arguments:", arguments);
	}

	// fn.call.call(fn2, 1, 2, 3);
	fn.myCall.myCall(fn2, 1, 2, 3);
});
