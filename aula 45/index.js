function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instacia de Date')
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: "2-digit",
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    // Tratar erro
    console.log(e)
} finally {
    console.log('tenha um bom dia')
}










/*
try {
    // É executada quando não há erros
    console.log(a)
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
} catch (e) {
    // É executada quando há erros
    console.log('Tratando o erro');
} finally {
    // Sempre
    console.log("Finally: Eu sempre sou executado")
}
*/