const express = require("express");
const app = express();

app.get("/say", (req, res) => {
	let { name, message, callback } = req.query;
	console.log(`${name}: ${message}`);

	let response = "server: fine thank you ~";
	console.log(response);
	res.end(`${callback}("${response}")`);
});

app.listen(3000, () => {
	console.log("server start success ! port:3000");
});
