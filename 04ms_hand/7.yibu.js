// 最简单 异步模型
console.log(1);
setTimeout(() => {
  console.log(3);
}, 0);

console.log(2);
// 打印 顺序  1 2 3  因为 3这个地方使用宏任务 异步分开
