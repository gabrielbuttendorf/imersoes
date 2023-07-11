let numeroSecreto = parseInt(Math.random() * 11)
let elementoTentativas = document.getElementById('tentativas')
let elementoResultado = document.getElementById('resultado')
let elementoNumeroChutado = document.getElementById('valor')
let tentativas = 3

function Chutar() {
    let numeroChutado = parseInt(document.getElementById('valor').value)

    if (elementoNumeroChutado.value.length == 0 && tentativas > 0) {
        elementoResultado.innerText = 'Nenhum número informado.'
    } else {
        if (numeroChutado === numeroSecreto) {
            elementoResultado.innerText = 'PARABÉNS! Você acertou.'
        } else if (numeroChutado < 0 || numeroChutado > 10) {
            elementoResultado.innerText = 'Digite um número entre 0 e 10.'
            elementoNumeroChutado.value = ''
        } else {
            if (numeroSecreto > numeroChutado) {
                elementoResultado.innerText = 'VISH! Você errou, o número secreto é maior.'
            } else {
                elementoResultado.innerText = 'VISH! Você errou, o número secreto é menor.'
            }
            elementoNumeroChutado.value = ''
            tentativas--
            if (tentativas <= 0) {
                elementoResultado.innerHTML = `O número secreto era <strong class="destaque">${numeroSecreto}</strong>`
                elementoTentativas.innerText = 'Suas tentativas acabaram, clique em RESETAR e jogue novamente.'
                tentativas = 0 //para não ficar decrementando o n° de tentativas
            }
        }
    }
}

function Resetar() {
    numeroSecreto = parseInt(Math.random() * 11)
    tentativas = 3
    elementoResultado.innerText = ''
    elementoTentativas.innerText = ''
    elementoNumeroChutado.value = ''
}

// usando enter para clicar no botão de chutar
document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        Chutar()
    }
})