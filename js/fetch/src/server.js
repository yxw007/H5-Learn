const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
	if (req.path !== '/' && !req.path.includes('.')) {
		res.set({
			/* 允许后端发送cookie*/
			// 'Access-Control-Allow-Credentials': true,
			/*任意域名都可以访问,或者基于我请求头里面的域*/
			'Access-Control-Allow-Origin': '*',
			/*允许请求头字段*/
			'Access-Control-Allow-Headers': 'Accept,Content-Encoding,Content-Type,Accept-Encoding',
			/*允许请求方式*/
			'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
			/*预检成功后相同请求无需预检的有效时间(单位：秒)*/
			'Access-Control-Max-Age': 3600,
			/*默认与允许的文本格式json和编码格式*/
			'Content-Type': 'text/plain; charset=utf-8'
		})
	}
	req.method === 'OPTIONS' ? res.status(204).end() : next()
});

app.post('/login', (req, res) => {
	const { user, password } = req.body;
	console.log('user:' + user + ',password: ' + password);
	if (user === "pt" && password === "123456") {
		res.json({ status: 0, message: "login success !" });
	} else {
		res.json({ status: 1, message: "login fail !" });
	}
});

app.listen(3000, () => {
	console.log("Started on PORT 3000");
})
