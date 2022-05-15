function* generator(args) {
	let a = yield;
	console.log(a);
	let b = yield;
	console.log(b);
}

const g = generator();

console.log(g);
console.log(g.next(1));
console.log(g.next(2));
console.log(g.next(3));
