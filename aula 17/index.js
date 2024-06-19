/*function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    //tudo que esta dentro da função esta protegido, nao da para modificar
    //quando tiver a palavra return é pq a função acabou
} */
// const resultado = soma(5, 5)
// console.log(resultado)

/*const raiz = function(n) {
    return n **0.5
}
console.log(raiz(20))
//essa é uma maneira de criar uma função
*/

const raiz = n =>  n **0.5 //quando tem um parametro só pode tirar os pareteses
// pode tirar o return e os couchetes

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))