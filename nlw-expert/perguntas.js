const perguntasJs = [
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
        pergunta: "Qual o resultado da expressão '2 + 2' em JavaScript?",
        respostas: [
            "4",
            "22",
            "2 + 2"
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "var",
            "const"
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama a função usada para exibir mensagens de alerta em JavaScript?",
        respostas: [
            "popup()",
            "alert()",
            "display()"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado que armazena um valor único.",
            "Um bloco de código reutilizável que executa uma determinada tarefa.",
            "Uma declaração que define um novo tipo de dado."
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é utilizado para comparar igualdade em valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é utilizada para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "toString()",
            "parseFloat()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é utilizado para comentários de uma única linha em JavaScript?",
        respostas: [
            "//",
            "/* */",
            "#"
        ],
        correta: 0
    },
    {
        pergunta: "Qual estrutura de controle é utilizada para executar um bloco de código repetidamente em JavaScript?",
        respostas: [
            "if-else",
            "switch",
            "for"
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'push()' faz em JavaScript?",
        respostas: [
            "Remove um elemento do final de um array.",
            "Adiciona um elemento ao final de um array.",
            "Inverte a ordem dos elementos de um array."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof 42);",
        respostas: [
            "number",
            "string",
            "undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama o operador utilizado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "*",
            "-"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "removeLast()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para um comentário de várias linhas em JavaScript?",
        respostas: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é utilizada para arredondar um número para o inteiro mais próximo em JavaScript?",
        respostas: [
            "Math.floor()",
            "Math.round()",
            "Math.ceil()"
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a função utilizada para selecionar elementos HTML em JavaScript?",
        respostas: [
            "document.select()",
            "document.getElement()",
            "document.querySelector()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é utilizada para obter o comprimento de um array em JavaScript?",
        respostas: [
            "size()",
            "length()",
            "length"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '10 % 3' em JavaScript?",
        respostas: [
            "1",
            "3",
            "0"
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama a função utilizada para converter um número em uma string em JavaScript?",
        respostas: [
            "toString()",
            "stringify()",
            "convertToString()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para remover um elemento específico de um array em JavaScript?",
        respostas: [
            "delete()",
            "splice()",
            "remove()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log('Hello ' + 'World');",
        respostas: [
            "'HelloWorld'",
            "Hello World",
            "NaN"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
        respostas: [
            "Executa uma função para cada elemento de um array.",
            "Adiciona um elemento ao final de um array.",
            "Remove um elemento do final de um array."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'E' em JavaScript?",
        respostas: [
            "||",
            "&&",
            "!"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é utilizado para unir dois arrays em JavaScript?",
        respostas: [
            "concat()",
            "join()",
            "merge()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do código: console.log(5 == '5');",
        respostas: [
            "true",
            "false",
            "NaN"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é utilizada para converter um número em um número com um número específico de casas decimais em JavaScript?",
        respostas: [
            "toFixed()",
            "toPrecision()",
            "toLocaleString()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'indexOf()' faz em JavaScript?",
        respostas: [
            "Retorna o primeiro índice em que um elemento específico é encontrado em um array.",
            "Remove o último elemento de um array.",
            "Inverte a ordem dos elementos de um array."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do código: console.log(2 ** 3);",
        respostas: [
            "6",
            "8",
            "10"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão 'typeof undefined' em JavaScript?",
        respostas: [
            "'undefined'",
            "'null'",
            "'object'"
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama a função utilizada para remover o primeiro elemento de um array em JavaScript?",
        respostas: [
            "shift()",
            "removeFirst()",
            "remove()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para converter uma string em letras minúsculas em JavaScript?",
        respostas: [
            "toLower()",
            "toLowerCase()",
            "lowerCase()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(4 > 3);",
        respostas: [
            "true",
            "false",
            "undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é utilizada para gerar um número aleatório entre 0 e 1 em JavaScript?",
        respostas: [
            "random()",
            "Math.random()",
            "rand()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é utilizado para remover elementos de um array e, opcionalmente, adicionar novos elementos no lugar?",
        respostas: [
            "remove()",
            "splice()",
            "slice()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log('hello'.toUpperCase());",
        respostas: [
            "'hello'",
            "'HELLO'",
            "HELLO"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(1 + '2');",
        respostas: [
            "3",
            "'12'",
            "undefined"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'map()' em JavaScript?",
        respostas: [
            "Adiciona um elemento ao final de um array.",
            "Cria um novo array com o resultado da chamada de uma função para cada elemento do array.",
            "Remove um elemento do final de um array."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(Boolean('false'));",
        respostas: [
            "true",
            "false",
            "undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método utilizado para converter uma string em letras maiúsculas em JavaScript?",
        respostas: [
            "toUpperCase()",
            "toUpper()",
            "upperCase()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof null);",
        respostas: [
            "'null'",
            "'object'",
            "'undefined'"
        ],
        correta: 1
    }
]

const perguntasPython = [
    {
        pergunta: "Qual é a principal função do comando 'print' em Python?",
        respostas: [
            "Receber entrada do usuário.",
            "Realizar cálculos matemáticos.",
            "Exibir dados na saída padrão."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma lista em Python?",
        respostas: [
            "Um tipo de dado que armazena um único valor.",
            "Um tipo de dado que armazena um conjunto ordenado de valores.",
            "Um tipo de dado que armazena uma chave e um valor."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador utilizado para calcular a potência de um número em Python?",
        respostas: [
            "+",
            "-",
            "**"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em Python?",
        respostas: [
            "Um comentário no código fonte.",
            "Um trecho de código que realiza uma tarefa específica.",
            "Um tipo de dado que armazena uma sequência de caracteres."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função da palavra-chave 'def' em Python?",
        respostas: [
            "Definir uma variável.",
            "Definir uma função.",
            "Definir uma condição."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '%' em Python?",
        respostas: [
            "Divisão inteira.",
            "Multiplicação.",
            "Módulo (resto da divisão)."
        ],
        correta: 2
    },
    {
        pergunta: "O que é um loop 'for' em Python?",
        respostas: [
            "Um loop que executa um bloco de código enquanto uma condição for verdadeira.",
            "Um loop que executa um bloco de código um número específico de vezes.",
            "Um loop que executa um bloco de código até que uma condição seja verdadeira."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função da função 'input()' em Python?",
        respostas: [
            "Exibir uma mensagem na tela.",
            "Receber entrada do usuário.",
            "Realizar uma operação matemática."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma tupla em Python?",
        respostas: [
            "Um tipo de dado que armazena um conjunto ordenado de valores mutáveis.",
            "Um tipo de dado que armazena um conjunto ordenado de valores imutáveis.",
            "Um tipo de dado que armazena um único valor."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre '==' e '=' em Python?",
        respostas: [
            "Nenhuma, ambos são operadores de atribuição.",
            "O primeiro compara dois valores, o segundo atribui um valor a uma variável.",
            "O primeiro atribui um valor a uma variável, o segundo compara dois valores."
        ],
        correta: 1
    },
    {
        pergunta: "O que é um dicionário em Python?",
        respostas: [
            "Um tipo de dado que armazena um conjunto ordenado de valores mutáveis.",
            "Um tipo de dado que armazena um conjunto ordenado de valores imutáveis.",
            "Um tipo de dado que armazena pares de chave-valor."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador 'and' em Python?",
        respostas: [
            "Realizar uma operação de adição.",
            "Realizar uma operação de multiplicação.",
            "Avaliar duas condições como verdadeiras."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma declaração 'if' em Python?",
        respostas: [
            "Um trecho de código que executa uma operação matemática.",
            "Um trecho de código que repete uma instrução várias vezes.",
            "Um trecho de código que executa uma ação com base em uma condição."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função da palavra-chave 'else' em Python?",
        respostas: [
            "Indicar uma condição verdadeira.",
            "Indicar uma condição falsa.",
            "Executar um bloco de código quando a condição de um 'if' não é verdadeira."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma classe em Python?",
        respostas: [
            "Um bloco de código que executa uma tarefa específica.",
            "Um tipo de dado que armazena uma sequência de caracteres.",
            "Um modelo para criar objetos que possuem características e comportamentos."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'append()' em Python?",
        respostas: [
            "Adicionar um elemento no final de uma lista.",
            "Remover um elemento de uma lista.",
            "Ordenar os elementos de uma lista."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma exceção em Python?",
        respostas: [
            "Um erro que ocorre durante a execução de um programa.",
            "Um resultado esperado de uma operação matemática.",
            "Um tipo de dado que armazena um conjunto ordenado de valores."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'or' em Python?",
        respostas: [
            "Realizar uma operação de subtração.",
            "Avaliar duas condições como verdadeiras.",
            "Avaliar duas condições e retornar verdadeiro se uma delas for verdadeira."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma instrução 'elif' em Python?",
        respostas: [
            "Uma instrução que executa um bloco de código se a condição de um 'if' não for verdadeira.",
            "Uma instrução que executa um bloco de código se a condição de um 'if' for verdadeira.",
            "Uma instrução que executa um bloco de código se uma condição adicional for verdadeira após um 'if'."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'keys()' em um dicionário Python?",
        respostas: [
            "Retornar os valores armazenados no dicionário.",
            "Retornar as chaves armazenadas no dicionário.",
            "Retornar os itens armazenados no dicionário."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma expressão lambda em Python?",
        respostas: [
            "Uma função anônima de uma única linha.",
            "Uma função que retorna múltiplos valores.",
            "Uma função que recebe múltiplos argumentos."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'not' em Python?",
        respostas: [
            "Inverter o resultado de uma condição.",
            "Verificar se um valor é igual a outro.",
            "Realizar uma operação de divisão."
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma declaração 'while' em Python?",
        respostas: [
            "Um trecho de código que repete uma instrução várias vezes.",
            "Um trecho de código que executa uma operação matemática.",
            "Um trecho de código que executa uma ação com base em uma condição."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'pop()' em uma lista Python?",
        respostas: [
            "Adicionar um elemento no final de uma lista.",
            "Remover o último elemento de uma lista.",
            "Remover o elemento em uma posição específica de uma lista."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma instrução 'pass' em Python?",
        respostas: [
            "Uma instrução que não faz nada e é utilizada como um espaço reservado.",
            "Uma instrução que interrompe o fluxo normal de execução do programa.",
            "Uma instrução que repete um bloco de código até que uma condição seja falsa."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'split()' em Python?",
        respostas: [
            "Unir os elementos de uma lista em uma string.",
            "Dividir uma string em uma lista de substrings.",
            "Substituir parte de uma string por outra string."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma expressão booleana em Python?",
        respostas: [
            "Uma expressão que retorna um valor booleano.",
            "Uma expressão que realiza operações matemáticas.",
            "Uma expressão que retorna um valor inteiro."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'replace()' em uma string Python?",
        respostas: [
            "Remover caracteres especiais de uma string.",
            "Substituir uma substring por outra substring.",
            "Inserir uma substring em uma posição específica de uma string."
        ],
        correta: 1
    },
    {
        pergunta: "O que é um módulo em Python?",
        respostas: [
            "Um tipo de dado que armazena um conjunto ordenado de valores mutáveis.",
            "Um arquivo contendo definições e declarações em Python que podem ser importadas e utilizadas em outros programas.",
            "Um tipo de dado que armazena uma sequência de caracteres."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'sort()' em uma lista Python?",
        respostas: [
            "Adicionar um elemento no final de uma lista.",
            "Remover o último elemento de uma lista.",
            "Ordenar os elementos de uma lista."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma variável em Python?",
        respostas: [
            "Um tipo de dado que armazena um único valor.",
            "Um tipo de dado que armazena uma sequência de caracteres.",
            "Um nome associado a um valor ou objeto armazenado na memória."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'strip()' em uma string Python?",
        respostas: [
            "Remover espaços em branco do início e do fim de uma string.",
            "Converter todos os caracteres de uma string para letras maiúsculas.",
            "Dividir uma string em uma lista de substrings."
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma declaração 'try...except' em Python?",
        respostas: [
            "Uma instrução que tenta executar um bloco de código e captura qualquer exceção que ocorra.",
            "Uma instrução que repete um bloco de código até que uma condição seja falsa.",
            "Uma instrução que executa um bloco de código se a condição de um 'if' for verdadeira."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da palavra-chave 'finally' em uma declaração 'try...except' em Python?",
        respostas: [
            "Indicar uma condição verdadeira.",
            "Indicar uma condição falsa.",
            "Executar um bloco de código independentemente de ocorrer uma exceção ou não."
        ],
        correta: 2
    },
    {
        pergunta: "O que é um arquivo em Python?",
        respostas: [
            "Um tipo de dado que armazena um conjunto ordenado de valores.",
            "Um tipo de dado que armazena uma sequência de caracteres.",
            "Um recurso externo utilizado para armazenar dados permanentemente."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'read()' em um objeto de arquivo Python?",
        respostas: [
            "Escrever dados em um arquivo.",
            "Ler o conteúdo de um arquivo.",
            "Fechar um arquivo."
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma declaração 'import' em Python?",
        respostas: [
            "Uma declaração que importa um módulo externo para ser utilizado no programa.",
            "Uma declaração que exporta uma função para outros programas.",
            "Uma declaração que define uma nova função."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'write()' em um objeto de arquivo Python?",
        respostas: [
            "Ler o conteúdo de um arquivo.",
            "Escrever dados em um arquivo.",
            "Fechar um arquivo."
        ],
        correta: 1
    },
    {
        pergunta: "O que é um método mágico em Python?",
        respostas: [
            "Um método que realiza operações matemáticas complexas.",
            "Um método que pode ser chamado diretamente pelo usuário.",
            "Um método com um nome especial precedido e seguido por duplo sublinhado (__)."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre aspas simples ('') e duplas (\"\") ao definir uma string em Python?",
        respostas: [
            "Não há diferença, ambas são usadas para definir strings.",
            "As aspas duplas são usadas para strings de várias linhas e as aspas simples para strings simples.",
            "As aspas simples são usadas para strings de várias linhas e as aspas duplas para strings simples."
        ],
        correta: 0
    }
]

const perguntasCss = [
    {
        pergunta: "O que é CSS?",
        respostas: [
            "Uma linguagem de programação para estilização de páginas web.",
            "Uma linguagem de programação para criar conteúdo de áudio e vídeo.",
            "Uma linguagem de programação para tornar as páginas web interativas."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função principal do CSS?",
        respostas: [
            "Criar funcionalidades de interatividade em páginas web.",
            "Estilizar o conteúdo de uma página web.",
            "Manipular banco de dados."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de selecionar um elemento pelo seu ID em CSS?",
        respostas: [
            "#id-do-elemento",
            ".id-do-elemento",
            "id-do-elemento"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um seletor em CSS?",
        respostas: [
            "Uma função que seleciona elementos no HTML para aplicar estilos.",
            "Um tipo de comentário usado para organizar o código CSS.",
            "Um valor atribuído a uma variável em CSS."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para alterar a cor do texto?",
        respostas: [
            "color",
            "background-color",
            "text-color"
        ],
        correta: 0
    },
    {
        pergunta: "Como é possível comentar uma linha de código em CSS?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "# Comentário"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o box-model em CSS?",
        respostas: [
            "Uma caixa que contém todos os elementos de uma página web.",
            "Um modelo matemático usado para calcular o tamanho dos elementos em uma página web.",
            "Um modelo que define como os elementos HTML são renderizados no navegador, incluindo padding, margin, border e content."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir o espaçamento interno de um elemento?",
        respostas: [
            "margin",
            "border",
            "padding"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a largura de um elemento?",
        respostas: [
            "size",
            "width",
            "height"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de selecionar todos os elementos de uma classe em CSS?",
        respostas: [
            ".nome-da-classe",
            "#nome-da-classe",
            "*nome-da-classe"
        ],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla CSS?",
        respostas: [
            "Cascading Style Sheets",
            "Cascading Script Styles",
            "Coding Style Sheets"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da propriedade 'display' em CSS?",
        respostas: [
            "Define como os elementos são exibidos na página.",
            "Define a cor de fundo de um elemento.",
            "Define a opacidade de um elemento."
        ],
        correta: 0
    },
    {
        pergunta: "Como definir uma fonte personalizada em CSS?",
        respostas: [
            "font-family",
            "font",
            "font-style"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a cor de fundo de um elemento?",
        respostas: [
            "background-color",
            "color",
            "background"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a espessura da borda de um elemento?",
        respostas: [
            "border-width",
            "border-style",
            "border-color"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o seletor universal em CSS?",
        respostas: [
            "Um seletor que seleciona todos os elementos da página.",
            "Um seletor usado para estilizar elementos específicos.",
            "Um seletor usado para definir regras de estilo para todos os elementos."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir o estilo da borda de um elemento?",
        respostas: [
            "border",
            "border-style",
            "border-width"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a margem de um elemento?",
        respostas: [
            "margin",
            "padding",
            "border"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'Float' em CSS?",
        respostas: [
            "Um valor que especifica a flutuação de um elemento à esquerda ou à direita.",
            "Um valor usado para definir a altura de um elemento.",
            "Um valor que define a transparência de um elemento."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir o espaçamento externo de um elemento?",
        respostas: [
            "margin",
            "padding",
            "border"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a altura de um elemento?",
        respostas: [
            "size",
            "width",
            "height"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a opacidade de um elemento?",
        respostas: [
            "opacity",
            "background-opacity",
            "color-opacity"
        ],
        correta: 0
    },
    {
        pergunta: "Como é possível incluir CSS em um documento HTML?",
        respostas: [
            "Usando a tag <script>",
            "Usando a tag <style>",
            "Usando a tag <link>"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir o alinhamento de texto?",
        respostas: [
            "text-align",
            "alignment",
            "justify"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um seletor de classe em CSS?",
        respostas: [
            "Um seletor usado para selecionar elementos pelo seu ID.",
            "Um seletor usado para selecionar elementos pela sua classe.",
            "Um seletor usado para estilizar texto."
        ],
        correta: 1
    },
    {
        pergunta: "O que é o 'Position' em CSS?",
        respostas: [
            "Um valor que define a posição de um elemento em relação ao cursor do mouse.",
            "Um valor que define a posição de um elemento em relação ao viewport ou a um elemento pai.",
            "Um valor que define a ordem de sobreposição de elementos na página."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a transparência de um elemento?",
        respostas: [
            "opacity",
            "background-opacity",
            "color-opacity"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'Flexbox' em CSS?",
        respostas: [
            "Um modelo de layout bidimensional que permite alinhar elementos em uma única direção.",
            "Uma técnica de estilização para criar gradientes.",
            "Um valor que define a flexibilidade de um elemento."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a cor do texto de um link não visitado?",
        respostas: [
            "link-color",
            "visited-color",
            "color"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'Z-index' em CSS?",
        respostas: [
            "Um valor que define a transição entre cores em uma animação CSS.",
            "Um valor que define a transição entre diferentes imagens de fundo.",
            "Um valor que define a ordem de sobreposição de elementos na página."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir o estilo da fonte de um texto?",
        respostas: [
            "font-style",
            "font-family",
            "font-weight"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o 'Grid' em CSS?",
        respostas: [
            "Um modelo de layout bidimensional que permite alinhar elementos em uma única direção.",
            "Um modelo de layout bidimensional que permite alinhar elementos em linhas e colunas.",
            "Um valor que define a flexibilidade de um elemento."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a espessura da fonte de um texto?",
        respostas: [
            "font-size",
            "text-size",
            "size"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'Pseudo-elemento' em CSS?",
        respostas: [
            "Um elemento criado através de JavaScript.",
            "Um elemento fictício utilizado para aplicar estilos a partes específicas de um elemento HTML.",
            "Um elemento de HTML5."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a cor do texto de um link visitado?",
        respostas: [
            "link-color",
            "visited-color",
            "color"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a propriedade CSS utilizada para definir a espessura da borda de um elemento?",
        respostas: [
            "border-width",
            "border-style",
            "border-color"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da propriedade 'box-sizing' em CSS?",
        respostas: [
            "Define o modelo de caixa padrão para todos os elementos.",
            "Define como os elementos são posicionados em relação ao elemento pai.",
            "Define como o conteúdo, padding e borda são calculados em relação à largura e altura do elemento."
        ],
        correta: 2
    },
    {
        pergunta: "Como é possível centralizar um elemento horizontalmente em CSS?",
        respostas: [
            "Usando a propriedade 'text-align' com o valor 'center'.",
            "Usando a propriedade 'vertical-align' com o valor 'center'.",
            "Usando a propriedade 'margin' com os valores 'auto' e '0'."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre 'display: inline' e 'display: block' em CSS?",
        respostas: [
            "Inline exibe o elemento em uma linha enquanto block o exibe em uma nova linha.",
            "Inline cria um bloco de tamanho fixo enquanto block permite o ajuste automático do tamanho.",
            "Inline permite ajustar a largura e altura do elemento manualmente enquanto block não."
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'box-shadow' em CSS?",
        respostas: [
            "Uma propriedade que define a sombra projetada por um elemento.",
            "Uma propriedade que define a borda de um elemento.",
            "Uma propriedade que define a cor de fundo de um elemento."
        ],
        correta: 0
    }
]