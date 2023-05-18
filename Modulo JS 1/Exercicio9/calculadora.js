function calcularAreaTriangulo (){
     const base = prompt("Informe a base do triangulo:")
     const altura = prompt("Informe a altura do triangulo:")
     return base * altura / 2
}


function calcularAreaRetangulo(){
    const base = prompt("Informe a base do Retangulo:")
    const altura = prompt("Informe a altura do Retangulo:")
    return base * altura
}

function calcularAreaQuadrado(){
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calcularAreaTrapezio(){
    const baseMaior = parseFloat(prompt ("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt ("Informe a base menor do trapézio:"))
    const altura = prompt ("Informe a altura do trapézio:")
    return(baseMaior + baseMenor) / 2
}

function calcularAreaCirculo(){
    const raio = prompt("Informe o raio ciruculo:")
    return(3.14 * raio * raio)
}

function exibirMenu(){
    return prompt(
        "calculadora geometrica\n" +
        "1. Calcular área de triangulo\n" +
        "2. calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n" 
    )
}

function execultar(){
    let opcao = ""

    do{
        opcao = exibirMenu()
        let resultado

        switch(opcao){
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado =
                calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção Invalida!")
                break
        }

        if(resultado) {
            alert("Resulado: " + resultado)
        }

    }while (opcao !== "6")
}

execultar()