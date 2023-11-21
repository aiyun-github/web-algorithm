// 节流
// 事件，按照一定的时间间隔来进行触发
const throttle = (func, delay = 50) => {
    let timer = 0
    return function (...args){
        if (timer) return
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}