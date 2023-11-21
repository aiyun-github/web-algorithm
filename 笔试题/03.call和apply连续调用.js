console.log.call.call.call.call.call.apply((a) => a, [1, 2])

// a.b.c.d.f.e()

// 函数.apply(参数 1, [1, 2])
// 相当于 参数 1.函数(1, 2)
// 即将参数 1作为对象调用函数，将[1,2]最为函数参数传入，这时函数的this指对象参数 1
// 以上代码简化相当于如下代码
// ((a) => a).call(1,2)
// ((a) => a)(2)
// 没有输出

// 如果想看输出结果打印一下，输出2
console.log(console.log.call.call.call.call.call.apply((a) => a, [1, 2]))