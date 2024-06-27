const pessoa = { //objeto
    nome: 'Romulo',
    sobrenome: 'Saraiva',
    idade: 29,
    endereco:{
        rua:'Rua Gumercindo Aguiar Juvencio',
        numero: 222
    }
};

//atribuição via desestrururação
//pode pegar mais de uma chave
//pode mudar o nome da chave tambem
const {nome: n = '', sobrenome, idade, endereco:{rua}, endereco, ...resto} = pessoa

console.log(n, resto);