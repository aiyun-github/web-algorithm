// 41.代码实现判断平衡二叉树

// 1.根节点的左子树与右子树的高度差不能超过1
// 2.这棵二叉树的每个子树都符合第一条


// 平衡二叉树
//          A
//         /\
//       B   C
//      /\  /\
//     D E F  G
//     \ \
//     H J


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
let h = new Node('h')
let j = new Node('j')

a.left = b
a.right =c
b.left = d
b.right = e
c.left = f
c.right = g
d.right = h
e.right = j

// 获取二叉树的深度
function getDeep(root) {
    if(root == null) return 0
    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    return Math.max(leftDeep, rightDeep) + 1
}

// 判断是否为平衡二叉树
function isBalance(root) {
    if(root == null) return true
    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    if(Math.abs(leftDeep - rightDeep) > 1) { // 不平衡
        return false
    } else {
        return isBalance(root.left) && isBalance(root.right)
    }
}

console.log(isBalance(a))