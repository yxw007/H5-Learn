(() => {
	let person1 = {
		name: 'pt',
		age: 11,
		address: 'sz'
	}

	let person2 = {
		address: 'sz',
	}

	//! 1.Diff：实现
	type Diff<T extends Object, K extends Object> = Omit<T, keyof K>
	//! 其实就是将persion1中把persion2中的类型忽略，得到剩余的类型
	type DiffPerson = Diff<typeof person1, typeof person2>
	/*
	type DiffPerson = {
		name: string;
		age: number;
	}
	 */
})();
//-------------------------------------------------------------------------
(() => {
	let person1 = {
		name: 'pt',
		age: 11,
		address: 'sz'
	}

	let person2 = {
		address: 'sz',
	}

	//! 2.InterSection: 交集
	//! pick 选取 然后extract T和K 都存在的，就是交集的部分
	type InterSection<T extends Object, K extends Object> = Pick<T, Extract<keyof T, keyof K>>
	type InterSectionPerson = InterSection<typeof person1, typeof person2>
	/* 
	type InterSectionPerson = {
		address: string;
	}
	 */
})();
//-------------------------------------------------------------------------
(() => {
	//注意：OldProps 与 NewProps age 类型分别为number 和string，类型是不同的
	type OldProps = { name: string, age: number, visible: boolean };
	type NewProps = { age: string, other: string };

	type InterSection<T extends Object, K extends Object> = Pick<T, Extract<keyof T, keyof K>>
	//1. 获取交集部分，也就是age，让NewProps 覆盖 OldProps 属性类型，age 变成string 类型
	type InterSectionProps = InterSection<NewProps, OldProps>;

	type Diff<T extends Object, K extends Object> = Omit<T, keyof K>
	//2. 获取不同部分，也就是age,visible
	type DiffProps = Diff<OldProps, NewProps>;//Diff 是从OldProps 类型中忽略掉NewProps 剩余的类型部分

	//3. 组合DiffProps与InterSectionProps，然后pick 提取所有属性就是最终的结果
	type ComposeProps = DiffProps & InterSectionProps;
	//! 最终ReplaceProps1 与 ReplaceProps2 类型一致
	type ReplaceProps1 = Pick<ComposeProps, keyof ComposeProps>;

	type Overwrite<T extends Object, K extends Object, I = Diff<T, K> & InterSection<K, T>> = Pick<I, keyof I>
	//! 3.Overwrite: 属性覆盖
	type ReplaceProps2 = Overwrite<OldProps, NewProps>
	/* 
	type ReplaceProps2 = {
		name: string;
		age: string;
		visible: boolean;
	}
	*/
})();
//-------------------------------------------------------------------------
(() => {
	//注意：OldProps 与 NewProps age 类型分别为number 和string，类型是不同的
	type OldProps = { name: string, age: number, visible: boolean };
	type NewProps = { age: string, other: string };

	type Compose<A extends any> = { [K in keyof A]: A[K] };

	//! 说明：OldProps 中忽略掉NewProps 的部分，然后再&组合NewProps 部分，得到的就是合并后的结果
	type Merge<T, K> = Compose<Omit<T, keyof K> & K>;
	//! 4.Merge: 属性合并
	type MergeObj = Merge<OldProps, NewProps>
	/* 
	type MergeObj = {
		name: string;
		visible: boolean;
		age: string;
		other: string;
	}
	*/
})();
//-------------------------------------------------------------------------
