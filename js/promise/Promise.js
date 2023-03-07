/**
 * 创建日期: 2022-05-29
 * 文件名称：Promise.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：实现Promise A+规范
 * PromiseA+ 规范：https://promisesaplus.com/
 */

const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "rejected";

function generateID() {
  return ++Promise.counter;
}

function resolvePromise(x, promise2, resolve, reject) {
  if (x === promise2) {
    console.error("Chaining cycle detected for promise #<Promise>");
    return reject(new TypeError("Chaining cycle detected for promise #<Promise>"));
  }

  let called = false;
  if ((x !== null && typeof x === "object") || typeof x === "function") {
    try {
      //! 说明：为了避免x.then 第二次获取失败的问题
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            //! 说明：避免调用回调多次的问题，执行多次的问题
            if (called) {
              return;
            }
            called = true;
            //! 说明：then 里面可能继续返回promise
            resolvePromise(y, promise2, resolve, reject);
          },
          (r) => {
            if (called) {
              return;
            }
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

function isFunction(val) {
  return typeof val === "function";
}

class Promise {
  constructor(executor, parent = "selft") {
    this.id = generateID();
    Promise.pre[this.id] = parent;
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = (value) => {
      if (this.status != PENDING) {
        return;
      }

      this.status = FULFILLED;
      this.value = value;
      this.resolveCallbacks.forEach((cb) => cb(value));
    };

    const reject = (reason) => {
      if (this.status != PENDING) {
        return;
      }

      this.status = REJECTED;
      this.reason = reason;
      this.rejectCallbacks.forEach((cb) => cb(reason));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    //! 说明：避免onFullfilled 和 onRejected 都传null的情况 比如：then(null,null).catch(err=>{...})
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : (data) => data;
    onRejected = isFunction(onRejected)
      ? onRejected
      : (err) => {
          throw err;
        };

    let promise2 = new Promise((resolve, reject) => {
      //! 此时回调执行函数，promise2 还在构造函数中未初始化完，所以promise2处于未定义状态
      if (this.status == FULFILLED) {
        //! 说明：为了确保promise2有值，否则new Promise还没有完成，promise2是拿不到值的
        setTimeout(() => {
          try {
            let value = onFulfilled(this.value);
            //! 说明：value 可能未promise，所以需要单独解析处理
            resolvePromise(value, promise2, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let value = onRejected(this.reason);
            resolvePromise(value, promise2, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let value = onFulfilled(this.value);
              resolvePromise(value, promise2, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let value = onRejected(this.reason);
              resolvePromise(value, promise2, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    }, this.id);

    return promise2;
  }

  catch(onReject) {
    return this.then(null, onReject);
  }

  finally(callback) {
    //! 说明：finally 就是在then 后面执行一下callback
    return this.then(
      (val) => {
        //! 说明：finally 需要把之前的成功或失败的值传递给后面，不然会导致finally 执行后导致值丢失
        return Promise.resolve(callback()).then(() => val);
      },
      (error) => {
        //! 特别说明：Promise.resolve(callback()) 的promise 调用的一直是成功，所以回调放到第一个参数中，而不是第二个参数
        return Promise.resolve(callback()).then(() => {
          throw error;
        });
      }
    );
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    }, "reject");
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    }, "resolve");
  }

  static all(arr) {
    return new Promise((resolve, reject) => {
      let ret = [];
      let flag = true;
      let i = 0;

      function tryResolve(ret, arr) {
        //! 说明：全部处理完才resolve
        if (ret.length === arr.length) {
          resolve(ret);
        }
      }

      while (i < arr.length && flag) {
        let p = arr[i];
        if (p && isFunction(p.then)) {
          p.then(
            (val) => {
              ret.push(val);
              tryResolve(ret, arr);
            },
            (err) => {
              //! 说明：只要一个失败就reject
              ret = err;
              flag = false;
              reject(ret);
            }
          );
        } else {
          ret.push(p);
          tryResolve(ret, arr);
        }
        ++i;
      }
    });
  }

  static race(arr) {
    return new Promise((resolve, reject) => {
      let flag = true;
      let i = 0;
      while (i < arr.length && flag) {
        let p = arr[i];
        if (p && isFunction(p.then)) {
          p.then(
            (val) => {
              resolve(val);
              flag = false;
            },
            (err) => {
              resolve(err);
              flag = false;
            }
          );
        } else {
          resolve(p);
          flag = false;
        }
        ++i;
      }
    });
  }

  static any(arr) {
    if (!(arr instanceof Array)) {
      throw Error("param must be Array");
    }

    return new Promise((resolve, reject) => {
      let rejectCount = 0;
      arr.forEach((p) => {
        if (p && isFunction(p.then)) {
          p.then(
            (v) => {
              resolve(v);
            },
            (e) => {
              ++rejectCount;
              if (rejectCount == arr.length) {
                reject(new AggregateError("All promises were rejected"));
              }
            }
          );
        } else {
          resolve(p);
        }
      });
    });
  }
}

Promise.counter = 0;
Promise.pre = {};

Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Promise;
