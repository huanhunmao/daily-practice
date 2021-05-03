// 改成 使用 async + await 可以这样 将 wwwroot 下面的文件放到 数组内

// 1、isDir判断是目录-true  文件-false
const fs = require("fs");
async function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (error, stats) => {
      if (error) {
        console.log(error);
        reject(error);
        return;
      }
      //判断是否是目录
      if (stats.isDirectory()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

// 2、获取 wwwroot 里面的所有资源 循环遍历
function main() {
  var path = "./wwwroot";
  var dirArr = []; //初始化结果
  fs.readdir(path, async (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    for (var i = 0; i < data.length; i++) {
      if (await isDir(path + "/" + data[i])) {
        dirArr.push(data[i]);
      }
    }
    console.log(dirArr);
  });
}

main(); //需要执行
