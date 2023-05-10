let entrada1 = prompt("Infome o primeiro numero") 
let entrada2 = prompt("Informe o segundo numero")

let x = parseFloat(entrada1)
let y = parseFloat(entrada2)

let soma = x + y
let subtraçao = x - y
let multiplicaçao = x * y
let divisao = x / y
 

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtraçao + 
    "\nMultiplicação: " + multiplicaçao +
    "\nDivisão: " + divisao
    )
