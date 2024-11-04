
function isString(data) {
	return getType(data) === "String";
}

function isObject(data) {
	return getType(data) === "Object";
}

function isArray(data) {
	return Array.isArray(data);
}

function getType(data) {
	return Object.prototype.toString.call(data).slice(8, -1);
}

/**
 * 将arg2合并至arg1，并返回合并结果
 * @param {*} arg1 
 * @param {*} arg2 
 */
function merge(arg1, arg2) {
	if (!arg1) {
		return arg2;
	}

	if (!arg2) {
		return arg1;
	}

	if (getType(arg1) !== getType(arg2)) {
		return arg2;
	}

	let res;

	if (isArray(arg1)) {
		res = [];
		for (let i = 0; i < Math.min(arg1.length, arg2.length); i++) {
			res[i] = merge(arg1[i], arg2[i]);
		}
		if (res.length < arg2.length) {
			res.push(...arg2.slice(arg1.length))
		} else if (res.length < arg1.length) {
			res.push(...arg1.slice(arg2.length))
		}
	} else if (isObject(arg1)) {
		res = {};
		let useKeys = new Set();
		for (let key of Object.keys(arg2)) {
			let a1 = arg1[key];
			let a2 = arg2[key];
			res[key] = merge(a1, a2);
			useKeys.add(key);
		}
		for (const key of Object.keys(arg1)) {
			if (!useKeys.has(key)) {
				res[key] = arg1[key];
			}
		}
		useKeys.clear();
	} else {
		console.log("arg1:", arg1);
		console.log("arg2:", arg2);
		throw new Error("");
	}

	return res;
}

let arg1 = [{
	a: 1,
	b: "b",
	c: {
		d: "d",
		e: null,
	}
}, {
	f: "f"
}]

let arg2 = [{
	a: "a",
	b: null,
	c: {
		e: "e"
	}
}, {
	h: "h",
	i: {
		j: "j"
	}
}]

let res = merge(arg1, arg2);
console.log(JSON.stringify(res, null, 2));

let res2 = Object.assign(arg1, arg2);
console.log(JSON.stringify(res2, null, 2));
