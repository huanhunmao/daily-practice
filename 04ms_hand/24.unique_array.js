// 这里展示的是 数组去重的 方法  indexof

function unique(arr) {
  var res = [];
  arr.forEach((item) => {
    // 注意这个地方是 item 下面都使用 item
    if (res.indexOf(item) < 0) {
      return res.push(item);
    }
  });
  return res;
}

//第二种方法 set

function unique(arr) {
  var set = new Set(arr);
  return [...set]; //[ 1, 2, 3, 4, 10 ]
}

//第三种方法   双指针

function unique(arr) {
  var res = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      //判断重复情况
      if (arr[i] == arr[j]) {
        j = ++i;
      }
    }
    res.push(arr[i]);
  }
  return res;
}

// test
var arr = [1, 2, 2, 3, 4, 4, 10];
var test = unique(arr);
console.log(test); //[ 1, 2, 3, 4, 10 ]
