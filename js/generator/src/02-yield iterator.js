function* generator1() {
	yield* [1, 2, 3]
}

function* generator2() {
	for (const iterator of [1, 2, 3]) {
		yield iterator;
	}
}

let g1 = generator1();
for (const iterator of g1) {
	console.log(iterator);
}

console.log();

let g2 = generator2();
for (const iterator of g2) {
	console.log(iterator);
}

//! generator1和generator2 等价
