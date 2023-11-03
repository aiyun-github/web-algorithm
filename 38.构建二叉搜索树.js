// 38.构建二叉搜索树
// 问题：有一万个数，写一个方法，进行查找。查找给定的数，返回存在还是不存在。
// 要求：尽可能性能好

// 二叉搜索树（二叉排序树）
// 首先这是一棵二叉树，
// 其次有排序的效果，左子树的节点，都比当前节点小，右子树的节点都比当前节点大

let arr = []

for (let i = 0; i < 10; i++) {
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

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function addNode(root, num) {
    if(root == null) return
    if(root.value == null) return;
    if(root.value < num){ // 目标值比当前节点大
        if(root.right == null) root.right = new Node(num) // 如果右侧为空，则创建节点
        else addNode(root.right, num) // 如果右侧不为空，则向右侧进行递归
    } else { // 目标值比当前节点小
        if(root.left == null) root.left = new Node(num)
        else addNode(root.left, num)
    }
}

function buildSearchTree(arr) {
    if(arr == null || arr.length == 0) return null
    let root = new Node(arr[0]) // 选第一个作为根节点
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root
}

console.log(search(arr, 1000))
console.log(num)

let root = buildSearchTree(arr)
console.log(root)