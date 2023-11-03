// 使用数组封装栈结构
function Stack() {
    this.arr = []
    this.push = function (){
        this.arr.push(value)
    }
    this.pop = function (){
        return this.arr.pop()
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack.arr)

// 使用数组封装队列结构
function Queue() {
    this.arr = []
    this.push = function (value){
        this.arr.push(value)
    }
    this.pop = function (){
        return this.arr.shift()
    }
}

let queue = new Queue()
queue.push(2)
queue.push(3)
queue.pop()
console.log(queue.arr)