/**
 * 创建日期: 2022-09-07
 * 文件名称：context.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const delegate = require("./delegate");

const context = {};

delegate(context, "request").access("url");
delegate(context, "request").access("query");
delegate(context, "request").getter("path");
delegate(context, "request").getter("method");

delegate(context, "response").access("body");
delegate(context, "response").method("set");

module.exports = context;
