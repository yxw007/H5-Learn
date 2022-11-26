//导入
import name from './a'

console.log(name);
//-------------------------------------------------------------------------
//!命名空间的基本使用
export namespace zoo {
	export class Dog { eat() { console.log('zoo dog'); } }
}
export namespace home {
	export class Dog { eat() { console.log('home dog'); } }
}

//分别zoo和home命名空间的Dog是不会冲突的，类似C#和C++中的命名空间
let dog_of_zoo = new zoo.Dog();
dog_of_zoo.eat();

let dog_of_home = new home.Dog();
dog_of_home.eat();
//-------------------------------------------------------------------------
//!命名空间的嵌套使用，可以无限制的嵌套
export namespace zoo {
	export class Pig { eat() { console.log('zoo pig'); } }
	export namespace bear {
		export const name = '熊'
	}
}
console.log(zoo.bear.name);
//-------------------------------------------------------------------------
