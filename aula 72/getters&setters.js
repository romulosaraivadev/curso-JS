// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: true, // configura a chave ou não
        get: function() {
            return estoque;
        },
        set: Function(valor) {
            
        }
    })

}
   


const p1 = new Produto('Camiseta', 20, 3)

console.log(p1)
console.log(p1.estoque)