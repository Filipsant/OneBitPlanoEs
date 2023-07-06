 async function imc(weigth, height){
    if(typeof weigth !== 'number'|| typeof height !== 'number'){
       return Promise.reject('argument must be of type number')
    }
    return weigth / (height * height)
    
}

async function showImc(weigth, height){
    try {
        console.log(`Calculando o IMC para peso ${weigth} e altura ${height}`)

        const result = await imc(weigth,height)

        console.log(`O resultado do IMC foi de ${result}.`)

        if(result < 18.5) console.log('situaçao: Magreza')
        else if (result < 25)console.log('Situação: Normal')
        else if (result < 30)console.log('Situação: Sobrepeso')
        else if ( result < 40)console.log('Situação: Obesidade')
        else console.log('Situação: Obesidade grave')
    } catch (err) {
        console.log(err)
    }
    
}

showImc(71,1.75)
showImc(105,1.75)
showImc(71,"texto")
showImc(50,1.40)