function execute(){
    return new Promise((resolve,reject) =>{
        console.log('A promise esta sendo execultada...')
        setTimeout(()=>{
            if (false) {
                reject(false)
            } else {
                console.log('Resolvendo a promise...')
                resolve(42) 
            }
            
        }, 1000 * 2)
    })
}

execute().then((result)=>{
    console.log(`a primise foi resolvida. O resultado foi: ${result}`)
  }).catch((err)=>{
     console.log(`A promise foi rejeitada! Motivo: ${err}`)
  }).finally(()=>{
    console.log('A promise foi finalizada.')
  })

//then utiliza quando a promise é resolvida
//catch utiliza para indentificar o erro e tratar o erro
//finally utiliza quando a promise é finalizada
