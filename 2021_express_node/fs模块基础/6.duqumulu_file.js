// 6、fs.readdir()  读取目录
const fs = require("fs");
fs.readdir("./css", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data); //[ 'base.css' ]
});
