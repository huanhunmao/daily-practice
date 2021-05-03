// 将一个 文件或者图片 放到另外一个文件夹中 （一般针对比较大的东西）
// 引入 fs模块
const fs = require("fs");

// 创建 读取流
var readStream = fs.createReadStream("./1.read_file.js");
// 创建 写入流  当然 后面的路径和文件名都可以改变
var writeStream = fs.createWriteStream("./data/app-copy.js"); //拷贝到这个文件夹中
// 管道操作 读取流的内容 流进写入流里面
readStream.pipe(writeStream);
