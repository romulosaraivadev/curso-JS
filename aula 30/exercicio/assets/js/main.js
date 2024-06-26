//criar uma função para alterar o dia da semana para nome
//criar uma função para altera o dia do mes para nome
//criar a função de formatar a data
// pegar a tag h1 e criar um tamplate string

function diaDaSemanaTexto(diaDaSemana) {
    let diaDaSemanaTexto;
    const data = new Date()
switch(diaDaSemana) {
    case 0:
    diaDaSemanaTexto = 'Domingo';
    return diaDaSemanaTexto;
    case 1:
    diaDaSemanaTexto = 'Segunda';
    return diaDaSemanaTexto;
    case 2:
    diaDaSemanaTexto = 'Terça';
    return diaDaSemanaTexto;
    case 3:
    diaDaSemanaTexto = 'Quarta';
    return diaDaSemanaTexto;
    case 4:
    diaDaSemanaTexto = 'Quinta';
    return diaDaSemanaTexto;
    case 5:
    diaDaSemanaTexto = 'Sexta';
    return diaDaSemanaTexto;
    case 6:
    diaDaSemanaTexto = 'Sabado';
    return diaDaSemanaTexto;
    default:
        diaDaSemanaTexto = ''
        return diaDaSemanaTexto
}

}

function mesDoAnoTexto(mesDoAno) {
    let mesDoAnoTexto
    switch(mesDoAno) {
        case 0: 
        mesDoAnoTexto = 'Janeiro'
        return mesDoAnoTexto
        case 1: 
        mesDoAnoTexto = 'Fevereiro'
        return mesDoAnoTexto
        case 2: 
        mesDoAnoTexto = 'Março'
        return mesDoAnoTexto
        case 3: 
        mesDoAnoTexto = 'Abril'
        return mesDoAnoTexto
        case 4: 
        mesDoAnoTexto = 'Maio'
        return mesDoAnoTexto
        case 5: 
        mesDoAnoTexto = 'Junho'
        return mesDoAnoTexto
        case 6: 
        mesDoAnoTexto = 'Julho'
        return mesDoAnoTexto
        case 7: 
        mesDoAnoTexto = 'Agosto'
        return mesDoAnoTexto
        case 8: 
        mesDoAnoTexto = 'Setembro'
        return mesDoAnoTexto
        case 9: 
        mesDoAnoTexto = 'Outubro'
        return mesDoAnoTexto
        case 10: 
        mesDoAnoTexto = 'Novembro'
        return mesDoAnoTexto
        case 11: 
        mesDoAnoTexto = 'Dezembro'
        return mesDoAnoTexto
        default:
        mesDoAnoTexto = ''
        return mesDoAnoTexto
    }
};

function correçaoData(num) {
    if (num <10 ) {
        return num = `0${num}`
    } else { num = ''}
}

function formataData(data) {
    const diaDaSemana = diaDaSemanaTexto(data.getDay());
    const dia = data.getDate();
    const mes = mesDoAnoTexto(data.getMonth());
    const ano = data.getFullYear();
    const horas = data.getHours()
    const minutos = data.getMinutes()

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${correçaoData(horas)}:${correçaoData(minutos)}`
};

const data = new Date()
const dataAtual = formataData(data)
let resposta = document.getElementById('resposta')

resposta.innerHTML = dataAtual
