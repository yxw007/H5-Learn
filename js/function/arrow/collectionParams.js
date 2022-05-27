function sum(...values) {
	console.log(values);
	console.log(arguments);
	//! 说明：values 与arguments 不是一个对象
	console.log(values === arguments);
	//! values 里面的值更改与values 无关
	console.log(values[1] = 100);
	console.log(arguments[1]);
	//! arguments 改变里面的值，也不会更新至values中
	console.log(arguments[2] = 200);
	console.log(values[2]);
}

sum(1, 2, 3);
