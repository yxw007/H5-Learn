(() => {
	//! 交叉类型
	interface Person1 {
		handsome: string,
	}
	interface Person2 {
		high: string,
	}

	//! 利用&符号将多个类型合并为一个新类型，得到的结果是他们的交集
	type P1P2 = Person1 & Person2;
	//! 说明：赋值handsome和hight两个属性有且只能同时有这2字段，否则报错
	let p: P1P2 = { handsome: '帅', high: '高' }
})();
//-------------------------------------------------------------------------
(() => {
	function mixin<T, K>(a: T, b: K): T & K {
		return { ...a, ...b }
	}

	//! 交叉混合类型
	const x = mixin({ name: 'pt' }, { age: 11 })
	type xType = typeof x;
	/* 
	type xType = {
		name: string;
	} & {
			age: number;
	}
	*/
})();
//-------------------------------------------------------------------------
(() => {
	interface IPerson1 {
		name: string,
		age: number
	}

	interface IPerson2 {
		name: number
		age: number
	}

	type Person = IPerson1 & IPerson2;
	let name!: never;
	//! 说明：两个属性name之间 string & number 类型为never
	let p: Person = { name, age: 11 };
})();
//-------------------------------------------------------------------------
