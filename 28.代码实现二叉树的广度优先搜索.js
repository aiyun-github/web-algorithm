// 27.代码实现二叉树的广度优先搜索
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

// 广度优先搜索，
function f1(rootList, target) {
    if(rootList == null || rootList.length == 0) return false
    let childList = [] // 当前层所有节点的子节点，都在这个list中，这样进入下一层级的时候就可以遍历整个层级的节点
    for (let i = 0; i < rootList.length; i++) {
        if(rootList[i] != null && rootList[i].value == target) {
            return true
        } else {
            childList.push(rootList[i].left)
            childList.push(rootList[i].right)
        }
    }
    return f1(childList, target)
}

console.log(f1([a], 'e'))