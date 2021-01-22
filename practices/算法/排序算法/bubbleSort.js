// // 数组原型上挂一个bubbleSort 方法
// Array.prototype.bubbleSort = function(){
//     // console.log(this)
//     // 外层这个i循环主要保证每个元素都换到合适的位置
//     for(let i = 0; i < this.length - 1;i++){
//         //内层这个j循环保证第一个元素换到最后 并且 由于交换后 其他元素交换区间变小  j < this.length - 1 -i
//         for(let j = 0; j < this.length - 1 - i; j ++){
//             // console.log(this[j],this[j+1])   // 得到了相邻元素 1  2     2  3
//             //相邻比较后交换
//             if(this[j] > this[j+1]){
//                 const temp = this[j]
//                 this[j] = this[j+1]
//                 this[j+1] = temp
//             }
//          }
//     }
    
// }

// var arr = [5,4,3,2,1]
// arr.bubbleSort()     //[1,2,3,4,5]













