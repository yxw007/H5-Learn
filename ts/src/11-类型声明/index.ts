import from "axois"
//-------------------------------------------------------------------------
//! 声明全局类型
declare let age: number;
declare function sum(a: string, b: string): void;
declare class Animal { };
declare const enum Seaons {
	Spring,
	Summer,
	Autumn,
	Winter
}
declare interface Person {
	name: string,
	age: number
}
//类型声明在编译的时候都会被删除，不会影响真正的代码。目的：是不用重构原有的js代码，TS能支持支持
//-------------------------------------------------------------------------
//! 使用场景：通过cdn引入，声明全局jquery方法
/* declare const $: (selector: string) => {
	height(num?: number): void
	width(num?: number): void
}; */
//! 声明后，此时就可以调用jquery中的方法，其他库也是类似的，如果没有.d.ts文件，可这样声明一下即可避免报错
//!（注意：一般库都提供了.d.ts文件，所以不用自己手动写）
$('').height();
//-------------------------------------------------------------------------
//! 使用场景：通过webpack 使用jQuery，进行声明
/* declare namespace jQuery {
	//! 注意：namespace 内的声明 无需添加declare
	function ajax(url: string, otpions: object): void;
	namespace fn {
		function extend(obj: object): void
	}
}*/
jQuery.ajax('/', {});
jQuery.fn.extend({});
//-------------------------------------------------------------------------
