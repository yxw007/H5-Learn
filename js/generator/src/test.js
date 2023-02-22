const regeneratorRuntime = require("regenerator-runtime");
var _marked = regeneratorRuntime.mark(generator);

function generator(args) {
  var a, b;
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          console.log(args);
          _context.next = 3;
          return 1;

        case 3:
          a = _context.sent;
          _context.next = 6;
          return 2;

        case 6:
          b = _context.sent;
          console.log(a);

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
// console.log(g.return())

// g.throw("xxx");
