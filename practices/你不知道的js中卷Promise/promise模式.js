// Promise.all([...])  模式
var p1 = request("http://some.url.1");
var p2 = request("http://some.url.2");

function request(data) {
  return data;
}

Promise.all([p1, p2])
  .then({
    function(msg) {
      return request("http://some.url.3" + msg.join(","));
    },
  })
  .then(function (msgs) {
    console.log(msgs); //[ 'http://some.url.1', 'http://some.url.2' ]这两个执行后才会执行第三个
  });

// Promise.race([...])  模式
var p1 = request("http://some.url.1");
var p2 = request("http://some.url.2");

function request(data) {
  return data;
}

Promise.race([p1, p2])
  .then({
    function(msg) {
      return request("http://some.url.3" + msg.join(","));
    },
  })
  .then(function (msgs) {
    console.log(msgs); // http://some.url.1
  });
