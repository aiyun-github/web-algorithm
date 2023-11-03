// 27.代码实现二叉树的深度优先搜索
// 树
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

// 对于二叉树来说，深度优先搜索，和前序遍历的顺序是一样的
function deepSearch(root, target) {
    if(root == null) return false
    if(root.value == target) return true
    let left = deepSearch(root.left, target)
    let right = deepSearch(root.right, target)
    return left || right
}

console.log(deepSearch(a, 'f'))