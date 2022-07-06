const express = require("express");
const multer = require('multer');
const app = express();
const upload = multer();

app.post("/say", upload.none(), (req, res) => {
	const { name, message } = req.body;
	console.log(`${name}:${message}`);
	const response = "server: fine thank you"
	res.end(response);
});

app.listen(3000, () => {
	console.log("server start success, port: 3000");
});
