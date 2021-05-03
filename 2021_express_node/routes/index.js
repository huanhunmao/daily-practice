const post = require("./post"); //引入 post
module.exports = (app) => {
  //导出一个函数 接收app对象挂载子路由
  app.use("/post", post);
};
