const { constVar, letVar, varVar, obj, default: arr } = require("./common.js");

console.error("----------->a");

//! 导入的常量是不可以更改的
// constVar = 2;
console.log("constVar:", constVar);

//! 导出的let变量也是不可以更改的
// letVar = 30;
console.log("letVar:", letVar);

//! 导出的var变量也是不可以更改的
// varVar = 300;
console.log("varVar:", varVar);

//! const 对象,属性可以变更
console.error("obj before:", obj);
obj.address = "sz";
console.error("obj after:", obj);

console.error("arr before:", JSON.stringify(arr));
arr.push({ name: "c" });
console.error("arr after1:", JSON.stringify(arr));
arr.shift();
console.error("arr after2:", JSON.stringify(arr));

console.error("a----------->");
