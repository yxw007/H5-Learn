const myArray = [
  1,
  2,
  3,
  function () {
    console.log(this); // 输出 [1, 2, 3, ƒ]
  },
];

//! this 指向myArray
myArray[3](); // 调用数组中的第 4 个元素（一个函数），输出 [1, 2, 3, ƒ]
