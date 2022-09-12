/**
 * 创建日期: 2022-09-12
 * 文件名称：4.static.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

// const Koa = require("koa");
const Koa = require("../koa");
const app = new Koa();
// const static = require("koa-static");
const static = require("../koa/middleware/static");
const path = require("path");

app.use(static(path.resolve(__dirname, "..")));

app.listen(3000, () => {
	console.log("start server 3000");
});
