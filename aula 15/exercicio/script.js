const numero = Number(prompt('escolha um número: '));
// numero = Number(numero); pode ser feito assim também
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `Raiz quadrada é ${numero ** 0.5}<br>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br>`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;
texto.innerHTML += `Arrendondado para cima: ${Math.ceil(numero)}<br>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br>`;
// texto.innerHTML += `Com duas casas decimais: ${Math.round(numero * 100) / 100}<br>`; pode ser feito assim tambem
