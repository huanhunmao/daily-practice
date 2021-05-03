// 5、fs.readFile() 读取文件
const fs = require("fs");
fs.readFile("./index.html", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log(data.toString()); //把 Buffer转化为 string类型
});
