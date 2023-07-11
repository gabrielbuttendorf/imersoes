// ---------------------------- CARTAS -------------------------------
var carta1 = {imagem: 'images/cartas/porsche-911-turbo-s.webp', marca: 'porsche', nome: '911 Turbo S', atributos: {preco: '1500000', potencia: '650', aceleracao: '2.7', velMax: '330'}}

var carta2 = {imagem: 'images/cartas/porsche-panamera.jpg', marca: 'porsche', nome: 'Panamera Turbo S', atributos: {preco: '1140000', potencia: '700', aceleracao: '3.2', velMax: '315'}}

var carta3 = {imagem: 'images/cartas/bmw-m3-competition.webp', marca: 'bmw', nome: 'M3 Competition', atributos: {preco: '800000', potencia: '510', aceleracao: '3.9', velMax: '290'}}

var carta4 = {imagem: 'images/cartas/bmw-x6-m-competition.webp', marca: 'bmw', nome: 'X6 M Competition', atributos: {preco: '1000000', potencia: '625', aceleracao: '3.8', velMax: '290'}}

var carta5 = {imagem: 'images/cartas/mercedes-amg-gt-r.jpg', marca: 'mercedes', nome: 'AMG GT R', atributos: {preco: '2600000', potencia: '585', aceleracao: '3.6', velMax: '318'}}

var carta6 = {imagem: 'images/cartas/mercedes-amg-gt-63-s.webp', marca: 'mercedes', nome: 'AMG GT 63 S', atributos: {preco: '1700000', potencia: '639', aceleracao: '3.2', velMax: '315'}}

var carta7 = {imagem: 'images/cartas/audi-r8.webp', marca: 'audi', nome: 'R8', atributos: {preco: '1650000', potencia: '610', aceleracao: '3.2', velMax: '330'}}

var carta8 = {imagem: 'images/cartas/audi-rs5-sportback.webp', marca: 'audi', nome: 'RS5 Sportback', atributos: {preco: '740000', potencia: '450', aceleracao: '3.9', velMax: '280'}}

var carta9 = {imagem: 'images/cartas/ford-mustang-mach-1.webp', marca: 'ford', nome: 'Mustang Mach 1', atributos: {preco: '590000', potencia: '483', aceleracao: '4.3', velMax: '250'}}

var carta10 = {imagem: 'images/cartas/chevrolet-camaro-ss.webp', marca: 'chevrolet', nome: 'Camaro SS', atributos: {preco: '550000', potencia: '461', aceleracao: '4.2', velMax: '250'}}

var carta11 = {imagem: 'images/cartas/lamborghini-urus.webp', marca: 'lamborghini', nome: 'Urus', atributos: {preco: '3500000', potencia: '650', aceleracao: '3.6', velMax: '305'}}

var carta12 = {imagem: 'images/cartas/lamborghini-aventador-sv.webp', marca: 'lamborghini', nome: 'Aventador SV', atributos: {preco: '3200000', potencia: '750', aceleracao: '2.8', velMax: '350'}}

var carta13 = {imagem: 'images/cartas/ferrari-458-italia.webp', marca: 'ferrari', nome: '458 Italia', atributos: {preco: '2500000', potencia: '570', aceleracao: '3.0', velMax: '325'}}

var carta14 = {imagem: 'images/cartas/ferrari-f8-tributo.webp', marca: 'ferrari', nome: 'F8 Tributo', atributos: {preco: '4350000', potencia: '720', aceleracao: '2.9', velMax: '340'}}

var carta15 = {imagem: 'images/cartas/maserati-granturismo.webp', marca: 'maserati', nome: 'Granturismo', atributos: {preco: '1100000', potencia: '460', aceleracao: '4.8', velMax: '298'}}

var carta16 = {imagem: 'images/cartas/mclaren-720s.webp', marca: 'mclaren', nome: '720S', atributos: {preco: '3600000', potencia: '720', aceleracao: '2.9', velMax: '341'}}
// -------------------------------------------------------------------

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16]
var cartasJogador = []
var cartasComputador = []

