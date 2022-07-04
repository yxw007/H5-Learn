const express = require("express");
const app = express();
app.use(express.static(__dirname));

app.get("/say", (req, res) => {
	const { name, message } = req.query;
	console.log(`${name}:${message}`);

	res.end(`server: fine thank you `);
});

app.listen(3000, () => {
	console.log("server start success,port:3000");
});
