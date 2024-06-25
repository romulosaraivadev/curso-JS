function calcImc(){
let formulario = document.getElementById('formulario')
let peso = document.getElementById('peso').value
let altura = document.getElementById('altura').value
peso = Number(peso)
altura = Number(altura)
let imc = peso / (altura* altura)
let res = document.getElementById('resposta')

let categoria;
if (altura == 0 || peso == 0){
    alert('digite um peso e altura')
}
else if (imc < 18.5){
    categoria = "(Baixo do peso)"
    res.style.background = 'greem'
} else if (imc <= 18.5 && imc >= 24.9) {
    categoria = "(Peso normal)"
    res.style.background = 'greem'
} else if (imc <= 25 && imc >= 29.9) {
    categoria = "(Sobrepeso)"
    res.style.background = 'greem'
} else if (imc <= 30 && imc >= 34.9) {
    categoria = "(Obesidade grau 1)"
    res.style.background = 'greem'
} else if (imc <= 35 && imc >= 39.9) {
    categoria = "(Obesidade grau 2)"
    res.style.background = 'greem'
} else {
    categoria = "(Obesidade grau 3)"
    res.style.background = 'greem'
}
res.innerHTML = `seu IMC é ${imc.toFixed(2)} e você esta clasificado como ${categoria}`

formulario.addEventListener('submit', evento)
evento.preventDefault()
}