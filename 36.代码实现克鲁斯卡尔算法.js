// 34.克鲁斯卡尔算法（加边法）
// 1.选择最短的边进行连结
// 2.要保证连结的两端至少有一个点是新的点
// 3.或者 这个边是将两个部落进行连结的
// 4.重复1-3直到将所有的点都连结到一起
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

function canLink(resultList, tempBegin, tempEnd){
    let beginIn = null
    let endIn = null
    for (let i = 0; i < resultList.length; i++) {
        if(resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i]
        }
        if(resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i]
        }
    }
    // 两个点都是新的点（都不在任何部落里）—— 可以连结，产生新的部落
    // begin 在A部落，end 没有部落 —— A部落扩张一个村庄
    // end 在A部落，begin 没有部落 —— A部落扩张一个村庄
    // begin 在A部落，end 在B部落 —— 将AB两个部落合并
    // begin 和 end 在同一个部落 —— 不可以连接
    if(beginIn != null && endIn != null && beginIn == endIn){
        return false
    }
    return true
}

function link(resultList, tempBegin, tempEnd){
    let beginIn = null
    let endIn = null
    for (let i = 0; i < resultList.length; i++) {
        if(resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i]
        }
        if(resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i]
        }
    }
    if(beginIn == null && endIn == null){ // 两个点都是新的点（都不在任何部落里）—— 可以连结，产生新的部落
        let newArr = []
        newArr.push(tempBegin)
        newArr.push(tempEnd)
        resultList.push(newArr)
    } else if (beginIn != null && endIn == null) { // begin 在A部落，end 没有部落 —— A部落扩张一个村庄
        beginIn.push(tempEnd)
    } else if (beginIn == null && endIn != null ) { // end 在A部落，begin 没有部落 —— A部落扩张一个村庄
        endIn.push(tempBegin)
    } else if (beginIn != null && endIn != null && beginIn != endIn) { // begin 在A部落，end 在B部落 —— 将AB两个部落合并
        let allIn = beginIn.concat(endIn)
        let needRemove = resultList.indexOf(endIn)
        resultList.splice(needRemove, 1)
        needRemove = resultList.indexOf(beginIn)
        resultList.splice(needRemove, 1)
        resultList.push(allIn)
    }
    tempBegin.neighbor.push(tempEnd)
    tempEnd.neighbor.push(tempBegin)
}

function kruskal(pointSet, distance) {
    let resultList = [] // 这里是二维数组，此数组代表的是有多少个"部落"

    while (true) {
        let minDis = max // 线段距离
        let begin = null // 起始点
        let end = null // 终点
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i]
                let tempEnd = pointSet[j]
                if(i != j // 去掉自己到自己的距离，因为都是0
                    && distance[i][j] < minDis
                    && canLink(resultList, tempBegin, tempEnd)
                ) {
                    minDis = distance[i][j]
                    begin = tempBegin
                    end = tempEnd
                }
            }
        }
        link(resultList, begin, end)
        if(resultList.length == 1 && resultList[0].length == pointSet.length) { // 只存在一个部落 & 这个部落里的村庄数量和所有村庄总和相等，代表所有村庄都在一个部落
            break
        }
    }
}

kruskal(pointSet, distance)
console.log(pointSet)