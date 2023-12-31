// 30.二叉树左右子树互换后的比较

// 树1
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E


// 树2
//          A
//         /\
//       B   C
//      /\  /\
//     D E F  G

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

a2.left = b2
a2.right = c2
c2.left = f2
c2.right = g2
b2.left = d2
b2.right = e2

function compareTree(root1, root2) {
    if(root1 == root2) return true // 是同一棵树
    if(root1 == null && root2 != null || root2 == null && root1 != null) return false // 其中一个位置的值为空一个不为空
    if(root1.value != root2.value) return false // 相同位置的值不相等
    return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right)
    || compareTree(root1.left, root2.right) && compareTree(root1.right, root2.left)
}

console.log(compareTree(a1, a2))


// 遇到二叉树比较的问题时，必须要确定，左右两棵子树如果交换位置，既左右互换算不算同一棵二叉树，
// 以上写的是左右交换算同一棵二叉树
// 如果是笔试，没有特殊说明左右互换还是同一棵树，那么默认互换后不是同一棵树
// 如果面试，尽量问一下