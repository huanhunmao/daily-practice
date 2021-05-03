// 7、fs.rename 重命名文件
const fs = require("fs");

fs.rename("./css/base.css", "./css/index.css", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("成功");
});
