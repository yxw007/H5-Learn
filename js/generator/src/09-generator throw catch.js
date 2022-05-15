function* generator() {
	for (const iterator of [1, 2, 3]) {
		try {
			yield iterator;
		} catch (error) {
			console.log(error);
		}
	}
}

const g = generator();
console.log(g);
console.log(g.next());
console.log(g.throw("throw exception")); //说明：如果throw调用之前未调用过next,就属于外部异常
console.log(g.next());
