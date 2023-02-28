const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  let arr1 = [1, 2, [3, 4, [5, 6]]];
  console.log(arr1.flat()); // [1, 2, 3, 4, [5, 6]]
  //! 传一个参数表示拍平的深度
  console.log(arr1.flat(2)); // [1, 2, 3, 4, 5, 6]
});
