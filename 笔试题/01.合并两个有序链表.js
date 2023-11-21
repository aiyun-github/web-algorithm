// 题⽬描述
// 将两个升序链表合并为⼀个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例：
// 输⼊：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function Node(value) {
    this.value = value
    this.next = null
}

let nodeA1 = new Node(1)
let nodeA2 = new Node(2)
let nodeA4 = new Node(4)

let nodeB1 = new Node(1)
let nodeB3 = new Node(3)
let nodeB4 = new Node(4)

nodeA1.next = nodeA2
nodeA2.next = nodeA4
nodeA4.next = null

nodeB1.next = nodeB3
nodeB3.next = nodeB4
nodeB4.next = null

function mergeTwoLink(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if(l1.value < l2.value) {
        l1.next = mergeTwoLink(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLink(l1, l2.next)
        return l2
    }
}
let result = mergeTwoLink(nodeA1, nodeB1)
console.log(result)
