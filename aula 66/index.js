// //map = altera o valor do array sem mudar no tamanho original
// //dobrar o valor dos numeros

// const numeros = [5, 50, 80,1, 2,3,5,8,7,11,15,22,27];
// const numerosEmDobro = numeros.map(valor => valor * 2 )
// console.log(numerosEmDobro)












//para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Romulo', idade: 29},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallece', idade: 47},
];

const soNomes = pessoas.map(valor => valor.nome)
console.log(soNomes)

// const removeNomes = pessoas.map((valor) => {
//     delete valor.nome
//      return valor
// })

const removeNomes = pessoas.map(valor => ({idade: valor.idade}))
console.log(removeNomes)

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice
    return newObj
})

console.log(comIds)