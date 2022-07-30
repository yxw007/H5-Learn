const express = require("express");
const multer = require('multer');
const app = express();
const upload = multer();

app.use(express.static(__dirname));

app.post("/my-handling-form-page", upload.none(), (req, res) => {
	const body = req.body;
	console.log("body:", JSON.stringify(body));
	res.end("ok");
})

app.listen(3000, () => {
	console.log("server start success ,port 3000");
});
