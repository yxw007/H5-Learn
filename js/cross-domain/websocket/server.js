const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
	ws.on('message', function message(data) {
		console.log('receive: client message %s', data);
	});

	ws.send('fine thank you ');
});
