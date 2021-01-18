// // 二分搜索
// Array.prototype.binarySearch =  function(item){
//     // 首先 拿到最小下标 最大下标 
//     var low  = 0
//     var high = this.length - 1
    
//     while(low <= high){
//     var mid = Math.floor((low+high)/2)
//     //拿到中间下标的下标值
//     var element = this[mid]
//         if(element > item){
//             high = mid - 1
//         }else if(element < item){
//             low = mid + 1
//         }else{
//             return mid
//         }
//     }
//     return -1
// }

// // test 
// var res = [1,2,3,4,5].binarySearch(5)   // 4





