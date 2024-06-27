// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = ['B', 'C', 'A'];
// [a, b, c] = letras;

// console.log(a, b, c);

//... rest, ...spread

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [primeiroNumero, segundoNumero, .../*os 3 pontos pega o resto do away*/resto] = numeros;

// console.log(primeiroNumero, segundoNumero);
// console.log(resto)

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, ,tres, ,cinco, ,sete] = numeros; //para pular valores é so colocar virgula e espaço

// console.log(um, tres, cinco);

const numeros = [
//     0        1        2
//   0 1 2    0 1 2    0 1 2
    [1,2,3], [4,5,6], [7,8,9]
]

const [lista1, lista2, lista3] = numeros
console.log(lista2[1])