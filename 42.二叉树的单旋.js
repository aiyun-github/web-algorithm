// 42.二叉树的单旋操作（左单旋、右单旋）

// 平衡二叉树的规则：
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

// 某一节点不平衡，如果左边浅，右边深，进行左单旋
// 例1：
//          A
//          \
//           C
//          /\
//         F  G
// 旋转为：
//          C
//         /\
//       A   G
//       \
//        F

// 例2 进行左单旋
//          2
//          \
//           5
//          /\
//         3  6
// 左单旋-旋转为：
//          5
//         /\
//       2   6
//       \
//        3

// 旋转节点：不平衡的节点为旋转节点（2）
// 新根：旋转之后称为根节点的节点（5）
// 变化分支：父级节点发生变化的那个分支
// 不变分支：父级绩点不变的那个分支

// 左单旋时：
// 旋转节点：当前不平衡的节点
// 新根：右子树的根节点
// 变化分支：旋转节点的右子树的左子树
// 不变分支：旋转节点的右子树的右子树


// 进行右单旋
//          6
//         /
//       3
//      /\
//     2  5

// 右单旋-旋转为：
//          5
//         /\
//       2   6
//       \
//        3


// 右单旋时
// 旋转节点：当前不平衡的节点
// 新根：左子树的根节点
// 变化分支：旋转节点的左子树的右子树
// 不变分支：旋转节点的左子树的左子树

// 进行左单旋
// 1.找到新根
// 2.找到变化分支
// 3.当前旋转节点的右子树为变化分支
// 4.新根的左孩子为旋转节点
// 5.返回新的根节点

// 进行右单旋
// 1.找到新根
// 2.找到变化分支
// 3.当前旋转节点的左子树为变化分支
// 4.新根的右孩子为旋转节点
// 5.返回新的根节点


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let node2 = new Node('2')
let node5 = new Node('5')
let node3 = new Node('3')
let node6 = new Node('6')

node2.right = node5
node5.left = node3
node5.right = node6

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

// 进行左单旋
function leftRotate(root) {
    // 1.找到新根
    let newRoot = root.right
    // 2.找到变化分支
    let changeTree = root.right.left
    // 3.当前旋转节点的右子树为变化分支
    root.right = changeTree
    // 4.新根的左孩子为旋转节点
    newRoot.left = root
    // 5.返回新的根节点
    return newRoot

}

// 进行右单旋
function rightRotate(root) {
    // 1.找到新根
    let newRoot = root.left
    // 2.找到变化分支
    let changeTree = root.left.right
    // 3.当前旋转节点的左子树为变化分支
    root.left = changeTree
    // 4.新根的右孩子为旋转节点
    root.right = root
    // 5.返回新的根节点
    return newRoot
}

// 对二叉树进行平衡操作要用到后序遍历
function change(root) { // 返回平衡之后的根节点
    if(isBalance(root)) return root
    if(root.left != null) root.left = change(root.left)
    if(root.right != null) root.right = change(root.right)
    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    if(Math.abs(leftDeep - rightDeep) < 2) {
        return true
    } else if (leftDeep > rightDeep) { // 不平衡，左边深，需要右旋
        return rightRotate(root)
    } else { // 不平衡，右边深，需要左旋
        return leftRotate(root)
    }

}


console.log(isBalance(node2))

let newRoot = change(node2)

console.log(isBalance(newRoot))
console.log(newRoot)