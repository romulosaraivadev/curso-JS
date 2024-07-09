function retornaFuncao() {
    const nome = 'Romulo';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao()
console.dir(funcao())