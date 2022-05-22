let key = "sayName";
let person = {
	name: "potter",
	[key](name) {0
		console.log(`My name is ${name}`);
	}
}

person.sayName();
