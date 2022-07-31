const fs = require("fs");
const { EventEmitter } = require('events');
class WriteStream extends EventEmitter {
	constructor(path, options = {}) {
		super();
		this.path = path;
		this.flag = options.flag ?? "w";
		this.encoding = options.encoding ?? "utf8";
		this.fd = options.fd ?? null;
		this.start = options.start ?? 0;
		// this.end = options.end ?? null;
		this.highWaterMark = options.highWaterMark ?? 16 * 1024;	//16KB

		this.len = 0;
		this.offset = 0;
		this.writting = false;
		this.cache = [];
		this.needDrain = false;

		this.open();
	}

	open() {
		if (this.fd) {
			return;
		}

		fs.open(this.path, this.flag, (err, fd) => {
			if (err) {
				this.destory(err);
				return;
			}
			this.fd = fd;
			this.emit("open", fd);
		});
	}
	write(chunk, encoding = this.encoding, callback = () => { }) {
		chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);
		this.len += chunk.length;

		let canContinueWrite = this.len < this.highWaterMark;
		this.needDrain = !canContinueWrite;

		let wrapperCallback = () => {
			callback && callback();
			this.clearCache();
		}

		if (!this.writting) {
			this.__write(chunk, wrapperCallback);
		} else {
			this.cache.push({ chunk, callback: wrapperCallback });
		}

		return canContinueWrite;
	}
	clearCache() {
		if (this.cache.length <= 0) {
			//说明：需要drain才重置状态
			if (this.needDrain) {
				this.needDrain = false;
				this.writting = false;
				this.emit("drain");
			}
			return;
		}

		const { chunk, callback } = this.cache.shift();
		this.__write(chunk, callback);
	}
	__write(chunk, callback) {
		if (!this.fd) {
			this.once("open", () => {
				this.__write(chunk, callback);
			});
			return;
		}

		fs.write(this.fd, chunk, 0, chunk.length, this.offset, (error, written) => {
			if (error) {
				this.destory(error);
				return;
			}

			this.offset += written;
			this.len -= written;
			callback();
		});
	}
	end(chunk = "", encoding, callback) {
		this.write(chunk, encoding, () => {
			callback && callback();
			this.destory();
		});
	}
	close(callback) {
		if (!this.fd) {
			return;
		}

		fs.close(this.fd, () => {
			callback && callback();
		});
	}
	destory(error) {
		if (error) {
			this.emit("error", error);
		}
		this.close();
	}
}

function createWriteStream() {
	return new WriteStream(...arguments);
}

module.exports = createWriteStream;
