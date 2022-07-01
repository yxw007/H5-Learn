let readline = require('readline-sync');
(function mainThread() {
	while (true) {
		var num1 = readline.question('num1: ');
		var num2 = readline.question('num2: ');
		let ret = eval(num1 + "+" + num2);
		console.log(ret);
	}
})();
