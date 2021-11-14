/**
 * @param {*} source loader 匹配的资源文件内容
 * @returns 
 */
const loaderUtils = require('loader-utils')
const { SourceMap } = require('module');
module.exports = function(source)  {
    let {age} = loaderUtils.getOptions(this);
    const content = source.replace("18",age);
    this.callback(null,content,SourceMap)
}