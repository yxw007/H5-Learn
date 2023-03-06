async function fn1() {
  return new Promise(() => {
    throw Error("fn1 throw 1");
  });
}

async function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("fn2 occur problem");
    }, 10);
  });
}

async function test1() {
  try {
    //! 在外层捕获
    await fn1();
  } catch (error) {
    console.error("test1:", error.message);
  }
}

async function test2() {
  try {
    let p = await fn2();
    p.catch((e) => {
      console.error("test2:", e.message);
    });
  } catch (e) {
    console.error("test2: 222: ", e.message);
  }
}

/* (() => {
  test1();
})(); */

/* (() => {
  test2();
})();
 */

(() => {
  let p = new Promise((resolve, reject) => {
    reject("aa");
  });

  //! 通过.catch捕获同步promise中的异常
  p.catch((e) => {
    console.log("p.catch-error:", e);
  });
})();

(async () => {
  async function test() {
    return new Promise((resolve, reject) => {
      reject("abc");
    });
  }
  //! 通过try-catch捕获异步promise中的异常
  try {
    await test();
  } catch (error) {
    console.error("try-catch-error:", error);
  }
})();
