// função contrutora retorna objetos
// função fabrica -. objtos
// contrutora sempre começa com letra maiuscula =. 'Pessoa' (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {

    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('romulo', 'Saraiva');
const p2 = new Pessoa('Maria', 'Oliveira')


p2.metodo()