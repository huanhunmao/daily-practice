// 3、fs.writeFile() 写入文件
const fs = require("fs");

fs.writeFile("./index.html", "<script>666</script>", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});
