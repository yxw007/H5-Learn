class Animal {
	constructor() {
		console.log("Animal.constructor");
	}

	sayHi() {
		console.log("Animal: sayHi");
	}
	static sayHi2() {
		console.log("Animal: sayHi");
	}
}

class Person extends Animal {
	constructor() {
		//! 说明：super不能单独使用，否则会报错
		// console.log(super);

		super();
		console.log("Person.constructor")
	}

	say() {
		super.sayHi();
	}

	static say2() {
		super.sayHi2();
	}

	say3() {
		super.sayHi();
	}
}

//! 说明：原型方法、静态方法、constructor 子类匹配调用父类对应的方法即可用super，否则可能会报错
let p = new Person();
// p.say()
// Person.say2()
Person.prototype.say();

