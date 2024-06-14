/*
Romulo Saraiva tem 28 anos, pesa 90 kg 
tem 1.85 de altura e seu IMC é de 26.95
Luiz Otavio nasceu em 1980
*/

const nome = 'Romulo'
const sobrenome = 'Saraiva'
const idade = 28
const peso = 90
const altura = 1.85
const dataAtual = new Date()
let imc // peso / (altura * altura)
let anoNascimento = dataAtual.getFullYear() - idade
imc = peso / (altura * altura)
// tamplate strings
console.log (`${nome} ${sobrenome} tem ${idade}, pesa ${peso} kg`)

console.log ('tem', peso, 'de altura e seu IMC é de', imc)
console.log (`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
