var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // 1、读取地址
    //只需要 加一句话 就行
    // 1、读取地址
    var pathname = req.url;

    // 需要加一点判断   当页面是初始页面 也就是http://127.0.0.1:3000展示 /test.html
    pathname = pathname == "/" ? "/test.html" : pathname;

    // 2、通过fs 模块读取文件
    if (pathname != "/favicon.ico") {
      fs.readFile("./static" + pathname, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": 'text/html;charset="utf-8"' });
          res.end("404 这个界面不存在");
        }
        res.writeHead(200, { "Content-Type": 'text/html;charset="utf-8"' });
        res.end(data);
      });
    }
  })
  .listen(3000);
