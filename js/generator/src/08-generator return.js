function* generator() {
	for (const iterator of [1, 2, 3]) {
		yield iterator;
	}
}

const g = generator();
console.log(g);
console.log(g.return(4));

