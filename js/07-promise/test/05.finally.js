const Promise = require("../Promise");

// delete global.Promise;
// const Promise = require("core-js-pure/actual/promise");

//! 说明：不管promise返回成功还是失败，都会执行finally的内容

/* const p = new Promise((resolve, reject) => {
	resolve("success");
}).finally(() => {
	console.log("finally");
}); */

/* const p = new Promise((resolve, reject) => {
	reject("fail");
}).finally(() => {
	console.log("finally");
}); */

/* const p = new Promise((resolve, reject) => {
	resolve("success");
}).then((val) => {
	console.log("then->");
	throw Error("then throw error");
}).finally(() => {
	console.log("finally");
}); */

//-------------------------------------------------------------------------

//! 说明：finally 后仍然可以调用then、catch、finally
const p = new Promise((resolve, reject) => {
	resolve("success");
}).then(val => {
	console.log("then:", val);
	return new Promise((resolve, reject) => {
		console.log("new Promise");
		reject("newPromise->reject");
	});
}).finally(() => {
	console.log("finally");
}).catch(error => {
	console.log("catch: ===>", error);
}).finally(() => {
	console.log("last finally!");
});

/* const p = new Promise((resolve, reject) => {
	resolve("success");
}).finally(() => {
	console.log("finally");
}).then((val) => {
	console.log("then:", val);
}).finally(() => {
	console.log("last finally!");
}); */

