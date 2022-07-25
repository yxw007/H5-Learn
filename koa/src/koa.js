let http = require("http");
class Koa {
  constructor() {
    this.middleware = [];
  }
  use(fn) {
    this.middleware.push(fn);
  }
  listen(port) {
    let middleware = this.middleware;
    let server = http.createServer((req, res) => {
      let ctx = { req, res };
      function dispatch(idx) {
        middleware[idx](ctx, () => dispatch(idx + 1));
      }
      dispatch(0);
    });
    server.listen(port);
  }
}

module.exports = Koa;
