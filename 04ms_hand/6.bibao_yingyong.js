// 模拟闭包 可以隐藏真实的数据 只流出接口
// 运行出错
function cache() {
  const data = {};
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (val) {
      return data[key];
    },
  };
}

//test

const c = cache();
c.set("a", 100);
console.log(c.get("a"));
