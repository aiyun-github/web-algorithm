// 遍历：将一个集合中的每一个元素进行获取并查看。
// 数组遍历
var a = [1,2,3,4,5]

function bianArr(arr) {
    if (arr == null) return
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
bianArr(a) // 结果：1,2,3,4,5


console.log('-------------------------------')
console.log('-------------------------------')
// 链表遍历
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

function bianLink(root) {
    var temp = root
    while(true) {
        if (temp != null) {
            console.log(temp.value)
        } else {
            break
        }
        temp = temp.next
    }
}
bianLink(node1) // 结果：1,2,3,4,5