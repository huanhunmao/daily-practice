// 展示另外一个网易题目

let a = {};
b = {
  x: "1",
};
c = {
  y: "2",
};

a[b] = "hello";
console.log(a);

a[c] = "world";
console.log(a);
console.log(a[b]); // 关键在于 对象套对象 变成一个整体 [object Object]
console.log(a[c]); // 后续改变是对值的改变

// { '[object Object]': 'hello' }
// { '[object Object]': 'world' }
// world
// world
