const babel = require("@babel/core");
const types = require("@babel/types");

const visitor = {
  CallExpression: (path, state) => {
    let { node } = path;
    let arr = ["debug", "error", "info", "warn", "log"];
    if (node?.callee?.object?.name === "console" && arr.includes(node?.callee?.property?.name)) {
      let rootPath = state.file.opts.root;
      let filename = state.file.opts.filename.replace(rootPath, "").replaceAll("\\", "/");
      let lineNum = node.loc.start.line;
      let goTail = " ".repeat(100);
      let strLiteral = types.stringLiteral(`${goTail} ${filename} ${lineNum}`);
      node.arguments.push(strLiteral);
    }
  },
};

module.exports = function () {
  return { visitor };
};
