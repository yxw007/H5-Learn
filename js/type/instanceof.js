/* 
!优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象
!缺点：Number，Boolean，String基本数据类型不能判断
*/
console.log(1 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
