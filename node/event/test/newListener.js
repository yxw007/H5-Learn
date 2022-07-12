const EventEmitter = require('node:events');
const MyEventEmitter = require("../EventEmitter");

const myEmitter = new MyEventEmitter();
let pending = false;
myEmitter.on('newListener', (eventName, listener) => {
	//! 说明：需要添加pending, 否则newListener事件会导致死循环
	if (!pending) {
		pending = true;

		//! 说明：在执行事件之前，先执行另外一个事件
		myEmitter.on('event', () => {
			console.log('B');
			pending = false;
		});
	}
});

myEmitter.on('event', () => {
	console.log('A');
});

myEmitter.emit('event');
