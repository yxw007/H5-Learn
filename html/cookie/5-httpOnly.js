const http = require('http');

/* 5. httpOnly */
const server = http.createServer((req, res) => {

	let arr = [];
	res.setCookie = function (name, value, options = {}) {
		let optionsArr = [];
		if (options.httpOnly) {
			optionsArr.push(`httpOnly=${options.httpOnly}`)
		}

		let str = `${name} = ${value}; ${optionsArr.join('; ')} `;
		arr.push(str);
		console.log("cookie:", arr);
		res.setHeader('Set-Cookie', arr);
	}

	if (req.url === '/write') {
		//说明：设置成httpOnly后，前端就无法通过代码获取（目的：为了信息安全）
		res.setCookie("name", "pt", { httpOnly: true });
		res.setCookie("address", "sz");
		return res.end("write ok");
	}

	if (req.url === '/read') {
		return res.end(req.headers['cookie'] ?? 'empty');
	}

	res.end("not found");
});

server.listen(3000, () => {
	console.log("start success port:3000");
});
