const fs = require("fs"); //引入fs
var path = "./wwwroot"; //方便定义

var dirArr = []; //初始化结果
//读目录
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  //   这个一个立即执行函数
  (function getDir(i) {
    //   这个if是循环结束条件
    if (i == data.length) {
      console.log(dirArr);
      return;
    }
    // 判断是目录还是文件
    fs.stat(path + "/" + data[i], (error, stats) => {
      if (stats.isDirectory()) {
        dirArr.push(data[i]);
      }
      getDir(i + 1);
    });
  })(0);
});
