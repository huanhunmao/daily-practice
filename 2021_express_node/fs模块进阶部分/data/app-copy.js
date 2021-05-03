// 读取文件
// 文件内容较多时 以流的方式读取 fs.createReadStream
const fs = require("fs");

// 创建读取流
var readStream = fs.createReadStream("./input.txt");

var count = 0;
var str = "";

readStream.on("data", (data) => {
  str += data; // 读取数据
  count++;
});

// 监听 读取结束时 打印信息
readStream.on("end", () => {
  console.log(str);
  console.log(count);
});

// 监听 读取失败时 打印信息
readStream.on("error", (err) => {
  console.log(err);
});
