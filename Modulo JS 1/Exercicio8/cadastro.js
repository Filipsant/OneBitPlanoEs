const imoveis = []
let opcao = ""

do{
   opcao = prompt (
    "Bem vindo(a) ao cadastro de imoveis\n! "+
    "Totais de Imoveis: " + imoveis.length + 
    "\n\nEscolha uma opçao:\n1. Novo imovel\n2. Listar de imóveis\n3. Sair"
    )

    switch(opcao){
       case "1":
        const imovel = {}

        imovel.proprietario = prompt("Informe o nome do proprietario do imovel: ")
        imovel.quartos = prompt("Quantos quartos possui o imóvel?")
        imovel.banheiros = prompt("Quantos banheiros existem no imóvel?")
        imovel.garagem = prompt("O imovel possui garagem ?(Sim/Não)")
        
        const confirmacao = confirm(
        "Salvar este Imóvel?\n" +
        "\nProprietario:" + imovel.proprietario +
        "\nQuartos:" + imovel.quartos +
        "\nBanheiros:" + imovel.banheiros + 
        "\nGaragem:" + imovel.garagem
        )
        
        if(confirmacao){
            imoveis.push(imovel)
            alert("imovel salvo com sucesso!")
        }else{
            alert("Voltando ao menu")
        }
        break
       case "2":
          for(let i = 0 ; i < imoveis.length; i++) {
            alert(
                "Imóvel" + (i + 1) +
                "\nProprietario:" + imoveis[i].proprietario +
                "\nQuartos:" + imoveis[i].quartos +
                "\nBanheiros:" + imoveis[i].banheiros +
                "\nGaragem:" + imoveis[i].garagem
            )
            break
          }
       case "3":
        alert("Saindo...")
        break
       default:
        alert("Opção Invalida!")
        break
    }
}while(opcao !== "3")