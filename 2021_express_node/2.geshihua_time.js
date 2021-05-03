// 这个地方展示的是 使用插件格式化时间
var sd = require("silly-datetime");
var time = sd.format(new Date(), "YYYY-MM-DD HH:mm");

console.log(time); //  2021-05-02 16:06
