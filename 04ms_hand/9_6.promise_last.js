// 这个地方 展示一个稍微复杂点的问题 也很简单
async function async1() {
  console.log("async start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

/* 这个是结果   学费了吗 ？
script start
async start
async2
promise1
script end
promise2
async1 end
setTimeout
*/
