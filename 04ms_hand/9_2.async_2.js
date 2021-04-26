// 直接 return 300 相当于 Promise.resolve(300)
!(async function () {
  const p1 = Promise.resolve(300);
  const data = await p1;
  console.log("data", data); // data 300
})();
