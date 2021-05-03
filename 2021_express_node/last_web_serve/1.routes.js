const fs = require("fs");
const url = require("url");
const path = require("path");

// 私有方法

var getFileMine = function (extname) {
  var data = fs.readFileSync("./data/test.json"); // 同步方法
  var mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};

//导出部分命名为 static
exports.static = function (req, res, staticPath) {
  // 1、读取地址
  // var pathname = req.url;
  var pathname = url.parse(req.url).pathname;
  // console.log(url.parse(req.url));
  // 需要加一点判断
  pathname = pathname == "/" ? "/test.html" : pathname;

  // 这个方法  可以获取后缀名 path.extname
  var extname = path.extname(pathname);
  // 2、通过fs 模块读取文件
  // 2、通过fs 模块读取文件
  if (pathname != "/favicon.ico") {
    fs.readFile("./" + staticPath + pathname, (err, data) => {
      //   if (err) {
      //     res.writeHead(404, { "Content-Type": 'text/html;charset="utf-8"' });
      //     res.end("404 这个界面不存在");
      //   }
      if (!err) {
        var mine = getFileMine(extname);
        res.writeHead(200, { "Content-Type": "" + mine + ';charset="utf-8"' });
        res.end(data);
      }
    });
  }
};
