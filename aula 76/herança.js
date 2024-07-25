// Produto -> aumento, desconto
// Camiseta = cor, Caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camisata(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camisata.prototype = Object.create(Produto.prototype)

const camiseta = new Camisata('Regata', 7.5, 'Preta')
camiseta.aumento(10)
console.log(camiseta)