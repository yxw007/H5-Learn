function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		//! 说明：避免耦合，可以用arguments.callee 代替调用的函数名factorial
		// return num * factorial(num - 1);
		return num * arguments.callee(num - 1);
	}
}

let trueFactorial = factorial;
console.log(trueFactorial(5))
