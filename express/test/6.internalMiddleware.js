// const express = require("express");
const express = require("../express");
const app = express();
const path = require("path");

app.get("/getFile", (req, res, next) => {
	console.log("handle request");
	console.log(req.query);
	console.log(req.path);
	let pathname = path.resolve(__dirname, __filename)
	console.log(pathname);

	res.sendFile(pathname);
})

app.get("/getNumber", (req, res, next) => {
	console.log("handle request");
	console.log(req.query);
	console.log(req.path);
	res.send(200);
})

app.get("/getString", (req, res, next) => {
	console.log("handle request");
	console.log(req.query);
	console.log(req.path);
	res.send("abc");
})

app.get("/getJson", (req, res, next) => {
	console.log("handle request");
	console.log(req.query);
	console.log(req.path);
	res.send({ name: "pt", age: 18 });
})

app.listen(3000, () => {
	console.log("start server 3000");
});
