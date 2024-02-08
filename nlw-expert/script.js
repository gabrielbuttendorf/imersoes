let perguntas = []

const selectedButton = document.querySelectorAll('.choice-language button')
for (let button of selectedButton) {
    button.addEventListener('click', (event) => {
        raffle()
    })
}

function raffle() {
    const raffleNumbers = new Set()

    while (raffleNumbers.size < 10) {
        let number = Math.round(Math.random() * 39)

        if (!raffleNumbers.has(number)) {
            perguntas.push(perguntasJs[number])
            raffleNumbers.add(number)
        }
        console.log(raffleNumbers)
        console.log(perguntas)
    }

    teste()
}

function teste() {
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    
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