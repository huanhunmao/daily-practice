const fs = require("fs");

const path = "./upload";

fs.stat(path, (err, data) => {
  if (err) {
    //创建目录
    mkdir(path);
    return;
  } else {
    if (!data.isDirectory()) {
      fs.unlink(path, (err) => {
        if (!err) {
          mkdir(path);
        } else {
          console.log("请检查输入");
        }
        //创建目录
      });
    }
  }
});

// 创建目录
function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}
