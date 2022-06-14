/**
 * 创建日期: 2022-06-14
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

require('./bind')
const { autoRun } = require('../../helper')

/* autoRun("1.无参数", () => {
	function fn() {
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const bindFn = fn.bind();//1.bind 返回一个函数
	bindFn();

	const myBindFn = fn.myBind();
	myBindFn();
}); */

autoRun("2.传1个参数", () => {
	function fn() {
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const bindFn = fn.bind("a");
	bindFn();

	const myBindFn = fn.bind("a");
	myBindFn();
});

autoRun("2.1: 传1个参数, 添加返回值", () => {
	function fn() {
		console.log("fn: this:", this, ",arguments:", arguments);
		return "123";
	}

	const bindFn = fn.bind("a");
	console.log(bindFn());

	const myBindFn = fn.bind("a");
	console.log(myBindFn());
});

autoRun("3.传3个参数", () => {
	function fn() {
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const bindFn = fn.bind("a", "b", "c");//第1个参数会当做this, 从第2个开始的参数会作为返回函数的参数
	bindFn("d");//调用bind返回的函数，再次传参会将参数防止bindFn参数的尾部

	const myBindFn = fn.bind("a", "b", "c");
	myBindFn("d");
});

//TODO: 学习到此处?
autoRun("4. new bindFn", () => {
	function fn(name) {
		this.name = name;
		this.say = function () {
			console.log(`${name} say hello !`);
		}
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const bindFn = fn.bind("a", "b", "c");
	const bindFnObj = new bindFn("pt");
	console.log(bindFnObj);

	const myBindFn = fn.myBind("a", "b", "c");
	const myBindFnObj = new myBindFn("pt");
	console.log(myBindFnObj);
});

autoRun("5. new bindFn", () => {
	function fn(name) {
		this.name = name;
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	fn.prototype.say = function () {
		console.log(`say hello !`);
	};

	const bindFn = fn.bind("a", "b", "c");
	const bindFnObj = new bindFn("pt");
	console.log("bindFnObj:", bindFnObj);

	const myBindFn = fn.myBind("a", "b", "c");
	const myBindFnObj = new myBindFn("pt");
	console.log("myBindFnObj:", myBindFnObj);
});
