
exports.autoRun = function (name, executor) {
	console.log(name);
	console.log(`-------------------------------------------------------------------------`);
	executor();
	console.log(`-------------------------------------------------------------------------\n`);
}

exports.autoRunPromise = async function (name, executor) {
	console.log(name);
	console.log(`-------------------------------------------------------------------------`);
	await new Promise((resolve) => { executor(resolve) });
	console.log(`-------------------------------------------------------------------------\n`);
}
