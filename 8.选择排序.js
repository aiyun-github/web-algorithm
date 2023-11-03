let arr = [4,1,6,9,3,2,8,7]

function compare(a,b){
    return a < b
}

function exchange(arr,a,b){
    let temp  = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

// 选择排序，内层循环，每一圈选出一个最大的，放在最后
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[maxIndex], arr[j])){
                maxIndex = j
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i)
    }
}

sort(arr)
console.log(arr)

// 任何一种算法都没有优劣之分，只有是否适合的场景