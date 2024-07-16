//                -5        -4        -3       -2          -1
//                 0         1        2        3           4
const nomes = ['Eduardo', 'Maria', 'joana', 'Rômulo', 'Andressa']
 
nomes.splice(0, 0, 'Luiz', 'otavio', )
console.log(nomes)

//nomes.splice(indice atual, quais itens quero remover,add elem1, add elem2, add elem3 );
// pop
// const removidos = nomes.splice(-2, Number.MAX_VALUE) remove apos o indice -2 o numero maximo de arrays
// const removidos = nomes.splice(3, 1, 'João')
// console.log(nomes, removidos);
// // console.log(Number.MAX_VALUE)
