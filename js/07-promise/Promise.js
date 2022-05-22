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
		let promise = new Promise((resolve, reject) => {
			if (this.status == FULFILLED) {
				let value = onResolve(this.value);
				resolve(value);
				return;
			} else if (this.status == REJECTED) {
				let value = onReject(this.reason);
				reject(value);
				return;
			}

			this.resolveCallbacks.push(() => {
				let value = onResolve(this.value);
				resolve(value);
			});
			this.rejectCallbacks.push(() => {
				let value = onReject(this.reason);
				reject(value);
			});
		});

		return promise;
	}

	catch(onReject) {
		//TODO:
	}
}

module.exports = Promise;
