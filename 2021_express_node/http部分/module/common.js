// 单独写一个模块 导出这个模块 匹配常见后缀
exports.getMine = function (extname) {
  switch (
    extname // extname 表示后缀
  ) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    default:
      return "text/html";
  }
};
