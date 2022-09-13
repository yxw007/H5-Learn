const Koa = require('koa');
// const Koa = require("../koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

const user = require("./routes/user");
const article = require("./routes/article");

router.use("/user", user.routes());
router.use("/article", article.routes());

//! 注意：koa use 是不支持带路径的中间件函数的，仅支持app.use(function..形式)
// app.use('/manager', (ctx) => {
// 	ctx.body = "manager";
// })

router.get("/about", (ctx) => {
	ctx.body = "about";
})

app.use(router.routes());
app.listen(3000);
