/*
&& -> false && true -> false "o valor mesmo" 
|| ->

FALSY
*FALSE
0
'' "" ``
null / undefined
NaN
*/
// function falaOi (){
//     return 'oi';
// }

// let vaiExecutar = 'joao';

// console.log(vaiExecutar && falaOi())

// const corUsuario = 'preto'; //string ele usa como verdadeiro
// const conrPadrao = corUsuario || 'red';

// console.log(conrPadrao)

const a = 0
const b = null
const c = false 
const d = false
const e = NaN

console.log(a || b || c || d || e) // retorna o ultimo
