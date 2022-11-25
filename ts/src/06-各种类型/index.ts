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
(() => {
	interface Fish {
		name1: string
	}
	interface Water {
		name2: string
	}
	interface Bird {
		name3: string
	}
	interface Sky {
		name4: string
	}

	//! 条件类型：基本使用
	//! 如果T继承Fish类型，就返回Water类型，否则就返回Sky类型
	type Condition<T> = T extends Fish ? Water : Sky;
	let con1: Condition<Fish> = { name2: '水' }

	//! 条件分发
	//! 说明：<type1|type2>分别进行分发，然后联合，此句与下面3句等价
	let con2: Condition<Fish | Bird> = { name4: '水' };

	type c1 = Condition<Fish>;
	type c2 = Condition<Bird>;
	type c = c1 | c2
})();
//-------------------------------------------------------------------------
(() => {
	//! 内置条件类型

	//1.Exclude 排除类型
	type Exclude<T, U> = T extends U ? never : T;
	//说明：把'1' | '2' | '3' 把 '1' | '2' 排除就只剩'3'类型
	type T1 = Exclude<'1' | '2' | '3', '1' | '2'>

	//说明：把Function 排除，就是string|number 类型
	type T2 = Exclude<string | number | (() => void), Function>;

	//2. Extract 提取类型
	type Extract<T, U> = T extends U ? T : never;
	// 说明：'1' | '2' | '3' 提取 '1' | '2', 类型就是'1' | '2'
	type MyExtract = Extract<'1' | '2' | '3', '1' | '2'>

	//3. NoNullable 非空类型
	type NonNullable<T> = T extends null | undefined ? never : T
	// 说明：排除null和undefined 类型，剩余的类型'a'
	type MyNone = NonNullable<'a' | null | undefined>
})();
//-------------------------------------------------------------------------
(() => {
	//! infer 类型推断
	function getUser(a: number, b: number) {
		return { name: 'pt', age: 10 }
	}

	//! 函数返回值推断： ReturnType
	//! 说明：不知道函数返回值类型，可以通过infer R 占位，如果T 满足(...args: any) => infer R 函数，则返回类型R，否则返回never
	type ReturnType<T> = T extends (...args: any) => infer R ? R : never
	type MyReturn = ReturnType<typeof getUser>

	//! 函数参数类型推断： Parameters
	//! 说明：同上，不知道参数类型，就用inferR 占位代替
	type Parameters<T> = T extends (...args: infer R) => any ? R : any;
	type MyParams = Parameters<typeof getUser>;

	//! 构造函数参数类型推断：ConstructorParameters
	class Person {
		constructor(name: string, age: number) { }
	}
	type ConstructorParameters<T> = T extends { new(...args: infer R): any } ? R : never
	type MyConstructor = ConstructorParameters<typeof Person>

	//! 实例类型推断：InstanceType
	type InstanceType<T> = T extends { new(...args: any): infer R } ? R : any
	type MyInstance = InstanceType<typeof Person>

	//! infer 实践
	//! 将数组类型转化为联合类型
	type ElementOf<T> = T extends Array<infer E> ? E : never;
	type TupleToUnion = ElementOf<[string, number, boolean]>;

	//! 将两个函数的参数转化为交叉类型
	type T1 = { name: string };
	type T2 = { age: number };
	type ToIntersection<T> = T extends ([(x: infer U) => any, (x: infer U) => any]) ? U : never;
	//! 表示要把T1、T2赋予给x，那么x的值就是T1、T2的交集, 最终t3 的类型就是T1&T2
	type t3 = ToIntersection<[(x: T1) => any, (x: T2) => any]>
})();
//-------------------------------------------------------------------------
(() => {
	//内置类型
	//! 1.Partial: 将属性转化为可选
	interface Company {
		num: number
	}

	interface Person {
		name: string,
		age: string,
		company: Company
	}

	//! 说明：[K in keyof T] 循环T中每个属性，然后添加? 让其属性变成可选。缺点：无法深度变成参数可选
	type Partial<T> = { [K in keyof T]?: T[K] };
	type PartialPerson = Partial<Person>;

	//! 深度所有属性可选
	type DeepPartial<T> = {
		//! 如果T[K] 是对象，继续深度partial
		[K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
	}
	type DeepPartialPerson = DeepPartial<Person>;
})();
//-------------------------------------------------------------------------
(() => {
	//内置类型
	//! 2.Required: 将属性转化为必填
	interface Company {
		num: number
	}

	interface Person {
		name: string,
		age?: string,
		company: Company
	}

	type PartialPerson = Partial<Person>;
	//! 利用[K in keyof T]-?: T[K]，可选符号?前面添加-号即可
	type Required<T> = { [K in keyof T]-?: T[K] }
	type RequiredPerson = Required<PartialPerson>

	//! 3.Readonly: 将属性转化仅读, 属性循环前面添加readonly 即可
	type Readonly<T> = { readonly [K in keyof T]: T[K] }
	type ReadonlyPerson = Readonly<Person>

	//! 4.Pick：在已有属性中，挑选所需的属性
	type Pick<T, U extends keyof T> = { [P in U]: T[P] }
	type PickPerson = Pick<Person, 'name' | 'age'>

	//! 5.Record: 记录类型
	type Record<K extends keyof any, T> = { [P in K]: T }
	let person: Record<string, number | string> = { name: 'pt', age: 12 };

	//! 6.对象属性和值，映射成Record键值对类型
	function map<T extends keyof any, K, U>(obj: Record<T, K>, callback: (item: K, key: T) => U) {
		let result = {} as Record<T, U>
		for (let key in obj) {
			result[key] = callback(obj[key], key)
		}
		return result
	}

	//const ret: Record<"name" | "age" | "address", string | number>
	const ret = map({ name: 'pt', age: 123, address: "sz" }, (item, key) => {
		return item
	});

	//! 7.Omit: 忽略对象属性
	let person2 = {
		name: 'pt',
		age: 12,
		address: 'sz'
	}
	//! 说明：先pick对象属性，然后Exclude在排除不要的，剩下的就是想要的属性。最终把忽略掉的属性过滤掉了
	type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
	type OmitAddress = Omit<typeof person2, 'address'>
})();
//-------------------------------------------------------------------------
