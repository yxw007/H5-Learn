module.exports = function(source)  {
    // source就是读取文件的内容
    const content = source.replace("小明","黄晓明").replace("18","38");
    return content;
}