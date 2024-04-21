class Person {
	#name = "default";
	constructor(name) {
		this.#name = name;
	}
	get name() {
		return this.#name;
	}
}

let p = new Person("potter");
console.log(p.name);


p.#name = "tt";
console.log(p.name);
