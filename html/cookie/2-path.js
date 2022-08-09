const http = require('http');

/* 2. 写path */
const server = http.createServer((req, res) => {

	res.setCookie = function (name, value, options = {}) {
		let optionsArr = [];
		if (options.path) {
			optionsArr.push(`path=${options.path}`)
		}

		let str = `${name} = ${value}; ${optionsArr.join('; ')} `;
		res.setHeader('Set-Cookie', str);
	}

	//1.写/下(默认)
	if (req.url === '/write') {
		res.setCookie("name", "pt");
		return res.end("write ok");
	}

	//2.写/write下
	if (req.url === '/write/write') {
		res.setCookie("address", "sz", { path: "/write" });
		return res.end("write ok");
	}

	//仅能读取"/"目录下的cookie
	if (req.url === '/read') {
		return res.end(req.headers['cookie'] ?? 'empty');
	}

	// "/" 和 "/write" 目录下的cookie 都能读取到
	if (req.url === '/write/read') {
		return res.end(req.headers['cookie'] ?? 'empty');
	}

	res.end("not found");
});

server.listen(3000, () => {
	console.log("start success port:3000");
});

