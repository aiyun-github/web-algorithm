// 二叉树的比较
// 二叉树的比较是所有树形结构比较的基础，例如diff，两个DOM结构的比价等等
// 树1
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E


// 树2
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

let a1 = new Node('a')
let b1 = new Node('b')
let c1 = new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')

a1.left = c1
a1.right = b1
c1.left = f1
c1.right = g1
b1.left = d1
b1.right = e1

let a2 = new Node('a')
let b2 = new Node('b')
let c2 = new Node('c')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('f')
let g2 = new Node('g')

a2.left = c2
a2.right = b2
c2.left = f2
c2.right = g2
b2.left = d2
b2.right = e2

function compareTree(root1, root2) {
    if(root1 == root2) return true // 是同一棵树
    if(root1 == null && root2 != null || root2 == null && root1 != null) return false // 其中一个位置的值为空一个不为空
    if(root1.value != root2.value) return false // 相同位置的值不相等
    let leftBool = compareTree(root1.left, root2.left) // 判断左子树是否相等
    let rightBool = compareTree(root1.right, root2.right) // 判断右子树是否相等
    return leftBool && rightBool // 必须左右子树都相等才算相等
}

console.log(compareTree(a1, a2))

// 遇到二叉树比较的问题时，必须要确定，左右两棵子树如果交换位置，既左右互换算不算同一棵二叉树，
// 以上写的是左右交换不算同一棵二叉树（即左右不互换，左与左别计较，右与右比价）
// 如果是笔试，没有特殊说明左右互换还是同一棵树，那么默认互换后不是同一棵树
// 如果面试，尽量问一下