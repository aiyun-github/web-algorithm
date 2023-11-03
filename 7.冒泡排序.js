let arr = [4,1,6,9,3,2,8,7]

// 比较
function compare(a,b) {
    return a > b
}

// 交换
function exchange(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

// 排序
function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j+1])) {
                exchange(arr, j, j+1)
            }
        }
    }
}

sort(arr)
console.log(arr)