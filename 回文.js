// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

function isPalindrome(s){
    if(s.length === 0) return
    s = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
const s = 'a 1 2 1 a'
const result = isPalindrome(s)
console.log(`${s} 是否为回文：${result}`)