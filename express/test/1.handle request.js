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

app.get("/user", (req, res, next) => {
	console.log("/user 1");
	console.log("req.params:", req.params);
	console.log("req.path:", req.path);
	console.log("req.url:", req.url);
	next();
});

app.get("/user", (req, res) => {
	console.log("/user 2");
	console.log("req.params:", req.params);
	console.log("req.path:", req.path);
	console.log("req.url:", req.url);
	res.end("user 2");
});

app.get("/manager", (req, res) => {
	console.log("req.params:", req.params);
	console.log("req.path:", req.path);
	console.log("req.url:", req.url);
	res.end("manager");
});

app.listen(3000, () => {
	console.log("server start success port 3000");
})

