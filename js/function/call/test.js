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

(() => {
	function fn() {
		console.log("fn, this:", this); //! this 指向global or window
	}

	//1. 不传参数
	fn.call();
})();

(() => {
	function fn() {
		console.log("fn, this:", this);	//! this 指向hello 字符串对象
	}

	//2.传绑定this对象
	fn.call("hello");
})();


(() => {
	function fn() {
		console.log("fn, this:", this); //! this 指向{name:'pt'} 对象
	}

	//3.传绑定this对象
	fn.call({ name: "pt" });
})();


(() => {
	function fn() {
		console.log("fn, this:", this, arguments); //! this 指向{name:'pt'} 对象, 参数为[1,2,3]
		for (let i = 0; i < arguments.length; i++) {
			console.log(`${i}:`, arguments[i]);
		}
	}

	//3.传绑定this对象
	fn.call({ name: "pt" }, [1, 2, 3]);
})();


(() => {
	function fn() {
		console.log("fn, this:", this, arguments); //! this 指向{name:'pt'} 对象, 参数为[1,2,3]
	}

	//3.传绑定this对象
	fn.call({ name: "pt" }, 1, 2, 3);
})();
