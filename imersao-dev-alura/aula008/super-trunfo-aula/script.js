
var carta1 = {
    nome: 'Bulbasauro',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    atributos: {
        ataque: 6,
        defesa: 5,
        special: 4
    }
}

var carta2 = {
    nome: 'Charmander',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    atributos: {
        ataque: 7,
        defesa: 6,
        special: 6
    }
}

var carta3  = {
    nome: 'Squirtle',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    atributos: {
        ataque: 6,
        defesa: 7,
        special: 5
    }
}

var cartas = [carta1, carta2, carta3]
var cartaJogador
var cartaComputador

function SortearCarta() {
    var indiceCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[indiceCartaJogador]

    var indiceCartaComputador = parseInt(Math.random() * cartas.length)
    cartaComputador = cartas[indiceCartaComputador]

    // evitar que os dois recebam a mesma carta
    while (indiceCartaJogador == indiceCartaComputador) {
        indiceCartaJogador = parseInt(Math.random() * cartas.length)
    }

    cartaJogador = cartas[indiceCartaJogador]

    console.log(cartaJogador)
    console.log(cartaComputador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    ExibirCartaJogador()
}

function ObterAtributo() {
    var radioAtributos = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value
        }
    }
}

function Jogar() {
    var atributoSelecionado = ObterAtributo()
    var divResultado = document.getElementById('resultado')
    var elementoResultado 

    if (cartaJogador.atributos[atributoSelecionado] === undefined) {
        alert('Selecione algum atributo!')
    } else if (cartaJogador.atributos[atributoSelecionado] > cartaComputador.atributos[atributoSelecionado]) {
        elementoResultado = '<p class="resultado-final">Você ganhou!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaComputador.atributos[atributoSelecionado]) {
        elementoResultado = '<p class="resultado-final">Você perdeu!</p>'
    } else {
        elementoResultado = '<p class="resultado-final">Empate!</p>'
    }

    divResultado.innerHTML = elementoResultado
    document.getElementById('btnJogar').disabled = true
    ExibirCartaComputador()
}

function ExibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = '<div id="opcoes" class="carta-status">'
    
    var opcoes = ''
    for (var atributo in cartaJogador.atributos) {
        opcoes += `<input type="radio" name="atributo" value="${atributo}">${atributo}: ${cartaJogador.atributos[atributo]}<br>`
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoes + '</div>'
}

function ExibirCartaComputador() {
    var divCartaComputador = document.getElementById('carta-computador')
    divCartaComputador.style.backgroundImage = `url(${cartaComputador.imagem})`


    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = '<div id="opcoes" class="carta-status">'
    
    var opcoes = ''
    for (var atributo in cartaComputador.atributos) {
        opcoes += `<p>${atributo}: ${cartaComputador.atributos[atributo]}`
    }

    var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`

    divCartaComputador.innerHTML = moldura + nome + tagHTML + opcoes + '</div>'
}