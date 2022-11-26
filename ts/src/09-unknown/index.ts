(() => {
	//! 1.任何类型的值都可以赋值给unknown
	let un: unknown;
	un = 'pt';
	un = 11;

	let an: any;
	an = 123;
	an = "123";

	//! 2.unknown 与any 可以互相赋值
	un = an;
	an = un;

	//! 3.unknown变量，不可以访问变量的任何属性和方法, 也不能作为函数、类来使用
	//un.a; 报错
	//un(); 报错
	//new unknow(); 报错

	//! 4.任何类型与unknown联合， 得到的unknown类型
	type UnionUnknown = unknown | null | string | number
	//type UnionUnknown = unknown

	//! 5. 任何类型与unknown交叉,unknown 被忽略，得到的是与它交叉的类型
	type inter = unknown & null
	//type inter = null
})();

(() => {
	// unknown 特性
	//-------------------------------------------------------------------------
	//! never 是unknown 的子类型
	type isNever = never extends unknown ? true : false
	//type isNever = true
	//-------------------------------------------------------------------------
	//! keyof unknown 是never
	type key = keyof unknown;
	//type key = never
	//-------------------------------------------------------------------------
	//! unknown类型遍历无用
	type IMap<T> = {
		[P in keyof T]: number
	}
	type T = IMap<unknown>;
	//type t = {}
	let t: T = { name: "pt" };
	//-------------------------------------------------------------------------
	let k: unknown = 1;
	let n: Number = 1;
	//! unknown类型不能和number类型进行 +运算, 但是可以用于等于与不等于操作
	// console.log(k + n); 报错

	console.log(k === n);
	console.log(k !== n);
	//-------------------------------------------------------------------------
})();
