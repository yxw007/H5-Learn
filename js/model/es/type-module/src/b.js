import { constVar, letVar, varVar, obj, default as arr } from "./common.js";

console.error("----------->b");

console.error("constVar:", constVar);
console.error("letVar:", letVar);
console.log("varVar:", varVar);
console.error("obj:", obj);
console.error("default Arr:", JSON.stringify(arr));

console.error("b------------>");
