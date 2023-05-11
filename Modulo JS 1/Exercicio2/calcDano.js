const atacante = prompt("Qual o nome do personagem atacante?")
const ataque = prompt ("Qual é o seu nivel de ataque? ")


const defensor = prompt("Qual o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida tem seu personagem?")
const defesa = prompt("Qual é o seu  nivel de defesa? ")
const possuiEscudo = prompt("O personagem possui  escudo? (sim/nao) ")


let danoCausado = 0

if(ataque > defesa && possuiEscudo === "nao"){
    danoCausado = ataque - defesa
}else if (ataque > defesa && possuiEscudo === "sim"){
    danoCausado = (ataque - defesa) / 2
} 

pontosDeVida -= danoCausado

alert( atacante + " causou " + danoCausado + " pontos de dano " + defensor)

alert(
    atacante + "\nPoder de ataque: " + ataque + "\n\n" + 
    defensor + "\nPontos de vida: " + pontosDeVida + "\npoder de defesa: " + defesa + "\nPossui Escudo: " + possuiEscudo
)