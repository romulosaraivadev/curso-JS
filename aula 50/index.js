// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c)
    
}
funcao(1,2,3,4,5,6,7,8,9,10);

function funcaoB(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
    
}
funcaoB(1,2,3);

function soma(a, b = 2, c = 4) {
   
    console.log(a + b + c)
    
}
soma(2, null, 20);

function desestruturacao({nome, sobrenome, idade}) {
   //funcina com array tambem é so trocar {} por []
    console.log(nome, sobrenome, idade)
    
}
let obj = {nome: 'Luiz', sobrenome: 'Otavio', idade:29};
desestruturacao(obj)

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
      if (operador === '+')  acumulador += numero
      if (operador === '-')  acumulador -= numero
      if (operador === '/')  acumulador /= numero
      if (operador === '*')  acumulador *= numero
    }
    console.log(acumulador)
}
conta('/', 1, 20, 30, 40, 50)

const restOperator = (...args) => {
    console.log(args)
}
restOperator('+', 10, 20, 30)