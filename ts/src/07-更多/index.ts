//-------------------------------------------------------------------------
(() => {
	//keyof 关键字，返回对象的所有属性的类型联合

	type Point = { x: number; y: number };
	//! 说明：keyof Point 相当于 P 的类型就是"x"|"y"
	type P = keyof Point;

	type Arrayish = { [n: number]: unknown };
	// type A = number
	type A = keyof Arrayish;

	type Mapish = { [k: string]: unknown };
	//! 说明：[k:string] 对应String|number， 有点特殊。估计是string可接收string和number导致类型为string|number
	let a: Mapish = { 1: 23, "12": 2 };
	// type M = String | number
	type M = keyof Mapish;
})();
