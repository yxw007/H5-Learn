/**
 * 创建日期: 2022-06-13
 * 文件名称：help.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

exports.autoRun = function (name, execute) {
  console.log(`-------------------------------------${name}-----------------------------`);
  try {
    execute();
  } catch (e) {
    console.error("Something went wrong while executing code:", e);
  }
};
