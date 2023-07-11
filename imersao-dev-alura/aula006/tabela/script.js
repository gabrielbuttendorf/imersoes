let jogador1 = {foto: 'https://www.alura.com.br/assets/img/imersoes/gui-instructor.png', nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}
let jogador2 = {foto: 'https://www.alura.com.br/assets/img/imersoes/instrutores/paulo_silveira.1647533644.jpg', nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}

let jogadores = [jogador1, jogador2]

function AdicionarJogador() {
    let nome = document.getElementById('input-nome').value.trim()
    let foto = document.getElementById('input-foto').value.trim()

    if (nome.length == 0) {
        alert('Digite pelo menos o nome do jogador.')
    } else {
        if (foto.length == 0 || foto.endsWith('.png') || foto.endsWith('.jpg') || foto.endsWith('.jpeg')) {
            let newJogador = {foto: foto, nome: nome, vitorias: 0, empates: 0, derrotas: 0, pontos: 0}

            jogadores.push(newJogador)
            ExibirJogadores(jogadores)

            nome = document.getElementById('input-nome').value = ''
            foto = document.getElementById('input-foto').value = ''
        } else {
            alert('Formato de imagem inválido.')
        }
    }
}

function CalcularPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function ExibirJogadores(jogadores) {
    let elemento = ''

    for (let i = 0; i < jogadores.length; i++) {
        elemento += `<tr>`
        elemento += `<td class="td-foto"><img class="player-foto" src="${jogadores[i].foto}"</td>`
        elemento += `<td class="player-name">${jogadores[i].nome}</td>`
        elemento += `<td>${jogadores[i].vitorias}</td>`
        elemento += `<td>${jogadores[i].empates}</td>`
        elemento += `<td>${jogadores[i].derrotas}</td>`
        elemento += `<td>${jogadores[i].pontos}</td>`
        elemento += `<td><button onClick="AdicionarVitoria('${i}')">Vitória</button></td>`
        elemento += `<td><button onClick="AdicionarEmpate('${i}')">Empate</button></td>`
        elemento += `<td><button onClick="AdicionarDerrota('${i}')">Derrota</button></td>`
        elemento += `</tr>`
    }
    let tabelaJogadores = document.getElementById('tabela-jogadores')
    tabelaJogadores.innerHTML = elemento
}

function AdicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = CalcularPontos(jogador)

    //sorteio do perdedor
    let j = Math.floor(Math.random() * jogadores.length)
    jogador = jogadores[j]
    while (jogador == jogadores[i]) {
        let j = Math.floor(Math.random() * jogadores.length)
        jogador = jogadores[j]
    }

    jogador.derrotas++
    jogador.pontos = CalcularPontos(jogador)
    ExibirJogadores(jogadores)

    //verificar qual é o jogador com mais pontos
    VerificarMaxPontos()
}

function AdicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = CalcularPontos(jogador)

    //sorteio do outro jogador
    let j = Math.floor(Math.random() * jogadores.length)
    jogador = jogadores[j]
    while (jogador == jogadores[i]) {
        let j = Math.floor(Math.random() * jogadores.length)
        jogador = jogadores[j]
    }
    jogador.empates++
    jogador.pontos = CalcularPontos(jogador)
    ExibirJogadores(jogadores)

    //verificar qual é o jogador com mais pontos
    VerificarMaxPontos()
}

function AdicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++

    //sorteio do vencedor
    let j = Math.floor(Math.random() * jogadores.length)
    jogador = jogadores[j]
    while (jogador == jogadores[i]) {
        let j = Math.floor(Math.random() * jogadores.length)
        jogador = jogadores[j]
    }
    jogador.vitorias++
    jogador.pontos = CalcularPontos(jogador)
    ExibirJogadores(jogadores)

    //verificar qual é o jogador com mais pontos
    VerificarMaxPontos()
}

function VerificarMaxPontos() {
    let maxPontos = 0
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].pontos > maxPontos) {
            maxPontos = jogadores[i].pontos
            jogadorLider = jogadores[i]
        }
    }

    indiceJogadorLider = jogadores.indexOf(jogadorLider)
    tdLider = document.getElementsByClassName('player-name')[indiceJogadorLider]
    tdLider.setAttribute('class', 'lider')
}

function ZerarTabela() {
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
    }
    
    ExibirJogadores(jogadores)
}

ExibirJogadores(jogadores)