function EmbaralharCartas() {
    function ShuffleArray() {
        for (let i = cartas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]]
        }

        return cartas
    }

    cartas = ShuffleArray()

    let j = 0
    let k = 0

    for (let i = 0; i < cartas.length; i++) {
        if (i % 2 == 0) {
            cartasJogador[j] = cartas[i]
            j++
        } else {
            cartasComputador[k] = cartas[i]
            k++
        }
    }
    
    ExibirCartaJogador(cartasJogador)
    CalcularQuantidadeCartas(cartasJogador, cartasComputador)
    document.getElementById('btn-embaralhar').disabled = true
    document.getElementById('btn-jogar').disabled = false
}

function Jogar() {
    var atributoSelecionado = ObterAtributo()
    var atributoJogador = parseFloat(cartasJogador[0].atributos[atributoSelecionado])
    var atributoComputador = parseFloat(cartasComputador[0].atributos[atributoSelecionado])

    if (atributoSelecionado == 'preco' || atributoSelecionado == 'aceleracao') {
        if (atributoJogador < atributoComputador) {
            VitoriaJogador()
        } else if (atributoJogador > atributoComputador) {
            VitoriaComputador()
        } else if (atributoJogador == atributoComputador) {
            Empate()
        } else {
            alert('Selecione algum atributo para jogar.')
        }
    } else {
        if (atributoJogador > atributoComputador) {
            VitoriaJogador()
        } else if (atributoJogador < atributoComputador) {
            VitoriaComputador()
        } else if (atributoJogador == atributoComputador) {
            Empate()
        } else {
            alert('Selecione algum atributo para jogar.')
        }
    }
}

function ProximaRodada() {
    if (cartasJogador.length == 0 || cartasComputador.length == 0) {
        document.getElementById('btn-embaralhar').disabled = false
        document.getElementById('btn-jogar').disabled = true
        ZerarCartaComputador()
        ZerarCartaJogador()
        cartasJogador = []
        cartasComputador = []
        CalcularQuantidadeCartas(cartasJogador, cartasComputador)
    } else {
        ExibirCartaJogador(cartasJogador)
        document.getElementById('btn-jogar').disabled = false
        ZerarCartaComputador()
        MostrarEsconderAtributos()
    }
}

function ExibirCartaJogador(cartas) {
    i = 0
    // pegando o elemento da imagem
    var imagemCarta = document.getElementById('carta-jogador-img')
    // pegando o elemento do título
    var titleCarta = document.getElementById('carta-jogador-title')
    // pegando o elemento do preco
    var elementoPrecoCarta = document.getElementsByClassName('span-atributo1')[0]
    // pegando o elemento da potencia
    var elementoPotenciaCarta = document.getElementsByClassName('span-atributo2')[0]
    // pegando o elemento da aceleração
    var elementoAceleracaoCarta = document.getElementsByClassName('span-atributo3')[0]
    // pegando o elemento da velocidade máxima
    var elementoVelMaxCarta = document.getElementsByClassName('span-atributo4')[0]
    // pegando o elemento da marca
    var elementoMarcaCarta = document.getElementById('carta-jogador-marca')

    ExibirCartas(cartas, imagemCarta, titleCarta, elementoPrecoCarta, elementoPotenciaCarta, elementoAceleracaoCarta, elementoVelMaxCarta, elementoMarcaCarta)
}

function ExibirCartaComputador(cartas) {
    i = 0
    // pegando o elemento da imagem
    var imagemCarta = document.getElementById('carta-computador-img')
    // pegando o elemento do título
    var titleCarta = document.getElementById('carta-computador-title')
    // pegando o elemento do preco
    var elementoPrecoCarta = document.getElementsByClassName('span-atributo1')[1]
    // pegando o elemento da potencia
    var elementoPotenciaCarta = document.getElementsByClassName('span-atributo2')[1]
    // pegando o elemento da aceleração
    var elementoAceleracaoCarta = document.getElementsByClassName('span-atributo3')[1]
    // pegando o elemento da velocidade máxima
    var elementoVelMaxCarta = document.getElementsByClassName('span-atributo4')[1]
    // pegando o elemento da marca
    var elementoMarcaCarta = document.getElementById('carta-computador-marca')

    ExibirCartas(cartas, imagemCarta, titleCarta, elementoPrecoCarta, elementoPotenciaCarta, elementoAceleracaoCarta, elementoVelMaxCarta, elementoMarcaCarta)
}

function ExibirResultado(resultado) {
    var divResultado = document.getElementById('div-resultado')
    var elementoResultado = document.getElementById('resultado')
    
    divResultado.classList.remove('oculto')
    setTimeout(function() {
        divResultado.classList.add('oculto')
    }, 3500)

    setTimeout(function() {
        ProximaRodada()
    }, 5000)
    elementoResultado.innerText = resultado
}

