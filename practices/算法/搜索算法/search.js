// 顺序搜索  如果数组很大 低效
Array.prototype.Search = function(item){
    for(var i = 0; i < this.length; i++){
        // item为传入的目标值 和当前便利值匹配
        // 返回匹配下标
        if(this[i] == item){
            return i
        }
    }   
    return -1
}

var res = [1,2,5,4,7].Search(2)    //2
