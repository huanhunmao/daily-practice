// 以流的方式 写入文件  fs.createWriteStream
const fs = require("fs");
var str = "";

for (var i = 0; i < 300; i++) {
  str += "我是从数据库获取的数据，我需要保存起来\n";
}

//创建 写入流
var writeStream = fs.createWriteStream("./output.txt");
writeStream.write(str);

//标记文件结束
writeStream.end();

// 对写入完成进行监听
writeStream.on("finish", () => {
  console.log("写入完成");
});
