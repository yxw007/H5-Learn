//-------------------------------------------------------------------------
(function testProto(){
    console.log("testProto: 测试原型关系");
    console.log("-------------------------------------------------------------------------");
    function Animal(name){
        this.name = name;
        this.arr = [1,2,3];
    }

    Animal.prototype.address = {location:"山里"};

    let a1 = new Animal("猴子");
    let a2 = new Animal("鸭子");
    console.log("不同实例上的属性是否相等：" + (a1.arr === a2.arr));
    console.log("不同实例上的原型属性是否相等：" + (a1.address === a2.address));
    console.log("实例__proto是否与类型原型相等:" + (a1.__proto__ === Animal.prototype));
    console.log("实例constructor是否与类型相等：" + (a1.constructor === Animal));
    console.log("实例constructor是否与类型原型的constructor相等："+(a1.constructor === Animal.prototype.constructor));

    console.log("类型__proto__是否与Function原型相等：" + (Animal.__proto__ === Function.prototype));
    console.log("Function.prototype.__proto__ === Object.prototype: " + (Function.prototype.__proto__ === Object.prototype));

    console.log("实例__proto__.__proto__是否与Object.prototype相等：" + (a1.__proto__.__proto__ === Object.prototype));
    console.log("类型Animal.prototype.__proto__是否与Object.prototype相等：" + (Animal.prototype.__proto__ === Object.prototype));
    console.log("Object.prototype.__proto__：" + (Object.prototype.__proto__));
    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
(function testProto(){
    console.log("testProto: 原型属性和方法测试");

    class Animal{
        constructor(name){
            this.name = name;
        }

        move(){
            console.log("move");
        }

        get live(){
            return "地球";
        }
    }

    let a = new Animal("小狗");
    a.move();
    console.log(a.live);

    console.log(a.__proto__.live);

})()
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 原型继承，放法一: 利用__proto__ or Object.setPrototypeOf");
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

    Tiger.prototype.__proto__ = Animal.prototype;
    // 等同 es7 方法：Object.setPrototypeOf(Tiger.prototype,Animal.prototype);

    Tiger.prototype.say = function(){
        return "说话";
    }

    let tiger = new Tiger("xxx");
    console.log(`父类实例属性：${tiger.arr}`);
    console.log(`父类原型属性：${JSON.stringify(tiger.address)}`);
    console.log(`子类实例属性：${tiger.age}`);
    console.log(`子类原型属性：${tiger.say()}`);

    console.log(Tiger.__proto__ === Animal);

    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 原型继承，放法二: 利用Object.create");
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

    Tiger.prototype = Object.create(Animal.prototype);
    Tiger.prototype.say = function(){
        return "说话";
    }

    let tiger = new Tiger("xxx");
    console.log(`父类实例属性：${tiger.arr}`);
    console.log(`父类原型属性：${JSON.stringify(tiger.address)}`);
    console.log(`子类实例属性：${tiger.age}`);
    console.log(`子类原型属性：${tiger.say()}`);

    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 原型继承，放法三: 利用自定义createObject");
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

    function createObject(parentPrototype){
        function Fn(){}
        Fn.prototype = parentPrototype;
        return new Fn();
    }

    Tiger.prototype = createObject(Animal.prototype);
    Tiger.prototype.say = function(){
        return "说话";
    }

    let tiger = new Tiger("xxx");
    console.log(`父类实例属性：${tiger.arr}`);
    console.log(`父类原型属性：${JSON.stringify(tiger.address)}`);
    console.log(`子类实例属性：${tiger.age}`);
    console.log(`子类原型属性：${tiger.say()}`);

    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 原型继承，放法四: 利用ES6 Class extends");
    console.log("-------------------------------------------------------------------------");
    class Animal {
        address = {location:"山里"};
        constructor(name){
            this.name = name;
            this.arr = [1,2,3];
        }
    }
    
    class Tiger extends Animal {
        constructor(name){
           super(name);
           this.age = 10;
        }

        say(){
            return "说话";
        }
    }

    let tiger = new Tiger("xxx");
    console.log(`父类实例属性：${tiger.arr}`);
    console.log(`父类原型属性：${JSON.stringify(tiger.address)}`);
    console.log(`子类实例属性：${tiger.age}`);
    console.log(`子类原型属性：${tiger.say()}`);

    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------
(function testProtoExtend(){
    console.log("testProtoExtend: 原型继承，放法四: 利用ES6 Class extends");
    console.log("-------------------------------------------------------------------------");
    class Animal {
        address = {location:"山里"};
        static flag = 123;
        static aa(){
            return "aa";
        }
        constructor(name){
            this.name = name;
            this.arr = [1,2,3];
        }
        protoFn(){
            return "call protoFn";
        }
    }
    
    class Tiger extends Animal {
        constructor(name){
           super(name);
           this.age = 10;
        }

        say(){
            return "说话";
        }
    }

    let tiger = new Tiger("xxx");
    console.log(tiger.protoFn());
    console.log(Tiger.flag);
    console.log(Tiger.prototype.flag);

    console.log(Tiger.__proto__ === Animal);

    // console.log(`父类实例属性：${tiger.arr}`);
    // console.log(`父类原型属性：${JSON.stringify(tiger.address)}`);
    // console.log(`子类实例属性：${tiger.age}`);
    // console.log(`子类原型属性：${tiger.say()}`);

    console.log("-------------------------------------------------------------------------");
})();
//-------------------------------------------------------------------------