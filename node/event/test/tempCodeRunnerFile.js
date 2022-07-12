setTimeout(() => {
	myEmitter.on('event', () => {
		console.log('AA');
	});
}, 0);