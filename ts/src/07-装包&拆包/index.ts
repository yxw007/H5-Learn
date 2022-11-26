(() => {
	type Proxy<T> = {
		get(): T,
		set(value: T): void
	}

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>
	}

	let props = {
		name: 'pt',
		age: 11
	}

	function proxify<T>(obj: T): Proxify<T> {
		let result = {} as Proxify<T>;
		for (let key in obj) {
			let value = obj[key];
			result[key] = {
				get() {
					console.log("get:", value);
					return value
				},
				set: (newValue) => {
					console.log("set: oldValue=", value, ",newValue=", newValue);
					value = newValue
				}
			}
		}
		return result
	}
	//! 装包：将普通对象包装一层，让其通过get set 访问和设置
	let proxpProps = proxify(props);
	console.log(proxpProps.name.get());
	console.log(proxpProps.name.set("xx"));

	function unProxify<T>(proxpProps: Proxify<T>): T {
		let result = {} as T;
		for (let key in proxpProps) {
			let value = proxpProps[key];
			result[key] = value.get()
		}
		return result
	}
	//! 拆包：将包装一层的对象，还原成原来的对象
	let proxy = unProxify(proxpProps)
})();

