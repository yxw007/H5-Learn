function* invalidGeneratorA() {
	return () => {
		yield;
	}
}
