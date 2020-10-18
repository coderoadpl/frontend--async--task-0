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