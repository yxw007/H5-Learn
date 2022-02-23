const babel = require("@babel/core");
const types = require("@babel/types");

const visitor = {
  CallExpression: (path, state) => {
    let { node } = path;
    let arr = ["debug", "error", "info", "warn", "log"];
    if (node?.callee?.object?.name === "console" && arr.includes(node?.callee?.property?.name)) {
      let rootPath = state.file.opts.root;
      //将项目根目录去掉,免得显示太长影响观看
      let filename = state.file.opts.filename.replace(rootPath, "").replaceAll("\\", "/");
      //获得源代码console打印的位置行数
      let lineNum = node.loc.start.line;
      //添加100个空格让显示到尾部去,暂时没有想到更好的办法，如果你知道其他好办法麻烦告诉我下
      let goTail = " ".repeat(100);
      //添加日志源文件和行数变量
      let strLiteral = types.stringLiteral(`${goTail} ${filename} ${lineNum}`);
      node.arguments.push(strLiteral);
    }
  },
};

module.exports = function () {
  return { visitor };
};
