const express = require("express");
const app = express();

app.get("/image", (req, res) => {
	const { name } = req.query;
	console.log(`${name}`);
	const response = "server: fine thank you"
	res.end(response);
});

app.listen(3000, () => {
	console.log("server start success, port:3000");
});
