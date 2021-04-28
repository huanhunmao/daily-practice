console.log([10, 20, 30].map(parseInt)); //[ 10, NaN, NaN ]

// 等价于 下面这个
const res = [10, 20, 30].map((item, index) => {
  return parseInt(item, index);
});

console.log(res);

// 解析过程继续 往下看
console.log(parseInt(10, 0)); //10
console.log(parseInt(20, 1)); // NaN 第二个参数不能转为 10进制
console.log(parseInt(30, 2)); // NaN
