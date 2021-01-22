Array.prototype.quickSort = function(){
    // 递归
    var rec = (arr)=>{
        //递归需要的终止条件
        if (arr.length === 0) return arr
        if(arr.length === 1){return arr}
        //写左右分区
        var left = []
        var right = []
        // 设置基准
        var mid = arr[0]
        //循环 比基准小的放在左边 比基准大的放在右边
        for(var i = 1; i < arr.length; i ++){
            if(arr[i] < mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        // 使用rest运算符连接整个数组
        return [...rec(left),mid,...rec(right)]
    }
    // 结果给this
    var res = rec(this)
    res.forEach((n,i)=>{this[i] = n})
}

var arr = [2,9,3,1,6]
arr.quickSort()

