function* generator(args) {
	let a = yield;
	console.log(a);
	let b = yield;
	console.log(b);
}

const g = generator();
console.log(g);
console.log(g.next(1));
console.log(g.next(2));
console.log(g.next(3));


"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator);

function generator(args) {
	var a, b;
	return regeneratorRuntime.wrap(function generator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return;

				case 2:
					a = _context.sent;
					console.log(a);
					_context.next = 6;
					return;

				case 6:
					b = _context.sent;
					console.log(b);

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked);
}

var g = generator();
console.log(g);
console.log(g.next(1));
console.log(g.next(2));
console.log(g.next(3));
