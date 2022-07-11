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

autoRun("8.captureRejections", () => {
	const ee1 = new EventEmitter({ captureRejections: true });
	ee1.on('something', async (value) => {
		throw new Error('kaboom');
	});

	ee1.on('error', console.log);

	const ee2 = new EventEmitter({ captureRejections: true });
	ee2.on('something', async (value) => {
		throw new Error('kaboom');
	});
});

