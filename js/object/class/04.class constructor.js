class Animal {
	constructor() {
		console.log("Animal.constructor");
	}
}

class Person extends Animal {
	//! 说明：子类不写constructor时，创建子类实例时，会默认调用父类构造方法
	constructor() {
		console.log(this);
		//! 子类写了构造函数，然后继承了父类, 就必须在构造函数调用super 
		//! 注意：super之前不要引用this, 否则会报错：Must call super constructor in derived class before accessing 'this' or returning from derived constructor
		super();
		console.log("Person.constructor")

		//! 或者：返回一个对象
		// return { name: "Person" }
	}
}

let t = new Person();

