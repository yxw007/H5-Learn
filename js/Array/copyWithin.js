const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  var array = [1, 2, 3, 4, 5];
  //!copy索引[2,4)至0索引位置，包括0
  array.copyWithin(0, 2, 4);
  console.log(array); // [3,4,3,4,5]
});
