const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  let arr = [1, 2, 3];
  arr.every((v, index, arr2) => {
    console.log(`value:${v}`, `index:${index}`, `arr:${arr2}`);
    //! 如果返回false，可提前终止，否则会遍历完所有元素
    return true;
  });
});
