// 这个举例说明 async 返回 确实是一个 promise对象

async function fn1() {
  return 100;
  await Promise.resolve(200);
}

const res = fn1();
console.log("res", res); // 打印 promise对象 res Promise { 100 }
res.then((data) => {
  console.log("data", data); // data 100 因为 无法执行 return 下一行
});
