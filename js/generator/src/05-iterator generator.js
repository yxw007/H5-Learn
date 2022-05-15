function* generator() {
	yield 1;
	yield 2;
	yield 3;
}

const g = generator();

for (const iterator of g) {
	console.log(iterator);
}
