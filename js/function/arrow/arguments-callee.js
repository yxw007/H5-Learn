function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		//! 解决方法1：利用arguments.callee 代替调用的函数名factorial，同时避免函数耦合
		// return num * factorial(num - 1);
		return num * arguments.callee(num - 1);
	}
}

let trueFactorial = factorial;
factorial = null; //! 说明: 由于factorial 对象设置为null了，所以递归调用必须使用arguments.callee，否则会factorial 报空
console.log(trueFactorial(5))

//-------------------------------------------------------------------------
//! 解决方法2：利用函数表达式的方式
let factorial2 = function fn(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * fn(num - 1);
	}
}

trueFactorial = factorial2;
factorial2 = null;
console.log(trueFactorial(5))
