const express = require("express");

const app = express();

app.get("/getUsers/:province/:city", (req, res, next) => {
	console.log(req.params);
	console.log(req.query);
	res.end(JSON.stringify(req.params) + "\n" + JSON.stringify(req.query));
});

app.listen(3000, () => {
	console.log("start server 3000");
});
