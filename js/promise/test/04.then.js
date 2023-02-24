// const Promise = require("../Promise");

delete global.Promise;
const Promise = require("core-js-pure/actual/promise");

/* const p = new Promise((resolve, reject) => {
  resolve("success");
}); */

//! 说明：如果then onResolve 回调不返回值，下一个then的onResolve 收到的val值就是undefined
/* p.then((val) => {
	console.log("then:", val);
}).then((val2) => {
	console.log("then2:", val2);
}); */

//! 说明：如果then onRsolve 回调返回普通值，则传递给下一个then的onResolve 收到的val参数
/* p.then((val) => {
	console.log("then:", val);
	return val;
}).then((val2) => {
	console.log("then2:", val2);
}); */

//! 说明：如果then onRsolve 回调返回Promise，会先解析promise的值，然后根据值再往后传递(reject和throw往onReject和catch传递，否则就往then传递)
/*p.then((val) => {
	console.log("then:", val);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, `newPromise=> ${val}`);
	});
}).then((val2) => {
	console.log("then2:", val2);
}); */

/*
p.then((val) => {
	console.log("then:", val);
	return new Promise((resolve, reject) => {
		reject("newPromise->error");
	});
}).then((val2) => {
	console.log("then2:", val2);
}).catch(error => {
	console.error("catch:", error);
}); */

//-------------------------------------------------------------------------
//! 说明：如果new Promise 不调用提供的resolve,reject 并且不throw 异常，就不会往后执行了

/* p.then((val) => {
  console.log("then:", val);
  return new Promise((resolve, reject) => {
    throw Error("new Promise Error !");
  });
})
  .then((val2) => {
    console.log("then2:", val2);
  })
  .catch((error) => {
    console.error("catch:", error);
  }); */

const p = new Promise((resolve, reject) => {
  reject("fail");
});

//! 说明：如果当前then什么都不做，就会把对应的值传递给下一个存在有回调的then
p.then().then(
  (val) => {
    console.log("then.success:", val);
  },
  (error) => {
    console.log("then.error:", error);
  }
);
