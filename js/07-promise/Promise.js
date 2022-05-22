const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "rejected";

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

			this.status = this.REJECTED;
			this.reason = reason;
			this.rejectCallbacks.forEach(cb => cb(reason));
		}

		executor(resolve, reject);
	}

	then(onResolve, onReject) {
		let promise = new Promise((resolve, reject) => {
			if (this.status == FULFILLED) {
				onResolve(this.value);
				return;
			} else if (this.status == REJECTED) {
				onReject(this.reason);
				return;
			}

			//TODO: 如何实现then 的链式调用呢?
			this.resolveCallbacks.push(() => {
				onResolve(this.value);
			});
			this.rejectCallbacks.push(() => {
				onReject(this.reason);
			});
		});

		return promise;
	}

	catch(onReject) {
		//TODO:
	}
}

module.exports = Promise;
