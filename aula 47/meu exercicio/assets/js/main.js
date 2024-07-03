const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event) {
    alert('cliquei em iniciar')
})
pausar.addEventListener('click', function(event) {
    alert('cliquei em pausar')
})
zerar.addEventListener('click', function(event) {
    alert('cliquei em zerar')
})