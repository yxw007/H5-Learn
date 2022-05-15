function* nTimes(n) {
	if (n > 0) {
		yield* nTimes(n - 1);
		yield n - 1;
	}
}

for (const iterator of nTimes(3)) {
	console.log(iterator);
}
