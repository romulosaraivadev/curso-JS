//factory function (função fabrica)
//Constructor function (função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome, 
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }

        
       
    };
}

const p1 = criaPessoa('Romulo', 'Saraiva', 1.95, 90)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
const p2 = criaPessoa('Andressa', 'Gomes', 1.70, 60)
console.log(p1.fala('falando sobre js'))