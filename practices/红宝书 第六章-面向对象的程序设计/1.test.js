// 工厂模式
/*
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}
var person = createPerson("pp", 19, "test");
console.log(person); //{ name: 'pp', age: 19, job: 'test', sayName: [Function] }
*/

// 构造函数模式  constructor

function Person(name, age, job) {
  (this.name = name),
    (this.age = age),
    (this.job = job),
    (this.sayName = function () {
      console.log(this.name);
    });
}

var person1 = new Person("test", 18, "t1");
console.log(person1.name, person1.age, person1.job);
