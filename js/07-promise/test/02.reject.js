
const Promise = require("../Promise");
// const Promise = require("../1.promise");

/* const p = new Promise((resolve, reject) => {
	reject("fail");
});

p.then(null, error => {
	console.error(error);
});
 */

//! 直接报错情况
const p = new Promise((resolve, reject) => {
	throw "throw error";
});

p.then(null, error => {
	console.error("error:", error);
});

