// 新建一个最小堆类
class MinHeap {
  constructor() {
    this.heap = [];
  }

  //交换方法
  swrap(i1, i2) {
    var temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 拿到父节点
  getParentIndex(i) {
    // 父节点的位置 (i-1)/2
    // return Math.floor((i-1)/2)
    // 二进制右移 操作 一位操作  取商  看起来更加简洁
    return (i - 1) >> 1;
  }

  // 获取左节点
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  //获取右节点
  getRightIndex(i) {
    return 2 * i + 2;
  }
  shiftUp(index) {
    // 当前位置在堆顶   不再操作
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    //对比当前节点和上一节点的值 如果当前节点小于上一节点 交换
    if (this.heap[parentIndex] > this.heap[index]) {
      //执行swrap 交换函数
      this.swrap(parentIndex, index);
      //持续执行上移操作   由于当前已经交换过了 所以传入 parentIndex
      this.shiftUp(parentIndex);
    }
  }

  //定义 下移函数
  shiftDown(index) {
    // 获取左右节点
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    //比较左节点和当前节点值及右节点与当前节点值
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swrap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swrap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入方法
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop(); //先将堆尾给堆顶
    this.shiftDown(0); //执行下移 函数
    console.log(this.heap);
  }

  // 获取堆顶 获取数组头部 
  peek(){
    return this.heap[0]

  }

  //获取堆的大小 返回数组的长度
  size(){
    return this.heap.length
  }
}

// test insert()
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);

//test pop()
h.pop();


