async function asyncFn() {
	console.log(2);
	await new Promise((resolve, reject) => {
		console.log("haha");
		setTimeout(() => {
			resolve(3);
		}, 100);
	}).then((value) => {
		console.log(value)
	});
	console.log(4);
}

asyncFn();

/* const regeneratorRuntime = require('regenerator-runtime')

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}

function _asyncToGenerator(fn) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise(function (resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
			}
			_next(undefined);
		});
	};
}

function asyncFn() {
	return _asyncFn.apply(this, arguments);
}

function _asyncFn() {
	_asyncFn = _asyncToGenerator(
		regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch ((_context.prev = _context.next)) {
						case 0:
							console.log(2);
							_context.next = 3;
							return console.log(3);

						case 3:
							console.log(4);

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee);
		})
	);
	return _asyncFn.apply(this, arguments);
}

asyncFn(); */
