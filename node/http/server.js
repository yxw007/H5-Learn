const KOA = require("koa");
const Static = require("koa-static");
const Router = require("koa-router");
const { koaBody } = require("koa-body");
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


router.post("/form-urlencoded", async (ctx) => {
	ctx.body = ctx.request.body;
	console.log(ctx.body);
});

router.post("/formdata", async (ctx) => {
	ctx.body = ctx.request.body;
	console.log(ctx.body);
});

//TODO: 研究到此处，需搞懂具体格式
router.post("/formdata-singlefile", async (ctx) => {
	ctx.body = ctx.request.body;
	console.log(ctx.body);
	console.log(ctx.request.files);
});

router.post("/raw-text", (ctx) => {
	ctx.body = ctx.request.body;
	console.log(ctx.body);
});

router.post("/raw-javascript", (ctx) => {
	ctx.body = ctx.request.body;
	console.log(ctx.body);
});

app.use(koaBody({
	urlencoded: true,
	multipart: true,
	formidable: {
		uploadDir: resolve("static/res")
	}
}));
app.use(router.routes());
app.use(Static(resolve("static")));

app.listen(3000, () => {
	console.log("server start success,port:3000");
});
