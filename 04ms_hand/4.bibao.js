// 自由变量查找规则  现在当前作用域 向上查找
// 闭包基本应用场景
function create() {
  const a = 100;
  return function () {
    console.log(a); // 100
  };
}

const fn = create();
const a = 200;
fn();
