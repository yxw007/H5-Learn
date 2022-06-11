
class Person {
	//! 说明：class 代码块添加的函数都是原型上的，构造函数里是实例上的
	set nameTest(newName) {
		this.name_ = newName
	}
	get nameTest() {
		console.log("nameTest!!");
		return this.name_;
	}
}

let p1 = new Person();
let p2 = new Person();

//! 原型上能调用到nameTest, 说明是在原型上的
console.log(Person.prototype.nameTest);
