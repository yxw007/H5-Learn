var { obj, default: arr } = require("./common.js");

console.error("----------->c");
console.error("obj after:", obj);
console.error("arr after:", JSON.stringify(arr));
console.error("c------------>");

setTimeout(() => {
	console.log("pop arr");
	arr.pop();
	console.log("arr:", JSON.stringify(arr));
}, 1000);
