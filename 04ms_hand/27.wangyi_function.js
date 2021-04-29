// 这里展示 函数相关的问题

function fn1(a) {
  fn1 = function (b) {
    console.log(a, a + b);
  };

  console.log(a);
}

fn1(1); // 1

fn1(2); // 1 3
