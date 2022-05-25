
// const Promise = require("../Promise");
// const Promise = require("../4.promise");

//! 说明：移植被元素的Promise 影响，可以采用直接把原始的promise delete 掉, 不就可以应用core-js中的promise了
delete global.Promise;

const Promise2 = require("core-js-pure/actual/promise");

//! then 返回promise

const p = new Promise2((resolve, reject) => {
	resolve("success");
});

//! 循环引用
const p2 = p.then((val) => {
	return p2;
}, error => {
	console.log("p2-error:", error);
})

/* const p2 = p.then((val) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("xxxx");
		}, 1000);
	});
}).then((val) => {
	console.log("p2.then-success:", val);
}, err => {
	console.log("p2.then-fail:", err);
}); */


/* const p = new Promise((resolve, reject) => {
	resolve("success");
}).then(null, error => {
	return new Promise((resolve, reject) => resolve("new Promise resolve"));
}).then(val => {
	console.log("then2-success:", val);
}, error => {
	console.log("then2-erro:", error);
});
 */
