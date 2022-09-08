/**
 * 创建日期: 2022-09-07
 * 文件名称：request.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const delegate = require("./delegate");
const request = {};

delegate(request, 'req').access("url");

module.exports = request;
