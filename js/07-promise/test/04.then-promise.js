
const Promise = require("../Promise");
// const Promise = require("../4.promise");

//! then 返回promise

const p = new Promise((resolve, reject) => {
	resolve("success");
});

//! 循环引用
const p2 = p.then((val) => {
	return p2;
}, error => {
	console.log("p1-error:", error);
}).then((val2) => {
	console.log("p2-success:", val2);
}, erro2 => {
	console.log("p2-error:", erro2);
});

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
