
const arr = [{ name: "1" }, { name: "2" }];

/* async function getSonData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3]);
		}, 100);
	});
} */

/* arr.reduce(async (pre, cur) => {
	cur.list = await getSonData();
	return cur
}, {});

setTimeout(() => {
	console.log(arr)
}, 1000); */

//! 说明：串行处理
arr.reduce((pre, cur) => {
	return pre.then(() => {
		cur.list = [1, 2, 3];
		return Promise.resolve(cur);
	})
}, Promise.resolve()).then(() => {
	console.log("arr:", arr);
});

