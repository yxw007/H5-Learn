const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.listen(4000, () => {
	console.log("static server start success, port:4000");
});
