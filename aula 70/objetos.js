// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };
//duas formas de acessar o objeto
// console.log(pessoa['nome'])
// console.log(pessoa.sobrenome)

// const chave =   'sobrenome';
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object()
// pessoa1.nome = 'Romulo'
// pessoa1.sobrenome = 'Saraiva'
// pessoa1.idade = 29;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade
// }
// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }



// Factory function / Constructor function / Classes
//factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, 
//         sobrenome,
//          nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Romulo', 'Saraiva')
// console.log(p1.nomeCompleto())

//Costructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this) // serve para travar o objeto, nao da para mudar nada mais depois desse codigo
}

//o que a palavre new faz:
// Ela cria um objeto vazio e atrela a palavra 'this' ao objeto { } <- this
const p1 = new Pessoa('Romulo' , 'Saraiva')
p1.nome = 'outra coisa'
const p2 = new Pessoa('Andressa' , 'Gomes')
console.log(p1)
console.log(p2)