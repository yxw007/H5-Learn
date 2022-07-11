const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
let pending = false;
myEmitter.on('newListener', (event, listener) => {
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

	myEmitter.removeAllListeners("event");
});

setTimeout(() => {
	myEmitter.on('event', () => {
		console.log('AA');
	});
}, 0);

myEmitter.emit('event');
