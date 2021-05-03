// 起一个最简单的 http 服务
var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": 'text/html;charset="utf-8"' });
    response.end("Hello World");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
