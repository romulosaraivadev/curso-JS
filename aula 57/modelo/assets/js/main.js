function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),


        inicia() {
            alert('oi, iniciei')
        },
        //metodos
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                
            })
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia()