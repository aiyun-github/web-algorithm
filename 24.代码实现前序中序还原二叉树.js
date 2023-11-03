// 24.代码实现前序中序还原二叉树
// 树
//          A
//         /\
//       C   B
//      /\  /\
//     F G D  E

let qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

 function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null
     let root = new Node(qian[0])
     let index = zhong.indexOf(root.value) // 找到根节点在中序遍历中的位置

     // 截取前序遍历的左子树、右子树
     let qianLeft = qian.slice(1, index + 1)
     let qianRight = qian.slice( index + 1, qian.length)

     // 截取中序遍历的左子树、右子树
     let zhongLeft = zhong.slice(0, index)
     let zhongRight = zhong.slice(index + 1, zhong.length)

     // 根据左子树的前序和中序还原左子树并赋值给root.left
     root.left = f1(qianLeft, zhongLeft)
     // 根据右子树的前序和中序还原右子树并赋值给root.left
     root.right = f1(qianRight, zhongRight)

     return root
 }

 let root= f1(qian, zhong)
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