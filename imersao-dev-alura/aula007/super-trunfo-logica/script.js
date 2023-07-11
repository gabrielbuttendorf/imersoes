
var carta1 = {
    nome: 'Bulbasauro',
    imagem: 'https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg',
    atributos: {
        ataque: 6,
        defesa: 5,
        special: 4
    }
}

var carta2 = {
    nome: 'Charmander',
    imagem: 'https://elcomercio.pe/resizer/Kmnje6gyLBN5ZEToaqrFYJZ3YAM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SM2FHGZG2VDXNIRNVAH6DMGSCU.jpg',
    atributos: {
        ataque: 7,
        defesa: 6,
        special: 6
    }
}

var carta3  = {
    nome: 'Squirtle',
    imagem: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/squirtle-11-juliart-jcmm.jpg',
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

    ExibirOpcoes()
    ExibirCartaJogador()
}

function ExibirCartaJogador() {
    var divCartaImagem = document.getElementsByClassName('carta-imagem')[0]
    var divCartaNome = document.getElementsByClassName('carta-nome')[0]

    divCartaImagem.src = cartaJogador.imagem
    divCartaNome.innerHTML = cartaJogador.nome

}

function ExibirCartaComputador() {
    var divCartaImagem = document.getElementsByClassName('carta-imagem')[1]
    var divCartaNome = document.getElementsByClassName('carta-nome')[1]

    divCartaImagem.src = cartaComputador.imagem
    divCartaNome.innerHTML = cartaComputador.nome

    var divOpcoesComp = document.getElementById('opcoes-comp')
    var opcoes = ''
    for (var atributo in cartaComputador.atributos) {
        opcoes += `<p class="opcoes-comp">${atributo}: ${cartaComputador.atributos[atributo]}</p>`
    }

    divOpcoesComp.innerHTML = opcoes
}

function ExibirOpcoes() {
    var divOpcoes = document.getElementById('opcoes')
    var divCartaJogador = document.getElementById('carta-jogador')
    var opcoes = ''
    for (var atributo in cartaJogador.atributos) {
        opcoes += `<input type="radio" name="atributo" value="${atributo}">${atributo}: ${cartaJogador.atributos[atributo]}<br>`
    }

    divOpcoes.innerHTML = opcoes
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
    var elementoResultado = document.getElementById('resultado')
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaComputador = cartaComputador.atributos[atributoSelecionado]

    if (valorCartaJogador === undefined) {
        alert('Selecione algum atributo!')
    } else if (valorCartaJogador > valorCartaComputador) {
        elementoResultado.innerText = 'Você ganhou!'
        ExibirCartaComputador()
    } else if (valorCartaJogador < valorCartaComputador) {
        elementoResultado.innerText = 'Você perdeu!'
        ExibirCartaComputador()
    } else {
        elementoResultado.innerText = 'Empatou!'
        ExibirCartaComputador()
    }
}