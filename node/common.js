
exports.autoRun = function (name, executor) {
	console.log(name);
	console.log(`-------------------------------------------------------------------------`);
	executor();
	console.log(`-------------------------------------------------------------------------\n`);
}
