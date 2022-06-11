function test() {
	console.log(arguments);
}

//! 说明：逗号运算，执行后使用最后一个值. 此示例就是执行test,把最后两个参数传入
(100, test)(12, 200);
