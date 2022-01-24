const babel = require("@babel/core");
const types = require("@babel/types");

const visitor = {
  Identifier: {
    enter(path, state) {
      //TODO: 修改的到此处?  console.log
      console.log(state.file.opts.filename);
    },
  },
};

module.exports = function () {
  return { visitor };
};
