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
				let then = x.then;
				if (typeof then === 'function') {
					then.call(x, (y) => {
						if (called) {
							return;
						}
						called = true;
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

	then(onResolve, onReject) {
		let promise2 = new Promise((resolve, reject) => {
			if (this.status == FULFILLED) {
				setTimeout(() => {
					try {
						let value = onResolve(this.value);
						resolvePromise(value, promise2, resolve, reject);
					} catch (error) {
						reject(error);
					}
				}, 0);
			} else if (this.status == REJECTED) {
				setTimeout(() => {
					try {
						let value = onReject(this.reason);
						resolvePromise(value, promise2, resolve, reject);
					} catch (error) {
						reject(error);
					}
				}, 0);
			} else {
				this.resolveCallbacks.push(() => {
					setTimeout(() => {
						try {
							let value = onResolve(this.value);
							resolvePromise(value, promise2, resolve, reject);
						} catch (error) {
							reject(error);
						}
					}, 0);
				});
				this.rejectCallbacks.push(() => {
					setTimeout(() => {
						try {
							let value = onReject(this.reason);
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
		//TODO:
	}
}

module.exports = Promise;
