
const s1 = new Set(["val"]);
for (let value of s1.values()) {
	value = "newValue";
	console.log(s1.has('val'));
}

console.log(s1);


