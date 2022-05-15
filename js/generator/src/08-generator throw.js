function* generator() {
	for (const iterator of [1, 2, 3]) {
		yield iterator;
	}
}

const g = generator();
console.log(g);
try {
	console.log(g.throw("throw exception"));
} catch (error) {
	console.log(error);
}
console.log(g);
console.log(g.next());
