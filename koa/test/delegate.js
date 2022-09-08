/**
 * 创建日期: 2022-09-08
 * 文件名称：delegate.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const delegate = require("../koa/lib/delegate");

let context = { name: "context" };
let request = { name: "request", url: "123" };

context.request = request;

//context.url => context.request.url
//! context 代理访问request.url
delegate(context, "request").access("url");

console.log(context.url);
