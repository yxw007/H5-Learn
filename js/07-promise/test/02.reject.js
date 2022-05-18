const p = new Promise((resolve, reject) => {
	reject("fail");
});

p.then(null, error => {
	console.error(error);
});
