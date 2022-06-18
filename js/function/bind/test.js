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

autoRun("4. bind obj", () => {
	function fn(name, age) {
		this.name = name;
		this.age = age;
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const obj = {
		address: "sz"
	};

	const bindFn = fn.bind(obj, "猫");
	bindFn(9);
	//! 执行绑定后，将参数添加至绑定的对象上了
	console.log("obj:", obj);

	const obj2 = {
		address: "sz"
	};
	const myBindFn = fn.myBind(obj2, "猫");
	myBindFn(9);
	//! 执行绑定后，将参数添加至绑定的对象上了
	console.log("obj2:", obj2);
});

autoRun("5. new bindFn ", () => {
	function fn(name, age) {
		this.name = name;
		this.age = age;
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const obj = {
		address: "sz"
	};

	const bindFn = fn.bind(obj, "猫");
	//! new bindFn 绑定的this就是new 出来的对象，而不是原来的obj了
	const instance = new bindFn(9);
	console.log("instance:", instance);

	const obj2 = {
		address: "sz"
	};

	const myBindFn = fn.myBind(obj2, "猫");
	//! new bindFn 绑定的this就是new 出来的对象，而不是原来的obj了
	const myBindInstance = new myBindFn(9);
	console.log("myBindInstance:", myBindInstance);
});

autoRun("6. new bindFn instance proto ", () => {
	function fn(name, age) {
		this.name = name;
		this.age = age;
		console.log("fn: this:", this, ",arguments:", arguments);
	}

	const obj = {
		address: "sz"
	};

	fn.prototype.flag = "动物";

	const bindFn = fn.bind(obj, "猫");
	const instance = new bindFn(9);
	console.log("instance.flag:", instance.flag);

	const obj2 = {
		address: "sz"
	};
	const myBindFn = fn.myBind(obj2, "猫");
	const myBindInstance = new myBindFn(9);
	console.log("instance.flag:", myBindInstance.flag);
});

