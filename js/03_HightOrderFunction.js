/**
* 创建日期: 2021-11-07
* 文件名称：03_HightOrderFunction.js
* 创建作者：Potter
* 开发版本：1.0.0
* 相关说明：高阶函数
*/

function sum(a,b,c){
    return a + b + c;
}

const currying = (fn,args = []) => {
    let len = fn.length;
    return (..._)=>{
        let arg = args.concat(_);
        if(arg.length < len){
            return currying(fn,arg);
        }
        return fn(...arg);
    }
};

let c = currying(sum);
let ab = c(1,2);
let r = ab(3);
console.log(r);