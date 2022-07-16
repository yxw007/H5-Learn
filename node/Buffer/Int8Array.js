const { autoRun } = require('../common')

autoRun("1.类型数组 使用自身构造函数创建", () => {
	const arr = new Int8Array(2);
	console.log(arr);

	arr[1] = 0xF;
	console.log(arr);
});

autoRun("2.利用类型数组,操作ArrayBuffer缓存区数据", () => {
	const buf = new ArrayBuffer(2);
	const arr = new Int8Array(buf);
	arr[0] = 12;

	console.log("buf:", buf);
	console.log("arr:", arr);
});

autoRun("3.利用DataView 操作ArrayBuffer缓存区数据", () => {
	const buf = new ArrayBuffer(8);
	const view = new DataView(buf);
	view.setInt8(0, 12);

	console.log(view.getInt8(0));
	console.log("buf:", buf);
});

