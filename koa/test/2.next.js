// const Koa = require('koa');
const Koa = require("../koa");
const app = new Koa();

app.use(async (async, next) => {
	console.log(1);//1
	await next();
	console.log(2);//5
});
app.use(async (ctx, next) => {
	console.log(3);//2
	await next();
	console.log(4);//4
});
app.use(async (ctx, next) => {
	console.log(5);//3
});
app.listen(3000);
