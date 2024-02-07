const identity = (a) => a

const compose = (f1, f2) => arg => f2(f1(arg))

const addOne = x => x + 1

// testing if compose function respects identity
console.log(addOne(10) === compose(addOne, identity)(10))


