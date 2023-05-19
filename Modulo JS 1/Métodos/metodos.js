let pessoa = {
    nome: "filipe",
    idade: 26,
    dizerOla(){
        console.log("olá, Mundo! Meu nome é " + this.nome + " Minha idade é " + this.idade)
    }
}


console.log(pessoa)

pessoa.dizerOla()