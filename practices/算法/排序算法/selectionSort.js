// Array.prototype.selectionSort = function(){
//     // 外层循环的作用是执行 n-1轮 所以长度是this.length -1
//     // 需要将内层循环中的0 都改成 i 因为比较的数组再变小
//     // 还有一个当 indexMin === i就是自身不需要交换加个 if 
//     for(var i = 0; i < this.length -1; i++){
//         // 假设最小元素的索引是第一个元素
//     var indexMin = i
//     for(var j = i; j < this.length; j ++){
//         // 判断一下 如果遍历当前元素小于第一个元素则将最小值的索引改成当前元素索引 j
//         if(this[j] < this[indexMin]){
//             indexMin = j
//         }
//     }
//     // 交换当前元素和第一个元素
//     if(indexMin !== i){
//     var temp = this[i]
//     this[i] = this[indexMin]
//     this[indexMin] = temp
//     }
    
//     }
    
// }

// var arr = [5,4,3,2,1]
// arr.selectionSort()  // [1,2,3,4,5]







