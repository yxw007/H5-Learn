const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  var arr = [1, 2, 3, 4];
  //! 遍历每个元素+拍平元素，返回一个新数组
  let res = arr.flatMap((x) => [x * 2]); //[2, 4, 6, 8, 10, 12]

  console.log(arr);
  console.log(res);
});
