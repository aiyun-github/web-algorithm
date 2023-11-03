// 一只跳蚤往前跳方格，它一次可以跳1格，2 格或 3 格，但它每次跳 3格后需要休息下一次只能跳 1或2格，之后则还可以继续跳3 格。问它有几种不同的跳完 n 格的方法。例如，对 6格，它共有23 种跳法
var waysToStep = function(n) {
    // 创建一个数组 dp，用于存储跳到每个格子的跳法数
    let dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 4
    for(let i = 4; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    return dp[n]
};
console.log(waysToStep(6))