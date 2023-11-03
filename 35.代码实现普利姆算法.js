// 33.普利姆算法（加点法）
// 1.任选一个点作为起点
// 2.找到以当前选中点为起点路径最短的边
// 3.如果这个边的另一端没有被联通进来，那么就连结
// 4.如果这个边的另一端也早就被连进来了，则看倒数第二短的边
// 5.重复2-4知道将所有的点都连通为止

// 图1
//                B
//              /｜ \
//           4/  ｜  \6
//           /   ｜   \
//          A    ｜8   D
//           \   ｜   / \
//           7\  ｜  /5  \7
//             \ ｜ /     \
//               C         E

// 图2
//                B
//              /  \
//           4/     \6
//           /       \
//          A         D
//                   / \
//                  /5  \7
//                 /     \
//               C         E

// 表示一个图，可以使用点集合和边集合
// 点集合： [a,b,c,d,e,g]
// 边集合：（表）
//      A   B   C   D   E
// A    0   4   7   Max Max
// B    4   0   8   6   Max
// C    7   8   0   5   Max
// D    Max 6   5   0   7
// E    Max Max Max 7   0
let max = 1000000
// 点集合
let pointSet = []
// 边集合
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

// 每次连结一个点都创建一个对象
function Node(value) {
    this.value = value
    this.neighbor = [] // 邻居节点
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')

pointSet.push(a)
pointSet.push(b)
pointSet.push(c)
pointSet.push(d)
pointSet.push(e)

// 获得起始点在点集合中的索引位置
function getIndex(str) {
    for (let i = 0; i < pointSet.length; i++) {
        if(str == pointSet[i].value) return i
    }
    return -1
}

/**
 * 根据点的集合获取最小代价的边
 * 此方法，根据当前已经有的节点，来进行判断，获取到距离最短的点
 * @param pointSet 点集合
 * @param distance 边集合
 * @param nowPointSet 当前已经连结进入的集合
 */
function getMinDisNode(pointSet, distance, nowPointSet) {
    let fromNode = null // 线段的起点
    let minDisNode = null // 线段的终端
    let minDis = max // 线段最短的距离，默认为max，要找到比max小的
    // 根据当前已有的这些点为起点，依次判断连接其他的点的距离是多少
    for (let i = 0; i < nowPointSet.length ; i++) {
        let nowPointIndex = getIndex(nowPointSet[i].value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ) // 获取当前节点的序号
        for (let j = 0; j < distance[nowPointIndex].length; j++) {
            let thisNode = pointSet[j] // thisNode表示distance中的点，但是这个点不是对象
            if(nowPointSet.indexOf(thisNode) < 0 // 首先这个点不能是已经接入的点
            && distance[nowPointIndex][j] < minDis) { // 其次点之间的距离得是目前的最短距离
                fromNode = nowPointSet[i]
                minDisNode = thisNode
                minDis = distance[nowPointIndex][j]
            }
        }
    }
    // 两个点相连
    fromNode.neighbor.push(minDisNode)
    minDisNode.neighbor.push(fromNode)
    return minDisNode
}

/**
 * 普利姆算法
 * @param pointSet 点集合
 * @param distance 边集合
 * @param start 起始点
 */
function prim(pointSet, distance, start) {
    let nowPointSet = []
    nowPointSet.push(start)
    // 获取最小代价的边
    while (true) {
        // 获取距离最小的节点
        let minDisNode = getMinDisNode(pointSet, distance, nowPointSet)
        nowPointSet.push(minDisNode)
        if (nowPointSet.length == pointSet.length) {
            break
        }
    }

}

prim(pointSet, distance, pointSet[2])
console.log(pointSet)