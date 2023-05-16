const arr = ["frodo", "sam", "merry", "pippin", "gandalf", "arragorn", "legolas", "gimli"]
console.log(arr)

//Adicionar Elementos

//push(Final da array)
let tamanho = arr.push("Baromir")
console.log(arr)
console.log(tamanho)

//unshift ( começo da array)

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log (tamanho)
//Remover elementos

//pop (remove elemento no final da array)

let ultimoElemto = arr.pop()
console.log(arr)
console.log(ultimoElemto)

//shift(remove o elemento no final da array)

ultimoElemto = arr.shift()
console.log(arr)
console.log(ultimoElemto)

//Pesquisar por um elemento

//includes
const inclui = arr.includes("gandalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("gandalf")
console.log(indice)

//Cortar e Concatenar 

//slice(pegar partes especificas da array e cortar ela )
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log (arr)
console.log(hobbits)
console.log(outros)

//concat(juntar duas arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituiçao dos Elementos

//splice (Remover um grupo de elementos da array e substituir por outros elementos)
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos 

for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}


