// 二叉树的前序遍历
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

// 二叉树的前序遍历(递归)
function f1(root) {
    if(root == null) return
    console.log(root.value) // 打印自己

    f1(root.left) // 打印左子树
    f1(root.right) // 打印右子树
}

f1(a)