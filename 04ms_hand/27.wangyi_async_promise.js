// 这个一个宏任务和 微任务的问题
// 不是很困难 需要注意 seTimeout 先于  new Promise + setTimeout

async function async1() {
  console.log(1); //1
  await async2();
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
  console.log(2); // 5
}

async function async2() {
  await new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  console.log(3); //4
}

setTimeout(function () {
  console.log(4); // 3
});

async1();
console.log(5); //2
