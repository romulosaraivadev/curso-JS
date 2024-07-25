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
    this.cor = cor;
}

Camisata.prototype = Object.create(Produto.prototype)
Camisata.prototype.constructor = Camisata;

Camisata.prototype.aumento = function(perentual) {
    this.preco = this.preco + (this.preco * (perentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111)
const camiseta = new Camisata('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plastico', 5)
caneca.estoque = 100

console.log(caneca)
console.log(caneca.estoque)
console.log(camiseta)
console.log(produto)