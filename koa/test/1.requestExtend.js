/**
 * 创建日期: 2022-09-06
 * 文件名称：1.requestExtend.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */
const url = require("url");
// const Koa = require("koa");
const Koa = require("../koa");
const app = new Koa();

//! 说明：回调参数是ctx，req,res都已封装至ctx中
app.use((ctx) => {
	//-------------------------------------------------------------------------
	//ctx.req == req
	console.log("ctx.req.url:", ctx.req.url);
	//! 注意：ctx.req上原本就是没有query,需要通过url.parse(req.url,true)才能拿到query
	let { query } = url.parse(ctx.req.url);
	console.log("query:", query);

	//ctx.request.req == req
	console.log("ctx.request.req.url:", ctx.request.req.url);

	//ctx.request.url => ctx.request.req.url 通过get属性访问器转发访问req中的url
	console.log("ctx.request.url:", ctx.request.url);
	console.log("ctx.request.query:", ctx.request.query);

	//! 通过代理proto访问至request.url => ctx.request.req.url
	console.log("ctx.url:", ctx.url);
	console.log("ctx.query:", ctx.query);
	//-------------------------------------------------------------------------
	ctx.response.body = "1";
	//! ctx.body = ctx.response.body
	ctx.body = "2";

	//! 结论：body可重复赋值，最终使用最后的值
	console.log("ctx.response.body:", ctx.response.body);
	console.log("ctx.body:", ctx.body);
	//-------------------------------------------------------------------------
});

app.listen(3000, () => {
	console.log("start server 3000");
});
