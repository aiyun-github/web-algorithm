// 25.代码实现中序后序还原二叉树
// 树
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E

let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
let hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a']

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

function f1(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return null
    let root = new Node(hou[hou.length - 1]) // 根节点
    let index = zhong.indexOf(root.value) // 根节点在中序中的位置

    let zhongLeft = zhong.slice(0, index)
    let zhongRight = zhong.slice(index + 1, zhong.length)

    let houLeft = hou.slice(0, index)
    let houRight = hou.slice(index, hou.length - 1)

    root.left = f1(zhongLeft, houLeft)
    root.right = f1(zhongRight, houRight)

    return root
}

let root = f1(zhong, hou)
console.log(root.left)
console.log(root.right)

// Node {
//     value: 'c',
//         left: Node { value: 'f', left: null, right: null },
//     right: Node { value: 'g', left: null, right: null }
// }
// Node {
//     value: 'b',
//         left: Node { value: 'd', left: null, right: null },
//     right: Node { value: 'e', left: null, right: null }
// }