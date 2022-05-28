const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "rejected";

function resolvePromise(x, promise2, resolve, reject) {
	if (x === promise2) {
		console.error("Chaining cycle detected for promise #<Promise>");
		return reject(new TypeError("Chaining cycle detected for promise #<Promise>"));
	}

	if (x instanceof Promise) {
		if (x.status === PENDING) {
			x.then((val) => {
				resolve(val);
			}, (error) => {
				reject(error);
			});
		} else if (x.status === FULFILLED) {
			resolve(x.value);
		} else if (x.status === REJECTED) {
			reject(x.reason);
		}
	} else {
		let called = false;
		if ((x !== null && typeof x === "object") || typeof x === "function") {
			try {
				//! 说明：为了避免x.then 第二次获取失败的问题
				let then = x.then;
				if (typeof then === 'function') {
					then.call(x, (y) => {
						//! 说明：避免调用回调多次的问题，执行多次的问题
						if (called) {
							return;
						}
						called = true;
						//! 说明：then 里面可能继续返回promise
						resolvePromise(y, promise2, resolve, reject);
					}, (r) => {
						if (called) {
							return;
						}
						called = true;
						reject(r);
					});
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
}

function isFunction(val) {
	return typeof val === "function";
}
class Promise {
	constructor(executor) {
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
			this.resolveCallbacks.forEach(cb => cb(value));
		}

		const reject = (reason) => {
			if (this.status != PENDING) {
				return;
			}

			this.status = REJECTED;
			this.reason = reason;
			this.rejectCallbacks.forEach(cb => cb(reason));
		}

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		//! 说明：避免onFullfilled 和 onRejected 都传null的情况 比如：then(null,null).catch(err=>{...})
		onFulfilled = isFunction(onFulfilled) ? onFulfilled : (data) => data;
		onRejected = isFunction(onRejected) ? onRejected : (err) => {
			throw err
		};

		let promise2 = new Promise((resolve, reject) => {
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
		});

		return promise2;
	}

	catch(onReject) {
		return this.then(null, onReject);
	}
}

module.exports = Promise;
