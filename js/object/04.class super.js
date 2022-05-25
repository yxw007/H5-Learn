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

let p = new Person();
// p.say()
// Person.say2()
Person.prototype.say();

