// 这里展示的是  多层数组 如何拍平  ---> 输出 为 单层数组

function flat(arr) {
  // 判断数组中是否 还有深层数组   注意这个箭头函数后面 不要加括号
  var isDeep = arr.some((item) => item instanceof Array);
  if (!isDeep) {
    // 平的
    return arr;
  }
  // 将拍平的结果 放到 res中  // 注意这个地方 没有 slice 有 apply
  var res = Array.prototype.concat.apply([], arr);
  //递归循环
  return flat(res);
}

//test

var arr = [1, 2, [2, 3, [7, 0, [8, 100]]]];
var test = flat(arr);
console.log(test); // [ 1, 2, 2, 3, 7, 0, 8, 100 ]
