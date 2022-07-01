const { fork } = require('child_process');

class MessageQueue {
	constructor() {
		this.messages = [];
	}
	put(message) {
		this.messages.push(message);
	}
	get() {
		return this.messages.pop();
	}
}

const messageQueue = new MessageQueue();
(function mainThread() {
	setInterval(() => {
		let task = messageQueue.get();
		if (task) task();
	}, 1000);
})();

(function IOThread() {
	//1.开启一个子进程
	let browser = fork('F:/Project/H5-Learn/js/eventloop/src/browser.js');

	//父进程监听子线程消息
	browser.on('message', function ({ data }) {
		messageQueue.put(() => {
			console.log(data);
		});
	});

	browser.abc = "hahah"

	//2.往子进程发送消息一条消息
	browser.send({ type: 'click', data: 'clicked' });
})();
