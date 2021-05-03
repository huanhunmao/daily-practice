// 9、fs.rmdir 删除目录
const fs = require("fs");

fs.rmdir("./aaa", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("删除目录成功");
});
