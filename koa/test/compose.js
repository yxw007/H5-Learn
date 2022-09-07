

(() => {

	function f1(ctx, next) {
		console.log("1");//1
		next();
		console.log("2");//4
	}

	async function f2(ctx, next) {
		console.log("3");//2
		await next();
		console.log("4");//6
	}

	function f3(ctx, next) {
		console.log("5");//3
		return Promise.resolve(() => {
			console.log("6");//5
			next();
		});
	}

	let middlewares = [f1, f2, f3];

	/* let fn = arr.reduce((pre, cur) => {
		return function (...args) {
			return Promise.resolve(pre(...args)).then(() => Promise.resolve(cur(...args)));
		}
	}); */

	function compose(middleware) {
		return function (ctx) {
			const dispatch = (index) => {
				if (index >= middlewares.length) {
					return Promise.resolve();
				}

				let fn = middlewares[index];
				try {
					return Promise.resolve(fn(ctx, dispatch.bind(null, index + 1)));
				} catch (error) {
					return Promise.reject(error);
				}
			}

			return dispatch(0);
		}
	}

	let fnMiddleware = compose(middlewares);
	fnMiddleware({ name: 'ctx' }).then(() => {
		console.log("finish");
	});

})();
