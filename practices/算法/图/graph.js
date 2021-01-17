// 新建 一个图 邻接表表示法
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

module.exports = graph;
