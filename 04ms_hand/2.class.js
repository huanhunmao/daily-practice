// class类的基本写法和用法

// 基本类写法  父类
class Student {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  //定义方法
  sayHi() {
    console.log(`姓名: ${this.name},序号:${this.number}`);
  }
}

// 子类
class Wang extends Student {
  constructor(name, number, play) {
    super(name, number); //  将子类中的 name number 委托到 父类
    this.play = play;
  }
}

//基本类 实例化调用方法
// var student = new Student("xiaobai", 22);
// console.log(student.name);
// console.log(student.number);

// console.log(student.sayHi()); //姓名: xiaobai,序号:22

var wang = new Wang("xiaowang", 23, "baseball");
console.log(wang.name, wang.number, wang.play); //xiaowang  23 baseball
console.log(wang.__proto__ == Wang.prototype); // true  这个叫隐式原型 wang.__proto__ 沿着原型链 指向显示原型 Wang.prototype
