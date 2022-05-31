
const Promise = require("../Promise");

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

