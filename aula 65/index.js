// Filter -> vai sempre retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
// const numeros = [5, 50, 80,1, 2,3,5,8,7,11,15,22,27];
// const numerosFiltrados = numeros.filter((valor, indice, array) =>  {
    
//     return valor > 10 
// });
// console.log(numerosFiltrados)


// retorne as pessoa que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Romulo', idade: 29},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallece', idade: 47},
]

// const pessoasComNomeGrande = pessoas.filter(obj =>  obj.nome.length >= 5) 
//  console.log(pessoasComNomeGrande)

// const pessoasComMaiorIdade = pessoas.filter(valor => valor.idade >= 50)

// console.log(pessoasComMaiorIdade)

const pessoasQueTerminaComA = pessoas.filter( valor => valor.nome.toLocaleLowerCase().endsWith('a'))
// const pessoasQueTerminaComA = pessoas.filter( valor => valor.nome.slice(-1) === 'a') // outra forma de fazer

console.log(pessoasQueTerminaComA)