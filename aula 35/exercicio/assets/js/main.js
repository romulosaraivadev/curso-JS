const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},

];

const container = document.querySelector('.container');
const div = document.createElement('div'); //serve para criar elementos

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);