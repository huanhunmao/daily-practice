// 简单 模拟一下 axios  发起ajax 请求的方式
const axios = require("axios");

axios
  .get("")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("others");
  });
