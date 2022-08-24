/**
 * 创建日期: 2022-08-23
 * 文件名称：1.handle request.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：处理请求
 */

const express = require('../express');
// const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
	console.log(1);
	next();
	console.log(2);
});

app.use("/", (req, res, next) => {
	console.log(3);
	next();
	console.log(4);
});

app.listen(3000, () => {
	console.log("server start success port 3000");
})

