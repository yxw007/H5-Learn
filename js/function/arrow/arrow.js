/*
let value = {};
let setName = x => x.name = "pt";
console.log(setName(value));
console.log(value.name); */

//! 说明：arguments 在箭头函数使用arguments会从作用域往上找非箭头函数的arguments，找不到就是window或global的arguments
/*
let bar = () => {
	console.log(arguments[0]); //输出：{}
}

bar(5);

function test1() {
	let argumentFn = (a, b) => {
		console.log(arguments);
		return a + b;
	}

	console.log(argumentFn(1, 2));
}

test1("a"); */

//! 说明：参数与arguments.length 相等时，修改arguments中的元素值，会对应的把形参值改掉
//! 说明：如果arguments.length实际传递的形参个数，小于命名的形参个数，修改超出arguments位置中的元素值，不会更新到对应形参变量上
/* function test2(num1, num2) {
	console.log(arguments);
	arguments[1] = 10
	console.log(num1, num2);
}

test2(1, 2); */



