// const express = require("express");
const express = require("../express");
const app = express();
const path = require("path");
// const bodyParser = require("body-parser");
const bodyParser = require("../express/middleware/bodyParser");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/login", (req, res, next) => {
	console.log(req.body);
	let { name, password } = req.body;
	if (name === "potter" && password === "123456") {
		res.end("login success");
	} else {
		res.end("login fail");
	}
});

app.get("/login", (req, res, next) => {
	let { name, password } = req.query;
	if (name === "potter" && password === "123456") {
		res.end("login success");
	} else {
		res.end("login fail");
	}
});

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
