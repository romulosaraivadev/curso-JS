//não pode declarar constantes com paralavras reservadas tipo "let if ou let console ou let var"
// As constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número
// Os nomes das constantes não pode conter espaços ou traços
// É utilizado camelCase "let nomeCompletoDoCliente"
// Case-sensitive "let nomeCliente = 'romulo'"
//                 "let nomecrilete = 'romel'"

// Não pode modificar o valor de uma constante
// Não utilize 'var', utilize 'const'

const nome = 'João'
// + - * /
// String =  text | Number = Número
//typeof para descobrir o tipo da variavel
const primeiroNumero = '5'
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(typeof (primeiroNumero + segundoNumero))
