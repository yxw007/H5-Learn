const { EventEmitter, errorMonitor } = require('events');
const { autoRun } = require('../common');


class MyEmitter extends EventEmitter { }

autoRun("1.on emit", () => {
	const myEmitter = new MyEmitter();
	myEmitter.on('event', () => {
		console.log('an event occurred!');
	});

	myEmitter.emit('event');
});

autoRun("2.on emit pass parmas", () => {
	const myEmitter = new MyEmitter();
	myEmitter.on('event', function (num, str) {
		console.log('pos2: an event occurred!');
		//! 说明：function 方式注册的回调，this 就是事件实例
		console.log(num, str, this, this === myEmitter);
	});

	var b = "bbb";

	myEmitter.on('event', (num, str) => {
		console.log('pos2: an event occurred!');
		//! 说明：如果采用箭头函数注册的回调，this将不在指向myEmitter
		console.log(num, str, this, this === myEmitter, global === this);
	});

	myEmitter.emit('event', 1, "a");
});

autoRun("3.on twice", () => {
	const myEmitter = new MyEmitter();
	myEmitter.on('event', (num, str) => {
		console.log('occurred pos 1');
		console.log(num, str, this, this === myEmitter);
	});

	myEmitter.on('event', (num, str) => {
		console.log('occurred pos 2');
		console.log(num, str, this, this === myEmitter);
	});

	myEmitter.emit('event', 1, "a");
});

autoRun("4.on once", () => {
	const myEmitter = new MyEmitter();
	myEmitter.once('event', (num, str) => {
		console.log('occurred event');
		console.log(num, str, this, this === myEmitter);
	});

	myEmitter.emit('event', 1, "a");
	myEmitter.emit('event', 2, "b");
});

autoRun("5.on once", () => {
	const myEmitter = new MyEmitter();
	myEmitter.once('event', (num, str) => {
		console.log('occurred event');
		console.log(num, str, this, this === myEmitter);
	});

	myEmitter.emit('event', 1, "a");
	myEmitter.emit('event', 2, "b");
});

autoRun("6.error", () => {
	const myEmitter = new MyEmitter();
	//! 说明：如果不订阅error 事件，会直接导致程序退出
	myEmitter.on('error', (err) => {
		console.error(`there was an error,message: ${err.message}`);
	});
	myEmitter.emit('error', new Error('whoops!'));
});

/* autoRun("7.errorMonitor", () => {
	const myEmitter = new MyEmitter();
	//! errorMonitor 能监听错误，但是不会处理错误
	myEmitter.on(errorMonitor, (err) => {
		console.error(`there was an error,message: ${err.message}`);
	});
	myEmitter.emit('error', new Error('whoops!'));
}); */

/* autoRun("8.captureRejections", () => {
	//TODO: 没搞懂captureRejections这示例有啥卵用
	const ee1 = new EventEmitter({ captureRejections: true });

	ee1.on('something', async function () {
		async function fn1(value) {
			throw new Error('kaboom');
		}

		//利用promise.then(null,注册异常回调处理函数)
		await fn1().then(null, (err) => {
			ee1.emit("error", "xx:" + err);
		});
	});

	ee1.on('error', console.log);

	const ee2 = new EventEmitter({ captureRejections: true });
	ee2.on('something', async (value) => {
		throw new Error('kaboom');
	});

	ee2[Symbol.for('nodejs.rejection')] = console.log;

	ee1.emit("something");
}); */


autoRun("9.捕获错误，然后再发布错误消息", () => {
	const myEmitter = new MyEmitter();
	myEmitter.on('error', (err) => {
		console.error(`there was an error,message: ${err.message}`);
	});
	myEmitter.on("something", function () {
		console.log("do something");
		try {
			throw new Error("whoops!");
		} catch (error) {
			this.emit("error", error);
		}
	});
	myEmitter.emit('something');
});

