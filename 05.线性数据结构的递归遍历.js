// 数组的递归遍历
var a = [1,2,3,4,5]

function bianArr(arr, i) {
    if (arr == null || arr.length <= i) return
    console.log(arr[i])
    bianArr(arr, i+1)
}
bianArr(a, 0) // 结果：1,2,3,4,5


console.log('-------------------------------')
console.log('-------------------------------')
// 链表的递归遍历
function Node(value){
    this.value = value
    this.next = null
}
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4= new Node(4)
var node5= new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

// 递归遍历，必须有出口
function bianLink(root) {
    if (root == null) return
    console.log(root.value)
    bianLink(root.next)
}
bianLink(node1) // 结果：1,2,3,4,5