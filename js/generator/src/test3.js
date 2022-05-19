function* generator(args) {
	let a = yield;
	console.log(a);
	let b = yield;
	console.log(b);
	return 1
}

const g = generator();
console.log(g);
console.log(g.next());

// console.log(g.next(10));
// console.log(g.next(100));

console.log(g.return(20));
// console.log(g.next(200));
