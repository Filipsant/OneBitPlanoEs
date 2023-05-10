let primeiroNome = prompt("Informe o primeiro nome do Recruta: ")
let sobrenome = prompt ("Insira o Sobrenome do Recruta: ")
let campoDeEstudo = prompt("Qual é o campo de estudo do Recruta? ")
let anoDeNascimento = prompt("Qual ano o Recruta nasceu ? ")

alert(

    "Recruta cadastrado com sucesso!\n " + 
    "\n Nome Completo: " + primeiroNome + " " + sobrenome + "\n Campo de estudo: " + campoDeEstudo + "\n Idade: " + (2023 - anoDeNascimento)

)