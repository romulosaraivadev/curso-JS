//IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))
// console.log(num1.toString() + num2);
// num1 = num1.toString() para mudar a variavel
// console.log(num1.toString(2)) essa nao muda a variavel
// console.log(num1.toFixed(2)) //para arredondar um numero quebrado
// console.log(Number.isInteger(num1)) para descobrir se o numero é inteiro

// console.log(Number.isNaN(temp))
// let temp = num1 + '5';
// console.log(temp)