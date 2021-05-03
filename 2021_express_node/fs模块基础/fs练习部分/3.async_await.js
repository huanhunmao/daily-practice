/*
1、await 必须包裹在 async里
2、async 函数 返回的是Promise 对象
*/
async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var name = "fhj";
      resolve(name);
    }, 1000);
  });
}

async function main() {
  var data = await test(); //获取异步方法里的数据
  console.log(data); // fhj
}
main();
