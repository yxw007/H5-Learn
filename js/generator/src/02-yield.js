function* generator() {
	console.log("1");
	yield;
	console.log("2");
}

const g = generator();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
