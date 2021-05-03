// 有点问题 暂时 没展示出来 之后再看
var http = require("http");
var url = require("url");
// 引入 routes.js
const routes = require("./1.routes.js");
var ejs = require("ejs");
http
  .createServer(function (req, res) {
    // 创建 静态web服务器
    routes.static(req, res, "static");

    // 路由
    var pathname = url.parse(req.url).pathname;
    // if 判断里面 加上 这部分内容

    if (pathname == "/login1") {
      var msg = "数据库里面获取的数据";
      ejs.renderFile("./views/login.ejs", { msg: msg }, (err, data) => {
        res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
        res.end(data);
      });
    } else if (pathname == "/register") {
      res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("执行注册");
    } else if (pathname == "/admin") {
      res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("处理后的业务逻辑");
    } else {
      res.writeHead(404, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("页面不存在");
    }
  })
  .listen(3001);