function CalcularQuantidadeCartas(cartasJogador, cartasComputador) {
    var elementoQuantidadeJogador = document.getElementsByClassName('span-icone')[0]
    var elementoQuantidadeComputador = document.getElementsByClassName('span-icone')[1]

    var quantidadeJogador = cartasJogador.length
    quantidadeJogador = String(quantidadeJogador).padStart(2, "0")
    elementoQuantidadeJogador.innerText = quantidadeJogador
    
    var quantidadeComputador = cartasComputador.length
    quantidadeComputador = String(quantidadeComputador).padStart(2, "0")
    elementoQuantidadeComputador.innerText = quantidadeComputador
}

function ObterAtributo() {
    var atributos = document.getElementsByName('atributo')

    for (let i = 0; i < atributos.length; i++) {
        if (atributos[i].checked) {
            return atributos[i].value
        }
    }
}

function LimparAtributoChecked() {
    var atributos = document.getElementsByName('atributo')

    for (let i = 0; i < atributos.length; i++) {
        if (atributos[i].checked) {
            atributos[i].checked = false
        }
    }
}

function MostrarEsconderAtributos() {
    var atributos = document.getElementsByName('atributo')

    if (atributos[0].style.display == 'none') {
        for (let i = 0; i < atributos.length; i++) {
            atributos[i].style.display = 'block'
        }
    } else {
        for (let i = 0; i < atributos.length; i++) {
            atributos[i].style.display = 'none'
        }
    }
}

function VitoriaJogador() {
    ExibirCartaComputador(cartasComputador)

    cartasJogador.push(cartasComputador[0])
    cartasComputador.splice(0, 1)
    cartasJogador.push(cartasJogador[0])
    cartasJogador.splice(0, 1)

    CalcularQuantidadeCartas(cartasJogador, cartasComputador)
    LimparAtributoChecked()
    MostrarEsconderAtributos()

    if (cartasJogador.length == 0) {
        var resultado = 'Suas cartas acabaram, você perdeu!'
    } else if (cartasComputador.length == 0) {
        var resultado = 'As cartas do oponente acabaram, você ganhou!'
    } else {
        var resultado = 'Vitória!'
    }
    ExibirResultado(resultado)
}

function VitoriaComputador() {
    ExibirCartaComputador(cartasComputador)
    cartasComputador.push(cartasJogador[0])
    cartasJogador.splice(0, 1)
    cartasComputador.push(cartasComputador[0])
    cartasComputador.splice(0, 1)
    CalcularQuantidadeCartas(cartasJogador, cartasComputador)
    LimparAtributoChecked()
    MostrarEsconderAtributos()
    if (cartasJogador.length == 0) {
        var resultado = 'Suas cartas acabaram, você perdeu!'
    } else if (cartasComputador.length == 0) {
        var resultado = 'As cartas do oponente acabaram, você ganhou!'
    } else {
        var resultado = 'Derrota!'
    }
    ExibirResultado(resultado)
}

function Empate() {
    var resultado = 'Empate!'
    ExibirCartaComputador(cartasComputador)
    cartasJogador.push(cartasJogador[0])
    cartasJogador.splice(0, 1)
    cartasComputador.push(cartasComputador[0])
    cartasComputador.splice(0, 1)
    CalcularQuantidadeCartas(cartasJogador, cartasComputador)
    LimparAtributoChecked()
    MostrarEsconderAtributos()
    ExibirResultado(resultado)
}

function ZerarCartaComputador() {
    var elementoCarta = document.getElementById('carta-computador')

    var cartaZerada = '<img src="images/cartas/fundo-carta.jpg" id="carta-computador-img">'
    cartaZerada += '<img src="" id="carta-computador-marca">'
    cartaZerada += '<p id="carta-computador-title">- - - - - - - - - - - -</p>'
    cartaZerada += '<div class="carta-jogador-atributos">'
    cartaZerada += '<label class="atributo1">- -</label><label class="label-atributo1">Preço</label><span class="span-atributo1">- - -</span>'
    cartaZerada += '<label class="atributo2">- -</label><label class="label-atributo2">Potência</label><span class="span-atributo2">- - -</span>'
    cartaZerada += '<label class="atributo3">- -</label><label class="label-atributo3">0-100 km/h</label><span class="span-atributo3">- - -</span>'
    cartaZerada += '<label class="atributo4">- -</label><label class="label-atributo4">Velocidade Máx.</label><span class="span-atributo4">- - -</span>'
    cartaZerada += '</div>'
    
    elementoCarta.innerHTML = cartaZerada
}

