// (condição) ? 'valor para verdadeiro' : 'Valor para falso'
const potuacaUsuario = 1000;
const nivelUsuario = potuacaUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'preta' //para padronizar algo

console.log(nivelUsuario, corPadrao)


// if (potuacaUsuario >= 1000) {
//     console.log('Usuario VIP')
// } else {
//     console.log('Usuario normal')
// }