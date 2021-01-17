const graph = require("./graph");
// 深度优先遍历

//建立一个新的集合 存放深度访问的节点  Set不允许重复
// const visited = new Set();
// const dfs = (n) => {
//   console.log(n);
//   visited.add(n);
//   graph[n].forEach((c) => {
//     if (!visited.has(c)) {
//       dfs(c);
//     }
//   });
// };

// dfs(2);
