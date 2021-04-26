// 常规的题目
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .catch(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });

// 打印结果为 1 3
//  2不会打印的原因是 .then 不会触发 .catch 回调
