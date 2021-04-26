// 这个问题是如何手写 bind 函数  需要 注意 bind 会返回新函数需要调用 才能生效
// 模拟bind
Function.prototype.bind1 = function () {
  // 参数解析为数组
  const args = Array.prototype.slice.call(arguments);

  // 获取 this （数组第一项）
  const t = args.shift();
  //this 是 fn1.bind(...)中的 fn1
  //   console.log(t);  //{ x: 100 }
  const _self = this;
  //返回一个函数
  return function () {
    return _self.apply(t, args);
  };
};

function fn1(a, b, c) {
  console.log("this", this); // this { x: 100 }
  console.log(a, b, c); //10 20 30
  return "this is fn1";
}
const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res); // this is fn1
