
class MinHeap{
    constructor(){
        this.heap = []
    }

    swrap(i1,i2){
        var temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParentsIndex(i){
        return (i - 1) >> 1
    }
    getLeftIndex(i){
        return i*2+1
    }
    getRightIndex(i){
        return i*2+2
    }
    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if(this.heap[leftIndex] > this.heap[index]){
            this.swrap(leftIndex,index)
            this.shiftDown(leftIndex)
        }
        if(this.heap[rightIndex] > this.heap[index]){
            this.swrap(rightIndex,index)
            this.shiftDown(rightIndex)
        }
    }
    shiftUp(index){
        if(index==0){return }
        const parentIndex = this.getParentsIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swrap(parentIndex,index)
            this.shiftUp(parentIndex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length -1)
        }
    pop(){
        this.heap[0] = this.heap.pop()
        this.shiftDown(0) 
    }

    peek(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }
}

//test
 var h = new MinHeap()
 h.insert(3)
 h.insert(2)
 h.insert(1)
h.pop()