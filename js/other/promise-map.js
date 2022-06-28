/**
 * 创建日期: 2022-06-28
 * 文件名称：promise-map.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：创建控制并发的promise
 */
const { autoRun } = require('../helper')


function pMap(list, mapper, concurrency = Infinity) {
	// list 为 Iterator，先转化为 Array
	list = Array.from(list)
	return new Promise((resolve, reject) => {
		let currentIndex = 0
		let result = []
		let resolveCount = 0
		let len = list.length
		function next() {
			const index = currentIndex
			currentIndex++
			Promise.resolve(list[index]).then(o => mapper(o, index)).then(o => {
				result[index] = o
				resolveCount++
				if (resolveCount === len) { resolve(result) }
				if (currentIndex < len) { next() }
			})
		}
		for (let i = 0; i < concurrency && i < len; i++) {
			next()
		}
	})
}

function parallelMap(arr, fn, concurrency = Number.MAX_SAFE_INTEGER) {
	return new Promise((resolve) => {
		let ret = [];
		let index = -1;
		function next() {
			++index;
			Promise.resolve(arr[index]).then(val => fn(val, index)).then(res => {
				ret.push(res);
				if (ret.length === arr.length) {
					resolve(ret);
				} else if (index < arr.length) {
					next();
				}
			});
		}

		for (let i = 0; i < arr.length && i < concurrency; i++) {
			next();
		}
	});
}

autoRun("1.普通测试并发", () => {
	/* 	pMap([1, 2, 3, 4, 5], x => Promise.resolve(x + 10)).then((res) => {
			console.log("1:", res);
		}); */

	parallelMap([1, 2, 3, 4, 5], x => Promise.resolve(x + 10)).then((res) => {
		console.log("1:", res);
	});
});

/* autoRun("2.promise测试并发", () => {
	pMap([Promise.resolve(1), Promise.resolve(2)], x => x + 1).then(res => {
		console.log("2:", res);
	});
});

autoRun("3.延时测试并发", () => {
	pMap([1, 1, 1, 1, 1, 1, 1, 1], x => sleep(1000), { concurrency: 2 }).then(res => {
		console.log("3:", res);
	});
}); */

