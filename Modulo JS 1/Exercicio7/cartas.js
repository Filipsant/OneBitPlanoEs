const baralho = []
let opcao = ""


do {
    opcao = (
        "Cartas no baralho" + baralho.length + "\n1. Adiconar uma carta\n2. Puxar uma carta\n3. Sair"
    ) 

    switch(opcao) { 
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert("Não nenhuma carta no baralho")
            }else{
                alert("Voce puxou um(a)" + cartaPuxada)
            }
        case "3":
            alert("Saindo...")
            break
        default:
           // alert("Opção inválida!")
            
    
    }

}while(opcao !== "3")

