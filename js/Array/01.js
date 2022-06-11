/**
* 创建日期: 2021-10-30
* 文件名称：01_Array.js
* 创建作者：Potter
* 开发版本：1.0.0
* 相关说明：
*/

//-------------------------------------------------------------------------

function address(str){
    return `地址信息：${str}`;
}

function province(str){
    return str + "广东省";
}

function city(str){
    return str + "深圳市";
}

function compose(...fns){
    return fns.reduce((pre,current)=>{
        return (...arguments)=>{
            return pre(current(...arguments));
        }
    });
}

//1. compose
let result = compose(address,city,province)("中国");
console.log(result);
//-------------------------------------------------------------------------

//2. 自定义reduce
Array.prototype.reduce = function(callback,pre){
    for (let i = 0; i < this.length; i++) {
        if (!pre) {
            if(i+1<this.length){
                pre=callback(this[i],this[i+1],i+1,this);
                i++;
            }else{
                pre = this[i];
            }
        } else {
            pre=callback(pre,this[i]);
        }
    }
    return pre;
}

let sum = [].reduce((pre,current)=>{
    return pre + current;
});

console.log(sum);
//-------------------------------------------------------------------------
