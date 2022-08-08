const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/say", (req, res) => {
	console.log("url:", req.url);
	console.log("query:", req.query);
	console.log("cookie:", req.headers.cookie);
	res.setHeader("content-type", "text/plain;charset=UTF-8");
	res.end("ok");
});

app.get("/getName", (req, res) => {
	console.log("url:", req.url);
	console.log("query:", req.query);
	console.log("cookie:", req.headers.cookie);
	res.setHeader("content-type", "text/plain;charset=UTF-8");
	res.end("name=pt");
});

app.get("/getAddress", (req, res) => {
	console.log("url:", req.url);
	console.log("query:", req.query);
	console.log("cookie:", req.headers.cookie);
	res.setHeader("content-type", "text/plain;charset=UTF-8");
	res.end("address=sz");
});


app.listen(4000, () => {
	console.log("server start success , port 4000");
});
