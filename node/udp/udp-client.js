var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

socket.on('message', function (msg, rinfo) {
	console.log(msg.toString());
	console.log(rinfo);
});

socket.send(Buffer.from('helloworld'), 0, 5, 40000, 'localhost', function (err, bytes) {
	console.log('发送了个%d字节', bytes);
});

socket.on('error', function (err) {
	console.error(err);
});
