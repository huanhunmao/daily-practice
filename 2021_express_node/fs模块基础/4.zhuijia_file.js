// 4、appendFile() 追加 文件

const fs = require("fs");
fs.appendFile("./css/base.css", "body{color:red}", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("appendFile 成功");
});
