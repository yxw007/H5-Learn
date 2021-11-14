/**
 * @param {*} source loader 匹配的资源文件内容
 * @returns 
 */
const loaderUtils = require('loader-utils')
const { SourceMap } = require('module');
module.exports = function(source)  {
    let {name} = loaderUtils.getOptions(this);
    const content = source.replace("小明",name);
    this.callback(null,content,SourceMap)
}