// 这一篇会模拟  slice 切片和  splice 截取

//注意 slice是 左开右闭 区间    指的是 从第一个下标到第二个下标
//  splice 指的是 从哪个下标开始 截取几个数取出
var arr = [1, 2, 3, 4];
console.log(arr.slice()); // [1,2,3,4]
console.log(arr.slice(2)); // [3,4]
console.log(arr.slice(1, 2)); // [2]   注意这个地方

console.log(arr.splice()); //[]
console.log(arr.splice(2)); // [3,4]

var arr2 = [1, 2, 3, 4];
console.log(arr2.splice(1, 2)); // [2,3]

var arr1 = [1, 2, 3, 4];
console.log(arr1.splice(1, 2, "a", "b"), arr1); // [2,3]  [1,a,b,4]
