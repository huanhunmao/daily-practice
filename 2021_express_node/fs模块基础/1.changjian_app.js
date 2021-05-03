// 2、fs.mkdir 创建 目录   注意 场景的是目录 不是 文件
// 即使写成这样也不行 ./index.css
const fs = require("fs");
fs.mkdir("./index", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("创建成功");
});
