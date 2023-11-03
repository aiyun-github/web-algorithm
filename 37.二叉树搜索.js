// 37.二叉树搜索
// 问题：有一万个数，写一个方法，进行查找。查找给定的数，返回存在还是不存在。
// 要求：尽可能性能好

// 二叉搜索树（二叉排序树）
// 首先这是一棵二叉树，
// 其次有排序的效果，左子树的节点，都比当前节点小，右子树的节点都比当前节点大


// bad example
// 数组中存储随机生成的1万个数字，查找给定的数，返回true或false
let arr = []

for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000)
}

let num = 0
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        num += 1
        if(arr[i] == target) return true
    }
    return false
}

console.log(search(arr, 1000))
console.log(num)