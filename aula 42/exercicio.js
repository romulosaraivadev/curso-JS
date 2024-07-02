// escrever uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem 

//minhas resoluções 
// function ePaisagem (altura, largura) {
//     if (altura < largura) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(ePaisagem(250, 300))

// const ePaisagem = (altura, largura) => altura < largura ? true : false;

// console.log(ePaisagem(15000, 2500))

//resoluções do professor

// function ePaisagem (largura, altura) {
//     return largura > altura; //não precisa especificar se é true ou false, ja acontece normalmente
// }
// console.log(ePaisagem(1920, 1920))

const ePaisagem = (altura, largura) => altura < largura;
console.log(ePaisagem(1080, 1920));