let arr = [4,1,6,9,3,2,8,7]

// 简洁版（缺点：性能查，会创建很多[]）
function quickSort(arr) {
    if (arr === null || !arr.length) return []
    // 选班长
    let leader = arr [0]
    // 小的站左边,大的站右边
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < leader) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    left = quickSort(left)
    right = quickSort(right)
    left.push(leader)
    return left.concat(right)
}

console.log(quickSort(arr))