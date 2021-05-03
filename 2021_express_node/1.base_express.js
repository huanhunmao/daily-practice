// 以下内容展示的是 express 中对数据 进行 增删改查的基本操作

const express = require("express"); // 引入 express
const app = express(); // 实例化
const port = 3000; // 设置端口

app.use(express.json()); //使用 json中间件 扩展express功能

// 注意 引入 位置 在express 引入和 post 引入之后
const routes = require("./routes");
routes(app);

// 利用get设置 url
// 前面一部分是根路由  后面一部分是回调函数 并向客户端发送 数据
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => {
  // post新建请求
  console.log("收到请求体:", req.body);
  res.status(201).send(); // 设置请求成功状态码 201
});

app.put("/:id", (req, res) => {
  // 更新数据
  console.log("收到请求参数，id为：", req.params.id);
  console.log("收到请求体:", req.body);
  res.send();
});
app.delete("/:id", (req, res) => {
  // 删除数据
  console.log("收到删除请求参数，id为：", req.params.id);
  res.status(204).send();
});

// 监听端口
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
