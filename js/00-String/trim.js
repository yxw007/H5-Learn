String.isNullOrEmpty = function () {
	return this == null || this == "";
};

let a = null;
console.log(String.isNullOrEmpty(a));


String.prototype.trim = function (char = "\\s") {
	let reg = new RegExp(`(^${char}*)|(${char}*$)`, "g");
	console.log(reg);
	let result = this.replace(reg, "");
	return result;
};

let content = "''abc'";
content = content.trim("'");
console.log(content);
