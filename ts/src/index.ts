
import Arr from "./01-Array/index"
import Gen from "./02-Genericity/index"
//-------------------------------------------------------------------------
// interface IA {
//     (): number;
// }

// //注意：这种形式是不能被类实现的
// class AA implements IA {
//     (): number {
//         return 1;
//     }
// }
//-------------------------------------------------------------------------

class Cat {
    public constructor(name: string) {

    }
}

class Dog {
    public constructor(name: string) {

    }
}

function createAnim(t: typeof Cat, name: string) {
    return new t(name);
}

let aa = createAnim(Dog, "xx");

//-------------------------------------------------------------------------

interface ICreateArray {
    <T>(times: number, val: T): T[];
}

type TCreateArray = <T>(t: number, val: T) => T[];

const createArray: TCreateArray = (times, val) => {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(val);
    }
    return result;
}

let arr = createArray(3, "1");

//-------------------------------------------------------------------------
// 说明：接口没有这个定义的 方法和属性
// interface ITest {
//     (): () => number
//     name: number
// }

// class Test implements ITest {
//     constructor() {
//         this.name = 1;
//     }
//     name: number;
// }

//-------------------------------------------------------------------------

function sum<T extends number | string>(a: T, b: T) {
    return (a as string) + b;
}
//说明：T 属于同一个类型，不能一个string或一个number
let s = sum(1, 2);

//-------------------------------------------------------------------------

interface P1 {
    name: string
}

interface P2 {
    age: number
}

type IC<T> = {
    [K in keyof T]: T[K];
}

type P3 = IC<P1 & P2>;
//-------------------------------------------------------------------------
interface Bird {
    name: string,
}

interface Fish {
    name: "鱼",
}

type ISelect<T extends Bird | Fish> = T extends Bird ? P1 : P2;

type MyColor = ISelect<Fish>;


class Animal {
    name: number = 123;
    say() {
        console.log("说话");
    }
}

let animal: Animal = new Animal();
console.log(animal);
console.log("xxx");

//-------------------------------------------------------------------------
export { }
