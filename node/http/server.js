const KOA = require("koa");
const Static = require("koa-static");
const Router = require("koa-router");
const { koaBody } = require("koa-body");
const formBody = require("body/form");
const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);

const app = new KOA();
const router = new Router();

router.get("/", (ctx) => {
	ctx.body = "hello";
});

router.get("/get", (ctx) => {
	ctx.body = ctx.query;
	console.log(ctx.request.body);
});

router.post("/post", async (ctx) => {
	function handle() {
		return new Promise((resolve) => {
			//TODO: 修改到此处?
			formBody(ctx.req, () => {
				console.log(arguments);
				resolve();
			})
		});
	}

	let bd = await handle();
	ctx.body = bd;
	console.log(bd);
});

app.use(koaBody());
app.use(router.routes());
app.use(Static(resolve("static")));

app.listen(3000, () => {
	console.log("server start success,port:3000");
});
