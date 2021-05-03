function getData(resolve, reject) {
  setTimeout(function () {
    var name = "fhj";
    resolve(name);
  }, 1000);
}

// 传入 函数
var p = new Promise(getData);

p.then((data) => {
  console.log(data); // 1s 后拿到内部数据 fhj
});
