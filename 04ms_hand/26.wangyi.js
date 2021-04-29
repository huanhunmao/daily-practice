// 这里展示的是网易的真题部分
let a = {};
b = "0";
c = 0;
a[b] = "hello";
console.log(a); // {'0' : 'hello'}

a[c] = "world";
console.log(a); // { '0': 'world' }
console.log(a[b]); // world
console.log(a[c]); // world
