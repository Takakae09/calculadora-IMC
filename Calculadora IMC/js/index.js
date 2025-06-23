const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const idade = document.querySelector('#idade')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

console.log(calcular)


calcular.addEventListener('click', () => {
//aqui dentro vai o que acontec quando o botao e clicado 
const pesovalor = parseFloat(peso.value)
const alturavalor = parseFloat(altura.value)

const imc = pesovalor / (alturavalor * alturavalor)

let classificacao = ''

if (imc < 18.5){
    classificacao = "Abaixo do peso"
}

else if (imc < 25){
    classificacao = "peso normal"
}

else if (imc >30) {
    classificacao = "Acima do peso"
}

else {
    classificacao = "Obesidade  grau 1"
}

resultado.value = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`


})
