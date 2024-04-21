class TrackablePromise extends Promise {
	constructor(executor) {
		const nodifyHandlers = [];

		super((resolve, reject) => {
			//1
			//! 第一步：包裹一层
			return executor(resolve, reject, (status) => {
				//4
				//! 第三步：执行一次后，调用通知  
				nodifyHandlers.map(handler => handler(status));
			});
		});

		this.nodifyHandlers = nodifyHandlers;
	}

	//! 第二步：注册通知
	notify(nodifyHandler) {
		this.nodifyHandlers.push(nodifyHandler);
	}
}

let t = new TrackablePromise((resolve, reject, nodify) => {
	//2
	function countdown(x) {
		//3
		if (x > 0) {
			nodify(`${20 * x}% remaining`);
			setTimeout(() => countdown(x - 1), 1000);
		} else {
			resolve();
		}
	}

	countdown(5)
});

//5
t.notify((x) => {
	setTimeout(console.log, 0, `a:`, x)
});
// p.notify((x) => setTimeout(console.log, 0, `b:`, x));


t.then(() => setTimeout(console.log, 0, 'completed'));
