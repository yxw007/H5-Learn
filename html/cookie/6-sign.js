const http = require('http');
const { createHmac } = require('crypto');
const secretKey = "123";
const qs = require("querystring");

function sign(item) {
	//说明：不能用base64，需要改用base64url，[+,/,=]
	return createHmac('sha256', secretKey).update(JSON.stringify(item)).digest("base64url");
}

/* 6. sign */
const server = http.createServer((req, res) => {

	let arr = [];
	res.setCookie = function (name, value, options = {}) {
		let optionsArr = [];

		if (options.signed) {
			let signValue = sign(`${name}=${value}`);
			console.log(`signValue:${signValue}`);

			arr.push(`${name}.sign=${signValue}`)
		}

		let str = `${name} = ${value}; ${optionsArr.join('; ')} `;
		arr.push(str);
		console.log("cookie:", arr);

		res.setHeader('Set-Cookie', arr);
	}

	res.getCookie = function (name, options = {}) {
		let cookie = req.headers.cookie;
		//! 说明：将a=b; c=d 用"; "分割拆成对象形式, 变成{a:b,c:d}形式方便使用
		let cookieObj = qs.parse(cookie, '; ');
		console.log("cookieObj:", cookieObj);

		let value = cookieObj[name];

		if (options.signed && value) {
			//! 说明：判断之前的signValue和新生成的signValue是否一样，如果一样说明没有被篡改，否则就是被篡改后的
			let signPreValue = cookieObj[`${name}.sign`];
			let signNewValue = sign(`${name}=${value}`);
			console.log("signPreValue:", signPreValue);
			console.log("signNewValue:", signNewValue);

			if (signPreValue === signNewValue) {
				return cookieObj[name] ?? "empty";
			} else {
				return `invalid cookie name:${name} !`
			}
		} else {
			return value ?? "empty";
		}
	}

	if (req.url === '/write') {
		res.setCookie("name", "pt", { signed: true });
		return res.end("write ok");
	}

	if (req.url === '/read') {
		let ret = res.getCookie('name', { signed: true }) ?? "empty"
		return res.end(ret);
	}

	res.end("not found");
});

server.listen(3000, () => {
	console.log("start success port:3000");
});
