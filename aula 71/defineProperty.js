// defineProperty / defineProperties
function Produto(nome, preco, estoque) {
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor da chave
        writable: true, // pode ou não alterar o valor. false: nao altera, true: altera
        configurable: true // configura a chave ou não
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Mostra o valor da chave
            writable: true, // pode ou não alterar o valor. false: nao altera, true: altera
            configurable: true // configura a chave ou não    
        },
        preco:{
            enumerable: true, // Mostra a chave
            value: preco, // Mostra o valor da chave
            writable: true, // pode ou não alterar o valor. false: nao altera, true: altera
            configurable: true // configura a chave ou não
    
        },
    })
}
   


const p1 = new Produto('Camiseta', 20, 3)

console.log(Object.keys(p1))