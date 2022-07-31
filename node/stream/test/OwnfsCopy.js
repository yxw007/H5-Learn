/**
 * 创建日期: 2022-07-26
 * 文件名称：fsCopy.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：利用最原始的方式分片copy文件内容至另外一个文件
 */

const fs = require("fs");
const path = require("path");

const createReadStream = require("../ReadStream");
const createWriteStream = require("../WriteStream");

const { autoRunPromise } = require("../../common");

const sourcePath = path.join(__dirname, "../res/Source.txt");
const targetPath = path.join(__dirname, "../res/Target.txt");



(async () => {

	/* await autoRunPromise("3.通过createReadStream的方式读取[整文件]文件", (next) => {
		const rs = createReadStream(sourcePath, { highWaterMark: 4 });
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

	await autoRunPromise("5.通过Stream [分片]copy整个文件", (next) => {
		const rs = createReadStream(sourcePath, { highWaterMark: 4 });
		const ws = createWriteStream(targetPath, { highWaterMark: 2 });

		rs.on("data", (chunk) => {
			console.log("read: data chunk=", chunk.toString());

			const canContinueWrite = ws.write(chunk, null, (error) => {
				if (error) {
					console.log("write:error=", error);
				}
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
	});

	/*await autoRunPromise("6.通过Stream pipe[分片]copy整个文件", (next) => {
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
