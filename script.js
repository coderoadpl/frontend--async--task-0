console.log('Hello ' + '1' + '!')

console.log('Hello ' + '2' + '!')

console.log('Hello ' + '3' + '!')

console.log('Hello ' + '4' + '!')

const sayHello = () => {
    // debugger
    return `Hello ${getName()} ${getLastName()}`
}

const getName = () => 'Mateusz'
const getLastName = () => 'Choma'

console.log(sayHello())

console.time()
// const length = 1000 * 1000 * 1000
const length = 10 * 1000 * 1000
for (let i = 0; i < length; i++) {
    if (i === (length - 1)) console.log(i + 1)
}
console.timeEnd()