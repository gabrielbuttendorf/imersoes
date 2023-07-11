let notas = 0
let somaNotas = 0
let media = 0
let situacao = ''
let container = document.getElementsByClassName('container')[0]

function AdicionarNota() {
    let nota = document.getElementById('nota')
    let NumNota = Number(nota.value)
    let notasInseridas = document.getElementsByClassName('notas-inseridas')[0]
    let pNotaInserida = document.createElement('p')
    pNotaInserida.setAttribute('class', 'nota')
    if (nota.value.length == 0 || NumNota > 10 || NumNota < 0) {
        alert('Erro! Insira uma nota válida')
    } else {
        pNotaInserida.innerHTML = NumNota
        notasInseridas.appendChild(pNotaInserida)
    
        somaNotas += NumNota
        notas++
        nota.value = ''
    }
}

function CalcularMedia() {
    let pMedia = document.getElementById('media-final')
    let pSituacao = document.getElementById('situacao')
    
    media = (somaNotas / notas).toFixed(1)

    if (isNaN(media)) {
        alert('Erro! Nenhuma nota inserida')
    } else {
        if (media >= 7) {
            situacao = 'APROVADO'
            pSituacao.style.backgroundColor = '#c0ffda'
        } else {
            situacao = 'REPROVADO'
            pSituacao.style.backgroundColor = '#ffc0c0'
        }
    
        pMedia.innerHTML = `Média: ${media}`
        pSituacao.innerHTML = `Situação: ${situacao}`
    }
}