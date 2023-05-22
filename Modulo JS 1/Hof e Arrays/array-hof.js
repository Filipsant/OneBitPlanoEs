const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  //Map (trasformar uma Array. pega a array e criar outra com base na anterior)


const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)

//Filter(Filtrar elementos da array, selecionar elementos expecificos de uma array e tambem cria uma nova array com esses elementos)



const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)


//Reduce (ele serve para transformar em outro elemento ou outro valor )

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem,){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado,personagem){
  if (valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  }else{
    valorAcumulado[personagem.raca]= [personagem]
  }

  return valorAcumulado
}, {})

console.log(racas)


//Sort (ordernar arrays, pegar um elemento de uma arrya e mover ele de lugar conforme o criterio que vamos ordernar o elemento)

personagens.sort(function(a, b){
    return a.nivel - b.nivel
})

console.log(personagens)








