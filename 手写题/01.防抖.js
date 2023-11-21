// 防抖
// 把触发频繁的事件合并成一次去执行
const debounce = (func, wait = 50) => {
    let timer = 0
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}