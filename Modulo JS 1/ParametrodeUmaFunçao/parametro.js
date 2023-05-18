function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2))
}


//dobro(5)
//dobro(7)
//dobro()

function dizerOla (name ="Mundo"){
    alert("Olá, "+ name + "!")
}

//dizerOla("Filipe")
//dizerOla()

function soma(a, b, c, d){
    alert("O resultado da soma é " + (a + b ))
}

//soma(9, 10)

function criarUsuario( nome, email, senha, tipo = "admin"){
     const usuario = {
        nome,
        email,
        senha,
        tipo
     }
     console.log(usuario)
}

//criarUsuario("Filipe", "filipsats@gmail.com", "1234")

function muitosParametros(nome, telefone, endereco, aniversario,email, senha){
    //....
}
function objetoComoParametro(usuario){
    //....
    usuario.nome
    usuario.email
}
const dadoDoUsuario = {
    nome: ""
    telefone: ""
    email:""
    senha: ""
    endereço: ""
    aniversario:""
}

objetoComoParametro(dadoDoUsuario)