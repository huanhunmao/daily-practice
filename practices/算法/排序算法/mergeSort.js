// Array.prototype.mergeSort = function(){
//     var rec = (arr) => {
//         if(arr.length === 1) {return arr}
//         // 拿到数组中间数 
//         var mid = Math.floor(arr.length / 2 )
//         // 分为左边和右边并递归
//         var left = arr.slice(0,mid)
//         var right = arr.slice(mid,arr.length)
//         var orderLeft = rec(left)
//         var orderRight = rec(right)
//         // 新建结果数组res
//         var res = []
//         // 比较两个有序数组头部 较小者出队并 推入 res中
//         while(orderLeft.length || orderRight.length){
//             if(orderLeft.length && orderRight.length){
//                 res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
//         // 如果 右边的数组已经空了 把左边剩余元素放入res中
//             }else if(orderLeft.length){
//                 res.push(orderLeft.shift())
//             }else if(orderRight.length){
//                 res.push(orderRight.shift())
//             }
//         }
//         return res
//     }
//     // 拷贝 结果到 this上
//     var res = rec(this)
//     res.forEach((n,i)=>{this[i] = n})
// }

// var arr =  [5,4,3,2,1]
// arr.mergeSort()    // [1,2,3,4,5]




Array.prototype.mergeSort = function(){
    var rec = (arr) =>{
        if(arr.length === 1){return arr}
        var mid = Math.floor(arr.length / 2)
        var left = arr.slice(0,mid)
        var right = arr.slice(mid,arr.length)
        var orderLeft = rec(left)
        var orderRight = rec(right)

        var res = []
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift():orderRight.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res
    }

    var res = rec(this)
    res.forEach((n,i)=>{this[i]=n})

}

var arr  = [5,4,3,2,1]
arr.mergeSort()
