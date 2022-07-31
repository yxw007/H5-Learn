
const { EventEmitter } = require('events');
const fs = require("fs");

class ReadStream extends EventEmitter {
	constructor(path, options = {}) {
		super();
		this.path = path;
		this.flag = options.flag ?? "r";
		this.fd = options.fd ?? null;
		this.highWaterMark = options.highWaterMark ?? 64 * 1024; //64KB
		this.start = options.start ?? 0;
		this.end = options.end ?? null;
		this.offset = 0;
		this.flowing = false;

		this.open();
		this.on("newListener", (type) => {
			if (type === "data") {
				this.flowing = true;
				this.read();
			}
		});
	}
	open() {
		if (this.fd) {
			return;
		}

		fs.open(this.path, this.flag, (error, fd) => {
			if (error) {
				this.destroy(error);
				return;
			}
			this.fd = fd;
			this.emit("open", fd);
			this.emit("ready");
		});
	}
	read() {
		if (!this.fd) {
			this.once("open", () => {
				this.read();
			});
			return;
		}

		//说明：如果剩余长度小于highWaterMark就使用highWaterMark,否则就是剩余长度
		let size = this.end ? Math.min(this.end - this.offset + 1, this.highWaterMark) : this.highWaterMark;
		let buffer = Buffer.alloc(size);

		fs.read(this.fd, buffer, 0, buffer.length, this.offset, (error, bytesRead, buf) => {
			if (error) {
				this.destroy(error);
				return;
			}
			if (bytesRead === 0) {
				this.emit("end");
				this.destroy();
				return;
			}

			//说明：最后不够buffer的长度就截取实际长度内容
			buf = bytesRead < buf.length ? Uint8Array.prototype.slice.call(buf, 0, bytesRead) : buf;
			this.offset += bytesRead;
			this.emit("data", buf);

			if (this.flowing) {
				this.read();
			}
		});
	}
	pause() {
		this.flowing = false;
	}
	resume() {
		this.flowing = true;
		this.read();
	}
	pipe(ws) {
		if (!ws) {
			throw new Error("params invalid !");
		}

		this.on("data", (chunk) => {
			console.log("read once data:", chunk.toString());
			const canContinueWrite = ws.write(chunk, () => {
				console.log("write once");
			});

			if (!canContinueWrite) {
				this.pause();
				console.log("rs pause");
				ws.once("drain", () => {
					console.log("rs resume");
					this.resume();
				});
			}
		})
	}
	destroy(error) {
		if (error) {
			this.emit("error", error);
			return;
		}
		if (this.fd) {
			fs.close(this.fd, () => {
				this.emit("close");
			});
		}
	}
}

function createReadStream() {
	return new ReadStream(...arguments);
}

module.exports = createReadStream;
