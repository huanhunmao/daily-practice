//手写深拷贝，常规的问题
function deepClone(obj) {
  // 1、值类型判断
  if (typeof obj != "object" || obj == null) {
    return obj;
  }

  //   2、初始化结果
  let result;
  // 判断属于数组还是对象
  if (result instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  //循环  原型判断  递归
  for (let key in obj) {
    if (obj.hasOwnProperty) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

// 测试结果是否有效
var obj = {
  a: 1,
  b: {
    c: 3,
  },
};

obj1 = deepClone(obj);
obj1.b.c = 666;
console.log(obj.b.c);
