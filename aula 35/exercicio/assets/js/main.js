// const elementos = [
//     {tag: 'p', texto: 'frase 1'},
//     {tag: 'div', texto: 'frase 2'},
//     {tag: 'footer', texto: 'frase 3'},
//     {tag: 'section', texto: 'frase 4'},

// ];

// const container = document.querySelector('.container');
// const div = document.createElement('div'); //serve para criar elementos

// for (let i = 0; i < elementos.length; i++){
//     let {tag, texto} = elementos[i];
//     let tagCriada = document.createElement(tag)
//     let textoCriado = document.createTextNode(texto)
//     // tagCriada.innerText = texto;
//     tagCriada.appendChild(textoCriado)
//     div.appendChild(tagCriada);
// }
// container.appendChild(div);








const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},

];

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let criaTag = document.createElement(tag)
    let criarTexto = document.createTextNode(texto)

 criaTag.appendChild(criarTexto)
 div.appendChild(criaTag)

}
container.appendChild(div)





