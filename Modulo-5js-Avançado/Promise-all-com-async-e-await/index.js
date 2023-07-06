function waitFor(seconds){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4,5,9,13,77]
console.time('map')
async function execute(){
    const squeres= await Promise.all(numbers.map(async (number) =>{
        await waitFor(2)
        return number * number
    })) 
    console.log(squeres)

    console.timeEnd('map')
}

execute()

