const veiculo1 = prompt("Informe do nome do primeiro veiculo: ")
const velocidade1 = prompt("Informe a velocidade do primeiro veiculo: ")

const veiculo2 = prompt("Informe do nome do segundo veiculo: ")
const velocidade2 = prompt("Informe a velocidade do segundo veiculo: ")

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rapido que " + veiculo2)
}else if(velocidade2 > velocidade1){
    alert(veiculo2 + " é mais rapido que " + veiculo1)
}else {
    alert(veiculo1 + " e  " + veiculo2 + " possuem mesma velocidade")
}