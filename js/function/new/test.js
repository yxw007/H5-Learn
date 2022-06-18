/**
 * 创建日期: 2022-06-18
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const { autoRun } = require("../../helper");
const { mockNew } = require("./new");

autoRun("1.最简单的使用", () => {
	function Animal(name, age) {
		this.name = name;
		this.age = age;
	}
	let instance = new Animal("小狗", 10);
	console.log(instance);

	let mockNewInstance = mockNew(Animal, "小狗", 10);
	console.log(mockNewInstance);
});

autoRun("2.给原型和实例添加方法", () => {
	function Animal(name, age) {
		this.name = name;
		this.age = age;
		this.bay = function () {
			console.log(`${this.name} 叫了一下`);
		}
	}
	Animal.prototype.run = function () {
		console.log("跑");
	}
	let instance = new Animal("小狗", 10);
	instance.run();
	instance.bay();

	let newMockInstance = mockNew(Animal, "小狗", 10);
	newMockInstance.run();
	newMockInstance.bay();
});


autoRun("3.构造方法直接返回对象", () => {
	function Animal(name, age) {
		this.name = name;
		this.age = age;
		this.bay = function () {
			console.log(`${this.name} 叫了一下`);
		}
		return { name: "cat", age: 2 }
	}

	let instance = new Animal("小狗", 10);
	console.log(instance);

	let newMockInstance = mockNew(Animal, "小狗", 10);
	console.log(newMockInstance);
});

