//3.子进程，接收父进程传过来的消息message
process.on('message', function ({ data }) {
	//4.子进程往父进程发送一条消息
	setTimeout(() => {
		process.send({ data });
	}, 100);
});
