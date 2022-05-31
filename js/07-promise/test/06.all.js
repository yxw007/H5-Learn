const Promise = require("../Promise");

// delete global.Promise;
// const Promise = require("core-js-pure/actual/promise");

//! 说明：2个成功，结果通过onFulfilled回调返回了，返回值是成功的数组集合
/* let p1 = new Promise((resolve, reject) => {
	resolve("success1");
});

let p2 = new Promise((resolve, reject) => {
	resolve("success2");
}); */

//! 说明：1个成功1个失败，结果通过onRejct回调返回了，并且只返回了失败的值
/* let p1 = new Promise((resolve, reject) => {
	resolve("success1");
});

let p2 = new Promise((resolve, reject) => {
	reject("fail2");
}); */

//! 说明：都失败，返回了最新失败的值，后面失败的promise未返回
/* let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail1");
	}, 100);
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail2");
	}, 10);
});
 */

//! 说明：普通值也是可以用的
/* let p1 = "a";
let p2 = "a"; */

let p1 = "a";
let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail2");
	}, 10);
});

Promise.all([p1, p2]).then((val) => {
	console.log("all.then.success: ", val);
}, (error) => {
	console.log("all.then.error: ", error);
});
