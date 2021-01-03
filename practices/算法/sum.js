// var sum = 3 ^ 3;
// console.log(sum); //6
// var num2 = 3 & 3;
// console.log(num2); //1

// var num3 = (3 & 3) << 1;
// console.log(num3); // 2

// 下面这个是  完整的函数
function Add(num1, num2) {
  // write code here
  do {
    var temp = num1 ^ num2;
    num2 = (num1 & num2) << 1;
    num1 = temp;
  } while (num2);
  return num1;
}

var test = Add(3, -1);
console.log(test);
