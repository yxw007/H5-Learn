const fs = require("fs");

function isDir(path) {
  try {
    let stat = fs.statSync(path);
    return stat.isDirectory();
  } catch (error) {
    return false;
  }
}

/**
 * 根据文件名后缀递归删除文件
 * @param {*} dir 目录地址
 * @param {*} suffix 后缀
 */
function deleteFileByType(dir, suffix) {
  let filenames = fs.readdirSync(dir);
  for (const filename of filenames) {
    let path = `${dir}/${filename}`;
    if (isDir(path)) {
      deleteFileByType(path, suffix);
    } else if (path.endsWith(suffix)) {
      fs.rmSync(path);
    }
  }
}

deleteFileByType("", ".meta");
