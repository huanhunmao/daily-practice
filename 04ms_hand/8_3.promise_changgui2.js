// 另外一个 promise常规题目

Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error("error");
  })
  .catch(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });

// 会打印 1 2 3
// 因为 then --> resolved   error ---> catch ---> then
