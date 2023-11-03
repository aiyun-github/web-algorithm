// 二叉树的后续遍历
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

function f1(root) {
    if(root == null) return
    f1(root.left)
    f1(root.right)
    console.log(root.value)
}

f1(a)


// 例题：
// 1.给出二叉树，写出前序中序后序遍历
// 2.写出前序中序后序遍历的代码
// 3.给出前序中序还原二叉树，要求写出后序遍历
// 4. 给出中序后序还原二叉树，要求写出前序遍历
// 5.通过代码实现前序中序还原二叉树
// 6.通过代码实现中序后序还原二叉树
// （还原二叉树必须有中序）