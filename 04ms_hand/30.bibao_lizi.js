var a = 20;
function add() {
  var a = 10;
  return function () {
    a++;
    console.log(a);
  };
}
var test = add();
console.log(test()); // 11
console.log(test()); // 12
console.log(a); // 20
