const { readFile, writeFile } = require("fs/promises");
const path = require("path");

(async () => {
	let content = await readFile(path.resolve(__dirname, "./iconfont.css"), { encoding: "utf8" });
	let reg = new RegExp("^.icon-\(.*\):before", "gm");
	let match = null;
	let res = [];
	while ((match = reg.exec(content))) {
		res.push(`iconfont icon-${match[1]}`);
	}

	/* let content2 = await readFile(path.resolve(__dirname, "./iconfont2.css"), { encoding: "utf8" });
	let res2 = [];
	while ((match = reg.exec(content2))) {
		res2.push(`iconfont icon-${match[1]}`);
	}

	let set = new Set(res);
	let dif = new Set();
	for (const key of res2) {
		if (!set.has(key)) {
			dif.add(key);
		}
	}
	console.log(dif.values()); */
	writeFile("D:/Work/Projects/cmwg_nuxt_official_website/master/name.json", JSON.stringify(res))
})();
