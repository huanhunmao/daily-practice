// 8、fs.unlink 删除文件
const fs = require("fs");

fs.unlink("./aaa/index.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("删除文件成功");
});
