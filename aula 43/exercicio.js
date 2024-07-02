//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÂO é divisível por 3 e 5 = retona o próprio número
//Checar se o número é realmente um número = retornar o proprio numero
//Use a função com números de 0 a 100


//minha resolução
// function recebeNumero (num) {

//  if(num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz'
// }else if (num % 3 === 0) {
//     return "Fizz"
// } else if ( num % 5 === 0) {
//     return "Buzz"
// } else if(num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz'
// } else if (typeof num !== 'number'){
//     return num
// }
// }

// for (let i = 0; i <= 100; i++){
//     console.log(recebeNumero(i))
// }


function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if (numero % 3 ===0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 ===0) return 'Fizz';
    if (numero % 5 ===0) return 'Buzz';
    return numero
}
console.log('a', fizzBuzz('a'))
for ( let i =0; i<= 100; i++) {
    console.log(i, fizzBuzz(i))
}
