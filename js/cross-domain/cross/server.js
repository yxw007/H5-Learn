const express = require("express");
const app = express();
const multer = require('multer');
const upload = multer();

const whiteList = [
	"http://localhost:4000"
];

app.post("/say", upload.none(), (req, res) => {
	const { name, message } = req.body;
	const origin = req.headers.origin;
	console.log("origin:", origin);
	console.log(`${name}:${message}`);

	const response = "server: fine thank you"
	if (whiteList.includes(origin)) {
		// 设置哪个源可以访问我
		res.setHeader('Access-Control-Allow-Origin', origin);
		// 允许携带哪个头访问我
		res.setHeader('Access-Control-Allow-Headers', 'name');
		// 允许哪个方法访问我
		res.setHeader('Access-Control-Allow-Methods', 'POST');
		// 允许携带cookie
		res.setHeader('Access-Control-Allow-Credentials', true);
		// 预检的存活时间
		res.setHeader('Access-Control-Max-Age', 10);
		// 允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name');
		if (req.method === 'OPTIONS') {
			res.end();
		}
	}
	res.end(response);
});

app.listen(3000, () => {
	console.log("server start success, port:3000");
});
