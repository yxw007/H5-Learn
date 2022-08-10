const http = require('http');

/* 4. Max-Age */
const server = http.createServer((req, res) => {

	res.setCookie = function (name, value, options = {}) {
		let optionsArr = [];
		if (options.maxAge) {
			optionsArr.push(`Max-Age=${options.maxAge}`)
		}
		if (options.expires) {
			optionsArr.push(`expires=${options.expires}`);
		}

		let str = `${name} = ${value}; ${optionsArr.join('; ')} `;
		console.log("cookie:", str);
		res.setHeader('Set-Cookie', str);
	}

	if (req.url === '/write') {
		//延迟10s
		res.setCookie("name", "pt", { maxAge: 10 });
		return res.end("write ok");
	}

	if (req.url === '/write-expires') {
		let date = new Date();
		//延迟10s
		date.setTime(date.getTime() + 10 * 1000);

		//能使用 toUTCString\toGMTString(弃用)  不能使用：toDateString、toString、toISOString
		//utc: 协调世界时，最重要的世界标准时间。由于可能网站在不同国家使用，不能按照本地时间来算，所以为了简单统一直接采用世界标准时间算
		res.setCookie("name", "pt", { expires: date.toUTCString() });
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
