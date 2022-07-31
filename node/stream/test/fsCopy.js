/**
 * 创建日期: 2022-07-26
 * 文件名称：fsCopy.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：利用最原始的方式分片copy文件内容至另外一个文件
 */

const fs = require("fs");
const path = require("path");
const { autoRunPromise } = require("../../common");

const sourcePath = path.join(__dirname, "../res/Source.txt");
const targetPath = path.join(__dirname, "../res/Target.txt");

(async () => {
	/* await autoRunPromise("1.最原始的方式[整文件]copy文件", (next) => {
		fs.open(sourcePath, "r", (error, fd) => {
			if (error) {
				console.error("open source error:", error);
				return;
			}

			fs.read(fd, (error2, bytesRead, buffer) => {
				if (error2) {
					console.error("read source error:", error);
					return;
				}

				//! 说明：bytesRead 实际读取到的字节数
				console.log("read source bytesRead:", bytesRead);
				console.log("read source buffer:", buffer);
				console.log("read source buffer.len:", buffer.length); //16384 => 16k

				fs.open(targetPath, "w", (wError, wFd) => {
					if (wError) {
						console.error("open target error:", wError);
						return;
					}

					//! 说明: 如果不传有效的bytesRead值，当source文件字节数不满16k时,会把16k的默认数据也写进目标文件中，所以此处需要传byteRead
					fs.write(wFd, buffer, 0, bytesRead, (wError2) => {
						if (wError2) {
							console.error("write target error2:", wError2);
						}

						console.log("write target success !");

						//1.close target file
						fs.close(wFd);

						//2.close source file
						fs.close(fd);

						next();
					});
				});
			});
		});
	});

	await autoRunPromise("2.最原始的方式[分片]copy文件", (next) => {

		function closeFile(fd) {
			fs.close(fd);
		}

		fs.open(sourcePath, "r", (error, fd) => {
			if (error) {
				console.error("open source error:", error);
				closeFile(fd);
				return;
			}

			fs.open(targetPath, "w", (wError, wFd) => {
				if (wError) {
					console.error("open target error:", wError);
					closeFile(wFd);
					closeFile(fd);
					return;
				}

				let cacheSize = 3;
				let cacheBuff = Buffer.alloc(cacheSize);
				let offset = 0;

				function copy(callback) {

					console.log("------------------------------");

					fs.read(fd, cacheBuff, 0, cacheBuff.length, offset, (error2, bytesRead, buffer) => {
						if (error2) {
							console.error("read source error:", error);
							callback(false, "read source error:" + error);
							return;
						}

						if (bytesRead === 0) {
							callback(true);
							return;
						}

						//! 说明：bytesRead 实际读取到的字节数
						console.log("read source bytesRead:", bytesRead);
						console.log("read source buffer:", buffer);
						console.log("read source buffer.len:", buffer.length); //16384 => 16k

						let lastOffset = offset;
						offset += bytesRead;

						//! 说明：最后一次不够cacheSize，所以值截取出有效的数据
						if (bytesRead < cacheBuff.length) {
							// cacheBuff = cacheBuff.slice(0, bytesRead);
							cacheBuff = Uint8Array.prototype.slice.call(cacheBuff, 0, bytesRead)
						}

						//! 说明: 如果不传有效的bytesRead值，当source文件字节数不满16k时,会把16k的默认数据也写进目标文件中，所以此处需要传byteRead
						fs.write(wFd, cacheBuff, 0, bytesRead, lastOffset, (wError2) => {
							if (wError2) {
								console.error("write target error2:", wError2);
								callback(false, "write target error2:" + wError2);
								return;
							}

							console.log(`copy content ----[${cacheBuff.toString()}]----`);
							console.log("write target success !");
							copy(callback);
						});
					});
				}

				copy((success, message) => {
					closeFile(wFd);
					closeFile(fd);
					next();

					if (!success) {
						console.error("copy fail! ", message);
						return;
					}

					console.log("copy success !");
				});
			});
		});
	}); */

	/* await autoRunPromise("3.通过createReadStream的方式读取[整文件]文件", (next) => {
		const rs = fs.createReadStream(sourcePath, { highWaterMark: 4 });
		rs.on("open", (fd) => {
			console.log("open:fd=", fd);
		});
		rs.on("ready", () => {
			console.log("ready");
		})
		rs.on("data", (chunk) => {
			console.log("data:chunk=", chunk.toString());
		});
		rs.on("error", (err) => {
			console.log("error:err=", err);
		});
		rs.on("close", () => {
			console.log("close");

			next();
		});
	}); */

	await autoRunPromise("2.通过createWriteStream的方式写入文件", (next) => {
		//highWaterMark 高水位线，预计写入的最大字节数，超过此数就会占用更多的内存空间
		const ws = fs.createWriteStream(targetPath, { highWaterMark: 2 });
		ws.write("123", null, () => {
			console.log("1");
		});
		ws.write("456", null, () => {
			console.log("2");
		});
		ws.write("789", null, () => {
			console.log("3");
		});
		ws.write("0", null, () => {
			console.log("4");
			next();
		});
		ws.on("drain", () => {
			console.log("drain");
		});
		//说明：会按顺序输出1 2 3 4
		//1.首次写入不管写入多少字节，都会依次新写入
		//2.如果文件正在写入，以后写入的数据将会缓存队列cache中，等正在写入chunk完成后依次pop清空缓存队列
		//3.清空完缓存队列后回调drain事件
	});

	/* await autoRunPromise("4.通过Stream copy整个文件", (next) => {
		const rs = fs.createReadStream(sourcePath);
		const ws = fs.createWriteStream(targetPath);
		rs.on("data", (chunk) => {

			console.log("read: data chunk=", chunk.toString());

			ws.write(chunk, (error) => {
				if (error) {
					console.log("write:error=", error);
				}
				console.log("write finish");
				ws.close();
			});
		});

		rs.on("close", () => {
			console.log("close rs");
			next();
		});

		ws.on("close", () => {
			console.log("close ws");
			rs.close();
		});
	}); */

	/* await autoRunPromise("5.通过Stream [分片]copy整个文件", (next) => {
		const rs = fs.createReadStream(sourcePath, { highWaterMark: 4 });
		const ws = fs.createWriteStream(targetPath, { highWaterMark: 2 });

		rs.on("data", (chunk) => {
			console.log("read: data chunk=", chunk.toString());

			const canContinueWrite = ws.write(chunk, () => {
				console.log("write finish");
			});

			//说明：没有实现读多次，然后第一次全部写入文件，剩余的写入缓存，清空缓存。然后再次恢复读取的过程?
			if (!canContinueWrite) {
				rs.pause();
				console.log("fs pause");
				ws.once("drain", () => {
					console.log("fs resume");
					rs.resume();
				});
			}
		});

		//读取结束
		rs.on("end", () => {
			console.log("end rs");
			ws.end();
		});

		rs.on("close", () => {
			console.log("close rs");
			next();
		});

		ws.on("close", () => {
			console.log("close ws");
			next();
		});
	}); */

	/* await autoRunPromise("6.通过Stream pipe[分片]copy整个文件", (next) => {
		const rs = fs.createReadStream(sourcePath, { highWaterMark: 3 });
		const ws = fs.createWriteStream(targetPath, { highWaterMark: 2 });

		rs.pipe(ws);

		rs.on("close", () => {
			console.log("close rs");
		});

		ws.on("close", () => {
			console.log("close ws");
			next();
		});
	}); */
})();
