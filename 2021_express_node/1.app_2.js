// 引入http模块
var http = require("http");
const url = require("url");
const tools = require("./modules/tools.js");
const axios = require("axios");

axios.get();
axios.post();
// console.log(tools)
// 请求和响应
http
  .createServer(function (req, res) {
    //设置响应头
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
    //表示页面输出什么 然后结束响应
    res.write("<head><meta charset='utf-8'></head>");
    var api = tools.formatApi("api/focus");
    res.write(api);
    console.log(req.url); //获取页面url
    if (req.url != "/favicon.ico") {
      var userinfo = url.parse(req.url, true).query;
      console.log(`姓名:${userinfo.name}--年龄${userinfo.age}`);
    }
    res.end();
  })
  .listen(8081); //监听的端口

console.log("Server running at http://127.0.0.1:8081/");
