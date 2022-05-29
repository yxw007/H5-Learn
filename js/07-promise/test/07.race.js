const Promise = require("../Promise");

// delete global.Promise;
// const Promise = require("core-js-pure/actual/promise");

/* let p1 = new Promise((resolve, reject) => {
	resolve("success1");
});

let p2 = new Promise((resolve, reject) => {
	resolve("success2");
}); */

/* let p1 = new Promise((resolve, reject) => {
	resolve("success1");
});

let p2 = new Promise((resolve, reject) => {
	reject("fail2");
}); */

let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail1");
	}, 100);
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail2");
	}, 10);
});


//! 说明：普通值也是可以用的
/* let p1 = "a";
let p2 = "b"; */

/* let p1 = "a";
let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("fail2");
	}, 10);
});
 */
//! 赛跑：谁先完就用谁的值，后面的都忽略
Promise.race([p1, p2]).then((val) => {
	console.log("race.then.success: ", val);
}, (error) => {
	console.log("race.then.error: ", error);
});
