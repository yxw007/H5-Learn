function* invalidGeneratorA() {
	return () => {
		yield;
	}
}