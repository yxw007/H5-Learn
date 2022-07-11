
const { EventEmitter, once } = require('events');
const { autoRun } = require('../common');


autoRun("1. once事件问题", () => {
	const myEE = new EventEmitter();

	async function foo() {
		//2
		await once(myEE, 'bar');
		console.log('bar');

		// 此 Promise 永远不会被解决，
		// 因为 'foo' 事件在 Promise 被创建之前就已经触发了。
		//4
		await once(myEE, 'foo');
		console.log('foo');
	}

	process.nextTick(() => {
		//! nextTick 是先清空事件，然后再执行事件回调函数，所以导致foo 事件未收到回调问题，也就导致promise不会结束
		//3
		myEE.emit('bar');
		//3
		myEE.emit('foo');
	});

	//1
	foo().then(() => console.log('done'));
});

autoRun("2.解决办法", () => {
	const { EventEmitter, once } = require('events');

	const myEE = new EventEmitter();

	async function foo() {
		//! 一次性把promise全部创建出来
		//2
		await Promise.all([once(myEE, 'bar'), once(myEE, 'foo')]);
		//4
		console.log('foo', 'bar');
	}

	process.nextTick(() => {
		//3
		myEE.emit('bar');
		myEE.emit('foo');
	});

	//1
	foo().then(() => console.log('done'));
})
