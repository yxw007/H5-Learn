

(() => {

	function f1() {
		return new Promise((resolve) => {
			console.log("f1");
			resolve();
		});
	}

	function f2() {
		/* return new Promise((resolve) => {
			setTimeout(() => {
				console.log("f2");
				resolve();
			}, 1000);
		}); */
		console.log("f2");
	}

	function f3() {
		return new Promise((resolve) => {
			console.log("f3");
			resolve();
		});
	}

	let arr = [f1, f2, f3];
	let fn = arr.reduce((pre, cur) => {
		return pre.then(() => Promise.resolve(cur()))
	}, Promise.resolve());

	fn.then(() => {
		console.log("finish");
	});

})();
