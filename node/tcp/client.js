const net = require('net');
const socket = new net.Socket(); // 连接8080端口 
socket.connect(8080, 'localhost'); // 连接成功后给服务端发送消息

socket.on('connect', function (data) {
	socket.write('hello'); // 浏览器和客户端说 
	socket.end()
});

socket.on('data', function (data) {
	console.log(data.toString())
});

socket.on('error', function (error) {
	console.log(error);
}); 
