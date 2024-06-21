objetos
const pessoal = {
    nome: 'Rômulo',
    sobrenome: 'Saraiva',
    idade: 29,

    fala(){
        console.log(`minha idade é ${this.idade}.`);
    }, 

    incrementaIdade(){
        this.idade++;
    }
}

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();



// function criaPessoa (nome, sobrenome, idade){ //parametro
//     return {nome,sobrenome,idade};
// }

// const pessoal = criaPessoa('Rômulo', 'Saraiva', 29); // argumento
// const pessoa2 = criaPessoa('Andressa', 'Gomes', 24); // argumento
// const pessoa3 = criaPessoa('Rita', 'Gomes', 45); // argumento
// const pessoa4 = criaPessoa('Marilene', 'David', 54); // argumento
// const pessoa5 = criaPessoa('Samily', 'Saraiva', 24); // argumento

// console.log(pessoal.nome, pessoa4.nome);


/*const pessoal = {
    nome: 'Romulo',
    sobrenome: 'Saraiva',
    idade: 29
};

console.log(pessoal.nome) 
//criar um objeto
*/