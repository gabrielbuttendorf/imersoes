let perguntas = []
let temaPerguntas

const selectedButton = document.querySelectorAll('.choice-language button')
for (let button of selectedButton) {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target.value
        switch (clickedButton) {
            case 'javascript':
                temaPerguntas = perguntasJs
                break
            case 'python':
                temaPerguntas = perguntasPython
                break
            case 'css':
                temaPerguntas = perguntasCss
                break
            case 'mixed':
                temaPerguntas = 'mixed'
                break
        }
        raffle(temaPerguntas)
    })
}

function raffle(temaPerguntas) {
    const raffleNumbers = new Set()

    /* ------- Caso o usuário escolha o tema misto ------- */
    if (temaPerguntas === 'mixed') {
        while (raffleNumbers.size < 12) {
            if (raffleNumbers.size < 12) {
                let number = Math.round(Math.random() * 39)
                if (!raffleNumbers.has(number)) {
                    perguntas.push(perguntasJs[number])
                    raffleNumbers.add(number)
                } else {
                    while (!raffleNumbers.has(number)) {
                        perguntas.push(perguntasJs[number])
                        raffleNumbers.add(number)
                    }
                }
            }
    
            if (raffleNumbers.size < 12) {
                let number = Math.round(Math.random() * 39)
                if (!raffleNumbers.has(number)) {
                    perguntas.push(perguntasPython[number])
                    raffleNumbers.add(number)
                } else {
                    while (!raffleNumbers.has(number)) {
                        perguntas.push(perguntasPython[number])
                        raffleNumbers.add(number)
                    }
                }
            }
    
            if (raffleNumbers.size < 12) {
                let number = Math.round(Math.random() * 39)
                if (!raffleNumbers.has(number)) {
                    perguntas.push(perguntasCss[number])
                    raffleNumbers.add(number)
                } else {
                    while (!raffleNumbers.has(number)) {
                        perguntas.push(perguntasCss[number])
                        raffleNumbers.add(number)
                    }
                }
            }
        }
        /* ------- Caso o usuário escolha o tema misto ------- */

    } else {
        while (raffleNumbers.size < 10) {
            let number = Math.round(Math.random() * 39)
    
            if (!raffleNumbers.has(number)) {
                perguntas.push(temaPerguntas[number])
                raffleNumbers.add(number)
            }
        }
    }

    teste()
}

function teste() {
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    for(const item of perguntas) {
        //clonando o conteúdo do <template>
        const quizItem = template.content.cloneNode(true)
        //atribuindo a pergunta para o <h3>
        quizItem.querySelector('h3').textContent = item.pergunta
    
        for(let resposta of item.respostas) {
            //clonando os <dt>
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            //atribuindo a cada resposta para um span
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta
    
                corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }
    
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }
    
            //adicionando o elemento clonado <dt> dentro do <dl>
            quizItem.querySelector('dl').appendChild(dt)
        }
    
        //removendo o <dt> inicial (template)
        quizItem.querySelector('dl dt').remove()
    
        //adicionando o elemento dentro da div .quiz
        quiz.appendChild(quizItem)
    }
}