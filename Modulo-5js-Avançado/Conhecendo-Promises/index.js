//pendente - pending
//resolvida - resolved
//rejeitada - rejected
//finalizada

function execute(){
    //faz alguma coisa 
    return new Promise((resolve,reject) =>{
        console.log('A promise esta sendo execultada...')
        setTimeout(()=>{
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(()=>{
    console.log(p)
}, 2000)