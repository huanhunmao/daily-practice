Array.prototype.insertionSort = function(){
    //外层i 循环 是进行其他数比较 注意 i从 1开始
    // 将里面的0 换成 i
    for(var i = 1; i < this.length; i ++){
        // 因为是拿到第二个数进行比较 this[1]第一个数是 this[0]
    var temp = this[i]
    var j = i
    while(j>0){
        if(this[j - 1] > temp){
            this[j] = this[j - 1]
        }else{
            break
        }
        j --

    }
    this[j] = temp
    }
    
}

var arr = [5,4,3,2,1]
arr.insertionSort()  // [1,2,3,4,5]

