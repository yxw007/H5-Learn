const { autoRun } = require("../helper");



// 截取路径的dir
autoRun("1.字符串替换", () => {
	let path = "D:\\Work\\Projects\\src\\dd\\route.js";

	//说明：仅会替换第一个匹配
	let replace1 = path.replace("\\", "/");
	console.log("replace1:", replace1);

	//说明：仅会替换所有的匹配项
	let replace2 = path.replaceAll("\\", "/");
	console.log("replace2:", replace2);
});

autoRun("2.正则替换", () => {
	let path = "D:\\Work\\Projects\\src\\dd\\route.js";

	//说明：仅会替换第一个匹配
	let replace1 = path.replace(/\\/, "/");
	console.log("replace1:", replace1);

	//说明：仅会替换所有的匹配项
	let replace2 = path.replace(/\\/g, "/");
	console.log("replace2:", replace2);
});

autoRun("3.正则替换转换路径", () => {
	const regex = /(\/pages\/)(.*)\//gm;
	const str = `/pages/receive-address/edit/index`;
	let m;

	while ((m = regex.exec(str)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}

		if (m.length > 2) {
			let target = m[2];
			let arr = target.replace(/-/g, "/").split("/");
		}
	}
});
