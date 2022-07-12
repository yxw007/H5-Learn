const EventEmitter = require('node:events');
const { autoRun } = require('../common');

autoRun("1. 基本使用", () => {
	const myEmitter = new EventEmitter();
	let m = 0;
	myEmitter.once('event', () => {
		console.log(++m);
	});
	myEmitter.emit('event');
	// 打印: 1
	myEmitter.emit('event');
	// 忽略
});

autoRun("2.prependOnceListener: 仅触发一次, 将事件添加到队列头，最先触发", () => {
	const myEE = new EventEmitter();
	myEE.on("foo", () => console.log("foo 1"));
	myEE.once('foo', () => console.log('a'));
	//每次将触发事件放到队列头
	myEE.prependListener("foo", () => console.log("foo 2"));
	//事件仅添加一次，然后将触发事件放到队列头
	myEE.prependOnceListener('foo', () => console.log('b'));
	myEE.on("foo", () => console.log("foo 3"));
	myEE.emit('foo');
	console.log("----------------------------");
	myEE.emit('foo');
});
