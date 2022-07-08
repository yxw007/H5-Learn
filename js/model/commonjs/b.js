var { constVar, letVar, varVar, obj, default: arr } = require("./common.js");

console.error("----------->b");

console.error("constVar:", constVar);
console.error("letVar:", letVar);
console.log("varVar:", varVar);
console.error("obj:", obj);
console.error("default Arr:", JSON.stringify(arr));

console.error("b------------>");

setTimeout(() => {
	console.log("b: arr=", JSON.stringify(arr));
	arr.pop();
	console.log("b: pop arr:", JSON.stringify(arr));
}, 2000);
