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
