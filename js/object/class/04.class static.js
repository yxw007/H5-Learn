class Person {
	static staticFn1(params) {
		console.log("staticFn1: ", this);
	}

	static staticFn2() {
		console.log("staticFn2: ", this);
	}

	locate() {
		console.log("locat:", this);
	}
}


console.log(Person.staticFn1());
console.log(Person.staticFn2());

console.log(Person.prototype.locate());