function ZerarCartaJogador() {
    var elementoCarta = document.getElementById('carta-jogador')

    var cartaZerada = '<img src="images/cartas/fundo-carta.jpg" id="carta-jogador-img">'
    cartaZerada += '<img src="" id="carta-jogador-marca">'
    cartaZerada += '<p id="carta-jogador-title">- - - - - - - - - - - -</p>'
    cartaZerada += '<div class="carta-jogador-atributos">'
    cartaZerada += '<input type="radio" class="atributo1" name="atributo" id="preco" value="preco"><label for="preco" class="label-atributo1">Preço</label><span class="span-atributo1">- - -</span>'
    cartaZerada += '<input type="radio" class="atributo2" name="atributo" id="potencia" value="potencia"><label for="potencia" class="label-atributo2">Potência</label><span class="span-atributo2">- - -</span>'
    cartaZerada += '<input type="radio" class="atributo3" name="atributo" id="aceleracao" value="aceleracao"><label for="aceleracao" class="label-atributo3">0-100 km/h</label><span class="span-atributo3">- - -</span>'
    cartaZerada += '<input type="radio" class="atributo4" name="atributo" id="velocidade-max" value="velMax"><label for="velocidade-max" class="label-atributo4">Velocidade Máx.</label><span class="span-atributo4">- - -</span>'
    cartaZerada += '</div>'
    
    elementoCarta.innerHTML = cartaZerada
}

function ExibirCartas(cartas, imagemCarta, titleCarta, elementoPrecoCarta, elementoPotenciaCarta, elementoAceleracaoCarta, elementoVelMaxCarta, elementoMarcaCarta) {
    console.log(i)
    //atribuindo a imagem
    imagemCarta.src = cartas[i].imagem
    //inserindo o nome
    titleCarta.innerText = cartas[i].nome
    //inserindo o preço
    var precoCarta = parseInt(cartas[i].atributos.preco).toLocaleString('pt-br', {minimumFractionDigits: 2})
    elementoPrecoCarta.innerText = `R$ ${precoCarta}`
    //inserindo a potencia
    var potenciaCarta = cartas[i].atributos.potencia
    elementoPotenciaCarta.innerText = `${potenciaCarta}cv`
    //inserindo a aceleração
    var aceleracaoCarta = cartas[i].atributos.aceleracao
    elementoAceleracaoCarta.innerText = `${aceleracaoCarta} s`
    //inserindo a velocidade máxima
    var velMaxCarta = cartas[i].atributos.velMax
    elementoVelMaxCarta.innerText = `${velMaxCarta} km/h`
    //verificando e inserindo qual é a marca
    ExibirMarca(cartas, elementoMarcaCarta)
}

function ExibirMarca(cartas, elementoMarcaCarta) {
    var marcaCarta = cartas[i].marca
    switch (marcaCarta) {
        case 'porsche':
            elementoMarcaCarta.src = 'images/logomarcas/logo-porsche.png'
            break
        case 'bmw':
            elementoMarcaCarta.src = 'images/logomarcas/logo-bmw.png'
            break
        case 'mercedes':
            elementoMarcaCarta.src = 'images/logomarcas/logo-mercedes.png'
            break
        case 'audi':
            elementoMarcaCarta.src = 'images/logomarcas/logo-audi.png'
            break
        case 'ford':
            elementoMarcaCarta.src = 'images/logomarcas/logo-ford.png'
            break
        case 'chevrolet':
            elementoMarcaCarta.src = 'images/logomarcas/logo-chevrolet.png'
            break
        case 'lamborghini':
            elementoMarcaCarta.src = 'images/logomarcas/logo-lamborghini.png'
            break
        case 'ferrari':
            elementoMarcaCarta.src = 'images/logomarcas/logo-ferrari.png'
            break
        case 'maserati':
            elementoMarcaCarta.src = 'images/logomarcas/logo-maserati.png'
            break
        case 'mclaren':
            elementoMarcaCarta.src = 'images/logomarcas/logo-mclaren.png'
            break
    }
}