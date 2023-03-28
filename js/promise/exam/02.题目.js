const Promise = require("../Promise");
Promise.resolve(0) //p1
  .then(() => {
    //p1.then
    //promise1.then
    console.log(1);
    return Promise.resolve("k"); //p8  ,  resolvePromise(x)=> new promise(p9) -> x.then
  }) //p2
  .then((res) => {
    //p2.then
    //promise2.then
    console.log(res);
  }); //p3 未使用

Promise.resolve(10) //p4
  .then(() => {
    //p4.then
    //promise3.then
    console.log(2);
  }) //p5
  .then(() => {
    //p5.then
    //promise4.then
    console.log(3);
  }) //p6
  .then(() => {
    //p6.then
    console.log(4);
    console.log("use promise count:", Promise.counter);
  }); //p7 未使用
/* 
[1,2] 
==>1
[2,k,3]
==>2
[k,3]
==>
[3,k.then]
==>3
[k.then,4]
==>k
[4]
==>4
*/

/* 
微任务：[p1,p2,p4,p5,p6]
宏任务：[]

微任务：[]
宏任务：[c1,c2,c4,c5,c6]

微任务：[p8]
宏任务：[c2,c4,c5,c6]

微任务：[]
宏任务：[c4,c5,c6]

微任务：[p2,p4,p5,p6]
宏任务：[c8]
*/
