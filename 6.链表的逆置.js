// 链表的逆置
function Node(value) {
    this.value = value
    this.next = null
}
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

// 链表逆置
function nizhi(root) {
    if (root.next.next == null) { // 代表当前节点的第二个节点
        root.next.next = root // 让最后一个节点指向自己（倒数第二个节点）
        return root.next // 返回根节点的next，也就是5的next
    } else {
        let result = nizhi(root.next)
        root.next.next = root
        root.next = null
        return result
    }
}
let newRoot = nizhi(node1)
// 递归遍历
function bianLink(root) {
    if (root == null) return
    console.log(root.value)
    bianLink(root.next)
}
bianLink(newRoot) // 5,4,3,2,1