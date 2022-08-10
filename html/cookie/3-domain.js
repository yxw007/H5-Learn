const http = require('http');

/* 3. domain */
const server = http.createServer((req, res) => {

	res.setCookie = function (name, value, options = {}) {
		let optionsArr = [];
		if (options.domain) {
			optionsArr.push(`domain=${options.domain}`)
		}

		let str = `${name} = ${value}; ${optionsArr.join('; ')} `;
		res.setHeader('Set-Cookie', str);
	}

	if (req.url === '/write') {
		let host = req.headers['host'];

		if (host === 'a.com:3000') {
			res.setCookie("address", "sz", { domain: ".a.com" });
		} else if (host === 'b.a.com:3000') {
			res.setCookie("province", "gz", { domain: ".b.a.com" });
		} else {
			res.setCookie("name", "pt");
		}

		return res.end("write ok");
	}

	//说明：
	//1.a.com 只能读取a.com 下的cookie，而b.a.com 既能读取自己域名下的cookie又能读取父域名下的cookie
	//2.不是同域下的cookie访问不到
	//3.未设置过期，数据会一直缓存起来
	if (req.url === '/read') {
		return res.end(req.headers['cookie'] ?? 'empty');
	}

	res.end("not found");
});

server.listen(3000, () => {
	console.log("start success port:3000");
});
