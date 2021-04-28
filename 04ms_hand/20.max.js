// 实现找到 多个数字中的最大值
// 方法一
// var test = Math.max(10, 20, 30, 40);
// console.log(test); // 40
// var test1 = Math.min(10, 20, 30, 40);
// console.log(test1); //10

// 方法二
function max(nums) {
  // 将传入的数字 变成数组
  var nums = Array.prototype.slice.call(arguments);
  var max = 0;
  nums.forEach((n) => {
    if (n > max) {
      max = n;
    }
  });
  return max;
}

var nums = (1, 5, 29);
var test3 = max(nums);
console.log(test3); //29
