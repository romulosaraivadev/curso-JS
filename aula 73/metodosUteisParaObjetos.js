/*
Object.values
Object.entries
Object.assign(den. any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)
// ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
object.DefineProperties (define varioas propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value:'Qualquer outra coisa'
// })
// const caneca = Object.assign({}, produto, {material: 'porcelana'})

// caneca.nome = 'Luiz Otavio'
// caneca.preco = 2.8
// produto.nome = 'Luiz Otavio'
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome ='outra coisa'

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}
