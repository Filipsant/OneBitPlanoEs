const numero = prompt("Olá, eu sou o Robo da tabuada!\n" +
"Informe o número que você deseja calcular a tabuada: ")
let resultado = ""

for(let fator = 1; fator <= 20; fator++){
    resultado += "->" + numero + "*" + fator + "= " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado )