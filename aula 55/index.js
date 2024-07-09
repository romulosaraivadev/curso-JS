//IIFE => immediately invoked function expression
(function () {
    
    const sobrenome = 'Saraiva'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Romulo'))
    }
    falaNome()
})();
