$.fn.myPlugin = function () {
    //在这里面,this指的是用jQuery选中的元素
    //example :$('a'),则this=$('a')
    this.css("color", "red");
  };