// 简单演示一下  try... catch
!(async function () {
  const p4 = Promise.reject("err"); // 因为这是一个 reject promise
  try {
    const res = await p4;
    console.log(res);
  } catch (error) {
    console.log("明显这里会报错"); // 明显这里会报错
  }
})();
