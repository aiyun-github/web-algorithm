var a = 6
var b = 5

// 如何不借助第三个变量完成上面的交换

// 以下2种方法仅针对数字
// 第一种方法
// a = a + b
// b = a - b
// a = a - b
// console.log(a, b)

// 第二种方法
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log(a, b)

// 第三种方法，任意类型都可以
;[b, a] = [a, b]
console.log(a, b)