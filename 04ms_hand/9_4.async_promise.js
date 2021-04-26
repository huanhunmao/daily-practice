// 此处展示 微任务 早于宏任务
// 这是最为直观的 例子 说明这个问题
console.log(1);
setTimeout(() => {
  console.log(2);
});
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);

// 打印结果  1    4     3        2
