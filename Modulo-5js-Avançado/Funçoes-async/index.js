/*async function asyncSum(a, b) {
  return a + b
}

 async function asyncSubtract(a, b) {
   return a - b
  }
const sumResult = asyncSum(40,33)
const subtractResult = asyncSubtract(50,33)
Promise.all([sumResult,subtractResult]).then(results => {
   console.log(results)
}).catch(err =>{
   console.log(err)})*/

   const numbers = [4,6,7,8,9]

async function asyncSquare(x){
   return x* x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares =>{
    console.log(squares)
}).catch(err =>{
    console.log(err)
})
