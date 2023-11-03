// 二叉树的中序遍历
// 树
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E

function Node(value){
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

// 中序遍历
function f1(root) {
    if(root == null) return
    f1(root.left)
    console.log(root.value)
    f1(root.right)
}

f1(a)