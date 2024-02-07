const memoize = fn => {
    const memo = {}
    return x => {
        if(x in memo){
            return memo[x]
        }
        const result = fn(x)
        memo[x] = result
        return result
    }
}

const factorial = x => Array(x).fill(0).map((n, i) => i + 1).reduce((prev, cur) => prev * cur, 1)

const memoizedFactorial = memoize(factorial)

console.time('First Call')
console.log(memoizedFactorial(123))
console.timeEnd('First Call')

console.time('Subsequent Call')
console.log(memoizedFactorial(123))
console.timeEnd('Subsequent Call')

console.time('Subsequent Call')
console.log(memoizedFactorial(123))
console.timeEnd('Subsequent Call')
