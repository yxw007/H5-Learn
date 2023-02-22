const Promise = require("../Promise");

//! 说明：同步调用
/* const p = new Promise((resolve, reject) => {
  resolve("success");
});

p.then((val) => {
  console.log(val);
}); 

console.log("先显示success，然后这句");
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

console.log("这条会先显示，然后success");
