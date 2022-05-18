/* 
//! 说明：同步调用
const p = new Promise((resolve, reject) => {
	resolve("success");
});

p.then((val) => {
	console.log(val);
});
 */

//! 说明：异步调用
const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("success");
	}, 1000);
});

p.then((val) => {
	console.log(val);
});
