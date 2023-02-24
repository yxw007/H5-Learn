const Promise = require("../Promise");

//! 说明：移植被原始的Promise 影响，可以采用直接把原始的promise delete 掉, 不就可以应用core-js中的promise了
// delete global.Promise;
// const Promise = require("core-js-pure/actual/promise");

/* const p = new Promise((resolve, reject) => {
  resolve("success");
}); */

//! 循环引用
//! then 返回promise
/* const p2 = p.then((val) => {
	return p2;
}, error => {
	console.log("p1-error:", error);
}).then((val2) => {
	console.log("p2-success:", val2);
}, erro2 => {
	console.log("p2-error:", erro2);
}); */

//! 说明：如果then 里面返回promise,会等待promise完成再往后执行
/* const p2 = p
  .then((val) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("xxxx");
      }, 1000);
    });
  })
  .then(
    (val) => {
      console.log("p2.then-success:", val);
    },
    (err) => {
      console.log("p2.then-fail:", err);
    }
  ); */

const p = new Promise((resolve, reject) => {
  reject("xxx");
})
  .then(null, (error) => {
    return new Promise((resolve, reject) => resolve("new Promise resolve"));
  })
  .then(
    (val) => {
      console.log("then2-success:", val);
    },
    (error) => {
      console.log("then2-erro:", error);
    }
  );
