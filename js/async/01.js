async function fn1() {
  console.log(1);
  await fn2(); //! 说明：相当于起了一个promise微任务，所以后面的代码阻塞，等此脚本执行完后，在清空微任务队列时执行await 后面的代码
  console.log(2);
}
async function fn2() {
  console.log("fn2");
}
fn1();
console.log(3);

