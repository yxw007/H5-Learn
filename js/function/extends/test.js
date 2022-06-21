/**
 * 创建日期: 2022-06-21
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

function Animal(name, age) {
	this.name = name;
	this.age = age;
	this.eat = function () {
		console.log(`${name} 吃东西`);
	}
}

Animal.prototype.sleep = function () {
	console.log(`${this.name} 睡觉啦`);
}

const animal = new Animal("dog", 3);
animal.eat();
animal.sleep();

console.log("-----------------------------------");

function People(name, age, sex) {
	Animal.call(this, name, age);//! 1.继承实例上的属性和方法
	this.sex = sex;
	this.eat = function () {// 重写父类方法
		console.log(`${name} 吃大餐`);
	}
	this.thinkSomething = function () {
		console.log(`${name} 在想事情`);
	}
}

//! 利用Object创建object对象，搭建原型链
function inheritProtoType(subType, superType) {
	// let proto = Object(superType.prototype);
	let proto = Object.create(superType.prototype); //! 这两句等价

	proto.constructor = subType;
	subType.prototype = proto;
}

inheritProtoType(People, Animal);

// People.prototype = new Animal();//! 2.继承原型上的属性和方法, 避免new Animal 可借助Object创建obj实例
People.prototype.live = "地球";
People.prototype.work = function () {
	console.log(`${this.name} 需要工作`);
}

const p1 = new People("小明", 18, "男")
console.log(`name: ${p1.name} sex: ${p1.sex}`);
p1.eat();
p1.sleep();
p1.thinkSomething();
p1.work();
