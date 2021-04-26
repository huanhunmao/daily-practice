// 这个最基本的例子  来说明一下 如何使用同步写法 写异步函数
// 看起来是不是 简单容易读懂
var url = "xxx"(async function () {
  const img = await loadImg(url);
  console.log(img.height, img.width);
})();
