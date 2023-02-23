const Promise = require("../Promise");

// delete global.Promise;
// const Promise = require("core-js-pure/actual/promise");

/* const p = new Promise((resolve, reject) => {
  reject("fail");
}); */

//! 说明：如果有error处理，就不会继续往后抛异常，catch也就不会执行
/* p.then(null, (error) => {
  console.error("error:", error);
}).catch((error) => {
  console.log("catch:", error);
}); */

//! 说明：如果error回调为空，那么抛出的异常就会走到catch回调
/* p.then(null, null).catch((error) => {
  console.log("catch:", error);
}); */

//! 说明：此种情况和上一种情况输出一样
/* p.catch((error) => {
  console.log("catch:", error);
}); */

//! 如果p既不then处理error回调，也不catch捕获异常，底层就会直接把异常抛出,
/* const p = new Promise((resolve, reject) => {
  throw "xxx";
}); */

//! 说明：then onReject 如何返回不是throw 或 promise reject,返回值都会传递给下一个then 当作onResolve 参数
//-------------------------------------------------------------------------
/* const p = new Promise((resolve, reject) => {
  reject("fail");
})
  .then(null, (error) => {
    return error;
  })
  .then(
    (val) => {
      console.log("then2-success:", val);
    },
    (error) => {
      console.log("then2-erro:", error);
    }
  ); */

//! 如需了解整个运行逻辑，请看drawio图：https://app.diagrams.net/#G10jquPnqzMllqLjxbORK_8LXae7vFIoW5
const p = new Promise((resolve, reject) => {
  reject("fail");
})
  .then(null, (error) => {
    //p1
    return new Promise((resolve, reject) => {
      //p4
      reject("new Promise ->reject");
    });
  })
  .then(
    //p2
    (val) => {
      console.log("then2-success:", val);
    },
    (error) => {
      console.log("then2-erro:", error);
    }
  );
//p3 已有then产生，只是运行到此后p3没有再用了
//-------------------------------------------------------------------------
/* async function register() {
	const ret = { succes: true, message: "" };
	return new Promise((resolve, reject) => {
		//! 说明：异步抛出的异常，promise.catch 是捕获不到的
		setTimeout(() => {
			try {
				throw "register fail!"
				// resolveInner(ret);
			} catch (error) {
				ret.succes = false;
				ret.message = error;
				resolve(ret);
			}
		}, 100);
	})
} */

/* async function register() {
	const ret = { succes: true, message: "" };
	return new Promise((resolve, reject) => {
		//! 说明：异步抛出的异常，promise.catch 是捕获不到的
		setTimeout(() => {
			throw "register fail!"
			// resolveInner(ret);
		}, 100);
	}).then(null, error => {
		console.log("error:===>", error);
	}).catch(error => {
		console.error("catch:", error);
	})
}

async function goLogin() {
	return new Promise(async (resolve, reject) => {
		let ret = await register();
		resolve(ret);
	});
}

(async () => {
	let result = await goLogin();
	console.log("result:", result);
})(); */

//-------------------------------------------------------------------------
