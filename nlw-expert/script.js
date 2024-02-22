let perguntas = []
let temaPerguntas = []

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
                temaPerguntas = perguntasJs.concat(perguntasPython, perguntasCss)
                break
        }
        raffle(temaPerguntas)
    })
}

function raffle(temaPerguntas) {
    perguntas = []
    const raffleNumbers = new Set()
    const totalListQuestions = temaPerguntas.length

    while (raffleNumbers.size < 10) {
        let number = Math.round(Math.random() * (totalListQuestions - 1))

        if (!raffleNumbers.has(number)) {
            perguntas.push(temaPerguntas[number])
            raffleNumbers.add(number)
        }
    }

    showQuestions()
}

function showQuestions() {
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
    const quiz = document.querySelector('#quiz')
    quiz.innerHTML = ''
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

                const dtSpan = dt.querySelector('span')
                const dtInput = dt.querySelector('input')
                const dtInputChecked = dt.querySelector('input:checked')
    
                corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                    dtSpan.style.color = '#A3E635'
                    dtInputChecked.style.borderColor = '#A3E635'
                    dtInputChecked.classList.add('right-checked');
                } else {
                    dtInput.style.animation = 'shake 0.125s'
                    dtSpan.style.color = '#E63535'
                    dtInputChecked.style.borderColor = '#E63535'
                    dtInputChecked.classList.add('wrong-checked');
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