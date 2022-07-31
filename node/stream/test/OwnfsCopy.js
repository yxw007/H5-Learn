/**
 * 创建日期: 2022-07-26
 * 文件名称：fsCopy.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：利用最原始的方式分片copy文件内容至另外一个文件
 */

const path = require("path");

const createReadStream = require("../ReadStream");
const createWriteStream = require("../WriteStream");

const { autoRunPromise } = require("../../common");

const sourcePath = path.join(__dirname, "../res/Source.txt");
const targetPath = path.join(__dirname, "../res/Target.txt");

(async () => {

	await autoRunPromise("1.通过createReadStream的方式读取[整文件]文件", (next) => {
		const rs = createReadStream(sourcePath, { highWaterMark: 4 });
		rs.on("open", (fd) => {
			//第1个事件：文件打开(fd 文件描述符,用于后面的文件操作)
			console.log("open:fd=", fd);
		});
		rs.on("ready", () => {
			//第2个事件：准备读取数据
			console.log("ready");
		})
		rs.on("data", (chunk) => {
			//第3个事件：读取到数据
			console.log("data:chunk=", chunk.toString());
		});
		rs.on("error", (err) => {
			//读取出错的事件
			console.log("error:err=", err);
		});
		rs.on("close", () => {
			//读取完毕, 关闭事件
			console.log("close");
			next();
		});
	});

	await autoRunPromise("2.通过createWriteStream的方式写入文件", (next) => {
		//highWaterMark 高水位线，预计写入的最大字节数，超过此数就会占用更多的内存空间
		const ws = createWriteStream(targetPath, { highWaterMark: 2 });
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


	await autoRunPromise("3.通过Stream [分片]copy整个文件", (next) => {
		const rs = createReadStream(sourcePath, { highWaterMark: 4 });
		const ws = createWriteStream(targetPath, { highWaterMark: 2 });

		rs.on("data", (chunk) => {
			console.log("read: data chunk=", chunk.toString());

			//1.调用write会范围标识值，判断能否继续写入(其实就是当前写入的内容+cache值是否大于highWaterMark)
			const canContinueWrite = ws.write(chunk, null, (error) => {
				if (error) {
					console.log("write:error=", error);
				}
				console.log("write finish");
			});

			//2.如果已经超过highWaterMark,就让读取先暂停，等清空缓存队列后再继续读取和写入
			if (!canContinueWrite) {
				rs.pause();
				console.log("fs pause");

				//WriteStream缓存清空完后会调用drain事件
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
		});

		//写入结束
		ws.on("close", () => {
			console.log("close ws");
			next();
		});
	});

	await autoRunPromise("4.通过Stream pipe[分片]copy整个文件", (next) => {
		const rs = createReadStream(sourcePath, { highWaterMark: 3 });
		const ws = createWriteStream(targetPath, { highWaterMark: 1 });

		rs.pipe(ws);

		rs.on("close", () => {
			console.log("close rs");
		});

		ws.on("close", () => {
			console.log("close ws");
			next();
		});
	});
})();
