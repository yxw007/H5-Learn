//! declare 包裹声明
declare global {
	//! 1. 拓展全局类型String的方法声明
	interface String {
		double(): string;
	}
}

(() => {
	//! 1. 实现拓展全局类型String的方法
	String.prototype.double = function () {
		return this + "," + this;
	}

	let str = 'pt';
	console.log(str.double());
})();
//-------------------------------------------------------------------------
(() => {
	//! 合并声明

	//! 1.同名interface合并：利用interface 把多个同名interface声明合并
	interface Animal {
		name: string
	}
	interface Animal {
		age: number
	}

	let a: Animal = { name: 'pt', age: 18 };
})();
//-------------------------------------------------------------------------
//命名空间的合并
//! 2.扩展类: class 与namespace 合并
class Form { }
namespace Form {
	export const type = 'form'
}

let f1: Form = { type: "xx" };
console.log(Form.type);	//form
console.log(f1);				//{type:'xx'}
//-------------------------------------------------------------------------
//! 3.拓展方法: function 与 namespace 合并
function getName() { }
namespace getName {
	export const type = 'form'
}
console.log(getName.type);//form
//-------------------------------------------------------------------------
//! 4.拓展枚举：enum 与 namespace 合并
enum Seasons {
	Spring = 'Spring',
	Summer = 'Summer'
}
namespace Seasons {
	export let Autumn = 'Autumn';
	export let Winter = 'Winter'
}
console.log(Seasons.Spring);//Spring
console.log(Seasons.Autumn);//Autumn
//-------------------------------------------------------------------------
(() => {
	//! 5.交叉拓展类：利用&交叉拓展
	type Animal = {
		age: Number
	}

	type Person = {
		name: String
	}

	type PersonInfo = Animal & Person & {
		address: string
	}

	let personInfo: PersonInfo;
	personInfo = { age: 11, name: "pt", address: "123" };
})();
//-------------------------------------------------------------------------
export default {}


