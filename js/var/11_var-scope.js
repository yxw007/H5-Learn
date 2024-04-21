/**
 * 创建日期: 2022-03-17
 * 文件名称：11_var-scope.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：var 作用域提升测试
 */

//-------------------------------------------------------------------------
//case 1
(function case1() {
  {
    var a1 = "case1";
  }
  console.log("case1:", a1); //output: case1:case1
})();
//-------------------------------------------------------------------------
//case 2
(function case2() {
  try {
    function fn() {
      //! 函数会单独构成一个作用域，所以直接提升至函数本身，不会提升至函数外面
      var a2 = "case2";
    }
    fn();
    console.log("case2:", a2);
  } catch (error) {
    console.log("case2:", error); //output: a2 is not defined
  }
})();
//-------------------------------------------------------------------------
//case 3
(function case3() {
  function fn() {
    a3 = "case3";
  }
  fn(); //说明：如果不调用fn,case2 输出就是is not defined
  console.log("case3:", a3); //output: case3:case3
})();
//-------------------------------------------------------------------------
//case 4
(function case4() {
  {
    {
      var a4 = "case4";
    }
  }
  console.log("case4:", a4); //output: case4:case4
})();
//-------------------------------------------------------------------------
(function case5() {
  function outer() {
    function fn() {
      //a5变量会声明到全局对象上
      a5 = "case5";
    }
    fn();
  }
  outer();
  console.log("case5:", a5); //output: case5:case5
})();
//-------------------------------------------------------------------------
(() => {
  var a = 1;
  var fn = () => {
    //! 函数不会var外层变量值
    var a = 2;
  };

  fn();
  console.log(a);
})();
//-------------------------------------------------------------------------
