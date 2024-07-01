const pessoa = {
    nome: 'Romulo',
    sobrenome: 'Saraiva',
    idade: 29
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}



//duas opções de pegar o algum objeto
// console.log(pessoa.nome);
// console.log(pessoa['nome'])
// const frutas = ['Pera','Maçã', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas[index])
// }

// for (let i = 0; i < frutas.length; i++)
//     console.log(frutas[i])
