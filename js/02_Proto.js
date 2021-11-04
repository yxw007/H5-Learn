//-------------------------------------------------------------------------
(function testProto(){
    console.log("testProto: 测试原型关系");
    console.log("-------------------------------------------------------------------------");
    function Animal(name){
        this.name = name;
        this.arr = [1,2,3];
    }

    let a1 = new Animal("猴子");
    let a2 = new Animal("鸭子");
    console.log(a1.arr === a2.arr);
    console.log(a1.address === a2.address);
    console.log(a1.__proto__ === Animal.prototype);
    console.log(a1.constructor === Animal);

    console.log(Animal.__proto__ === Function.prototype);
    console.log(a1.__proto__.__proto__ === Object.prototype);
    console.log(Animal.prototype.__proto__ === Object.prototype);
    console.log(Animal.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__);
    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 测试原型继承");
    console.log("-------------------------------------------------------------------------");
    function Animal(name){
        this.name = name;
        this.arr = [1,2,3];
    }

    Animal.prototype.address = {location:"山里"};
    function Tiger(name){
        this.name = name;
        this.age = 10;
        Animal.call(this,this.name);
    }

    Tiger.prototype.say = function(){
        console.log("说话");
    }

    let tiger = new Tiger("xxx");
    console.log(tiger);
    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
