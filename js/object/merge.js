
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
 * 将arg2与arg1合并，并返回合并结果
 * @param {*} arg1 
 * @param {*} arg2 
 */
function merge(arg1, arg2) {
	if (!!!arg1) {
		return arg2;
	}

	if (!arg2 || arg2 === "") {
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
		const useKeys = new Set();
		for (const key of Object.keys(arg2)) {
			const a1 = arg1[key];
			const a2 = arg2[key];
			// 如果a1不存在，且a2也不存在或者为空字符串，则跳过
			if (!a1 && (!a2 || a2 === "")) {
				continue;
			}
			// 如果a2存在，且a2为空字符串，则使用a1
			if (isString(a2) && a2 === "") {
				res[key] = a1;
			} else {
				res[key] = merge(a1, a2);
				useKeys.add(key);
			}
		}
		for (const key of Object.keys(arg1)) {
			if (!useKeys.has(key)) {
				res[key] = arg1[key];
			}
		}
		useKeys.clear();
	} else {
		res = (arg2 != null && arg2 !== "") ? arg2 : arg1;
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
