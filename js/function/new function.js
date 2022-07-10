let args = '...args'
let body = 'let [a, b] = args;return a + b'

myFunc = new Function(args, body);
console.log(myFunc(1, 2)) //3
