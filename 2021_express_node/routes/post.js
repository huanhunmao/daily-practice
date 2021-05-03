// 这里将模拟  真实 开发场景 进行

const express = require("express");
const route = express.Router(); //router实例

// 把刚才的四个请求 复制过来 并且修改一下内容
// 利用get设置 url
// 前面一部分是根路由  后面一部分是回调函数 并向客户端发送 数据
route.get("/", (req, res) => res.send({ id: 1, title: "express 入门教程" })); //示例数据

route.post("/", (req, res) => {
  // post新建请求
  console.log("保存文章:", req.body);
  res.status(201).send({ id: 2, ...req.body }); // 设置请求成功状态码 201
});

route.put("/:id", (req, res) => {
  // 更新数据
  console.log("收到请求参数，文章id为：", req.params.id);
  console.log("收到请求体，新文章的内容为:", req.body);
  res.send({ id: req.params.id, ...req.body });
});

route.delete("/:id", (req, res) => {
  // 删除数据
  console.log("收到请求参数，文章id为：", req.params.id);
  res.status(204).send();
});

module.exports = route; // 导出路由变量
