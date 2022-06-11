
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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getList() {
	let ret = [];
	let size = getRandomInt(2, 6);
	for (let i = 0; i < size; i++) {
		ret.push(i);
	}
	return ret;
}

//! 说明：串行处理
arr.reduce((pre, cur) => {
	return pre.then((ret) => {
		cur.list = getList();
		return Promise.resolve(ret.concat(cur));
	})
}, Promise.resolve([])).then((ret) => {
	console.log("arr:", ret);
});

