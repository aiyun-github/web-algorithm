// 二叉树的diff算法

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

a2.left = c2
a2.right = b2
c2.left = f2
// c2.right = g2 // 删除
b2.left = d2
b2.right = e2
e2.right = g2 // 新增

// 结果要知道：新增了什么，修改了什么，删除了什么
// {type: '新增', origin: null, now: c2},
// {type: '修改', origin: c1, now: c2},
// {type: '删除', origin: c2, now: null}
// let diffList = []

function diffTree(root1, root2, diffList) {
    if(root1 == root2) return diffList
    if(root1 == null && root2 != null) { // 新增了节点
        diffList.push({type: '新增', origin: null, now: root2})
    } else if(root2 == null && root1 != null) { // 删除了节点
        diffList.push({type: '删除', origin: root1, now: null})
    } else if(root1.value != root2.value) { // 相同位置的节点值不同，修改了节点
        diffList.push({type: '修改', origin: root1, now: root2})
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    } else {
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    }

}

let diffList = []
diffTree(a1, a2, diffList)
console.log(diffList)
