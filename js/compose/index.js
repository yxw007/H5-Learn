function compose(...fns) {
	return (args) => {
		for (let i = fns.length - 1; i >= 0; i--) {
			args = fns[i](args);
		}
		return args;
	}
}

let promise = next => action => {
	console.log("promise");
	next(action);
}
let logger = next => action => {
	console.log("logger");
	next(action);
}

const composed = compose(promise, logger);
const dispatch = () => {
	console.log("this is origin dispatch function");
}

const newDispatch = composed(dispatch);
newDispatch({ type: "add" });
