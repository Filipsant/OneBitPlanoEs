function normalSum(a,b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2,2)}`)


const anonymmousSum = function(a,b){
    return a + b
}

console.log(`Soma anonima: ${anonymmousSum(2,2)}`)

const arrowSum = (a,b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(2,2)}`)


const subtract = (a,b) => a - b

console.log(`Subtração: ${subtract(5,6)}`)

const double = n => `O dobro de ${n} é ${n * 2}
`
const number = 21
console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0]=== 'P')

console.log(startingWithP)