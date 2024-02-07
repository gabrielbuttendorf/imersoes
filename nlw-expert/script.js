const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilização de páginas web.",
            "Uma linguagem de programação para criar conteúdo de áudio e vídeo.",
            "Uma linguagem de programação para tornar as páginas web interativas."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar elementos HTML por sua classe.",
            "Selecionar elementos HTML por seu ID.",
            "Selecionar elementos HTML por suas tags."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a estrutura de controle de fluxo condicional em JavaScript?",
        respostas: [
            "for loop",
            "if...else statement",
            "switch...case statement"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira mais utilizada ao declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "const myVar = 10;",
            "var myVar = 10;"
        ],
        correta: 1
    },
    {
        pergunta: "O que é 'NaN' em JavaScript?",
        respostas: [
            "'NaN' significa 'Não é um número' e é retornado quando uma operação matemática falha.",
            "'NaN' significa 'Novo Array Numérico' e é usado para criar novos arrays.",
            "'NaN' significa 'Número de Avaliação Negativa' e é usado para valores negativos em operações matemáticas."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Adicionar um elemento HTML ao documento.",
            "Adicionar um evento a um elemento HTML.",
            "Adicionar um estilo CSS a um elemento HTML."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de comentar código em JavaScript?",
        respostas: [
            "// Este é um comentário de linha única.",
            "/* Este é um comentário de bloco */",
            "'Comentário' é uma palavra-chave reservada em JavaScript."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
        respostas: [
            "6",
            "33",
            "'33'"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'splice' em JavaScript?",
        respostas: [
            "Inserir ou remover elementos de um array.",
            "Juntar dois arrays.",
            "Copiar um array para outro."
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma 'closure' em JavaScript?",
        respostas: [
            "Um tipo de loop.",
            "Uma função que não tem acesso a variáveis externas.",
            "Uma função que tem acesso a variáveis externas e foi declarada dentro de outra função."
        ],
        correta: 2
    }
]

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