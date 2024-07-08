 // Declaração de função (Function hoisting)
 falarOi()
 function falarOi() {
    console.log('Oi');
 }

 //First-class objects (objetos de primeira classe)
//Function expression

const souUmDado = function() {
    console.log('Sou um dado')
};
souUmDado()

function executarFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
}

executarFuncao(souUmDado)

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('estou falando')
    }
}
obj.falar()