// const toUpper = str => str.split('').map(ch => ch.toUpperCase()).join('')
//
// const toWords = str => words(str)

type Writer = [any, string]

const words = s => s.split(/\s+/)
const toUpper = (str : string) : Writer => [str.split('').map(ch => ch.toUpperCase()).join(''), "toUpper "]

const toWords = (str: string) : Writer[] => [words(str), "toWords "]

const compose = (f1: Function, f2: Function): Function => {
    return (s: any  ) : Writer => {
        const p1 = f1(s)
        const p2 = f2(p1[0])
        return [p2[0], p1[1] + p2[1]]
    }
}

const identity = (x: any): Writer => [x, ""]

console.log(compose(toUpper, toWords)('hello thi s'))
console.log(compose(toUpper, identity)('hello thi s'))














