function Node(value) {
    this.value = value
    this.next = null
    this.pre = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.pre = node1
node2.next = node3
node3.pre = node2
node3.next = node4
node4.pre = node3
node4.next = node5
node5.pre = node4
node5.next = null

// 双向链表的优点，无论给出哪一个节点，都能对整个链表进行遍历
// 缺点：多耗费一个引用的空间，而且构建双向链表比较复杂