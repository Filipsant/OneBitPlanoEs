const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
      textoFinal += indice + "."
      textoFinal += vaga.nome 
      textoFinal += "(" + vaga.candidatos.length + "cadidatos )\n"
      return textoFinal
    }, "")
    alert(vagasEmTexto)
}


function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma  descriçao para a vaga")
    const dataLimite = prompt ("Informe uma data limite (dd/mm/aaaa)")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações ?\n" +
        "nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite

    )

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga(){
    const indice = prompt ("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidats inscritos" + candidatosEmTexto
    )
}


function inscrverCandidato(){
    const candidato = prompt("Informe o nome do candidato(a): ")
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]
    
    const confirmacao = confirm(
        "deseja inscrever o candidato " + candidato + "na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    
    if(confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscriçao realizada.")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja exlucir a vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    if(confirmacao){
        vaga.splice(indice, 1)
        alert("Vaga exluida ")
    }
}

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma  das opções:" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar nova vaga"+
        "\n3. Exibir uma vaga"+
        "\n4. Increver um(a) candidato(a)"+
        "\n5. Excluir uma vaga"+
        "\n6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""

    do{
      opcao = exibirMenu()

      switch(opcao){
        case "1":
            listarVagas()
            break
        case "2":
            novaVaga()
            break
        case "3":
            exibirVaga()
            break
        case "4":
            inscrverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção Invalida!")
      }
    }while(opcao != "6")
}

executar()