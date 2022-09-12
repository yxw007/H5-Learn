/**
 * 创建日期: 2022-09-12
 * 文件名称：3.promise.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

// const Koa = require("koa");
const Koa = require("../koa");
const app = new Koa();

app.use(async function (ctx, next) {
	console.log(1);//1
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(2); //2
			resolve()
		}, 3000)
	})
	console.log(3); //3
	await next();
	console.log(4) //6
})

//! 中间件函数全部包裹成promise
app.use(function (ctx, next) {
	console.log(5); //4
	next();
	console.log(6) //5
})

app.listen(3000, () => {
	console.log("start server 3000");
});
