const http = require('http');

/* 1. 正常读写 */
const server = http.createServer((req, res) => {
	if (req.url === '/write') {
		res.setHeader('Set-Cookie', "name=pt;");
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

