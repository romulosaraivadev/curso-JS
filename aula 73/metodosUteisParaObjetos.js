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
const caneca = Object.assign({}, produto, {material: 'porcelana'})

caneca.nome = 'Luiz Otavio'
caneca.preco = 2.8
// produto.nome = 'Luiz Otavio'
console.log(produto)
console.log(caneca)