
const Promise = require("../Promise");
// const Promise = require("../1.promise");

const p = new Promise((resolve, reject) => {
	reject("fail");
});

p.then(null, error => {
	console.error(error);
});

