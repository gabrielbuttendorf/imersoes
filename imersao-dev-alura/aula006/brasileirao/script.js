// objeto dos times
let flamengo = {escudo: 'escudos/escudo-flamengo.png', sigla: 'fla', nome: 'Flamengo', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let palmeiras = {escudo: 'escudos/escudo-palmeiras.png', sigla: 'pal', nome: 'Palmeiras', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let gremio = {escudo: 'escudos/escudo-gremio.png', sigla: 'gre', nome: 'Grêmio', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let athleticoPr = {escudo: 'escudos/escudo-athletico-pr.png', sigla: 'cap', nome: 'Athletico PR', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let goias = {escudo: 'escudos/escudo-goias.webp', sigla: 'goi', nome: 'Goiás', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let botafogo = {escudo: 'escudos/escudo-botafogo.png', sigla: 'bot', nome: 'Botafogo', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let corinthians = {escudo: 'escudos/escudo-corinthians.png', sigla: 'cor', nome: 'Corinthians', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let internacional = {escudo: 'escudos/escudo-internacional.png', sigla: 'int', nome: 'Internacional', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let fluminense = {escudo: 'escudos/escudo-fluminense.png', sigla: 'flu', nome: 'Fluminense', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let santos = {escudo: 'escudos/escudo-santos.png', sigla: 'san', nome: 'Santos', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let bragantino = {escudo: 'escudos/escudo-bragantino.png', sigla: 'rbb', nome: 'Bragantino', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let bahia = {escudo: 'escudos/escudo-bahia.png', sigla: 'bah', nome: 'Bahia', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let cruzeiro = {escudo: 'escudos/escudo-cruzeiro.png', sigla: 'cru', nome: 'Cruzeiro', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let saoPaulo = {escudo: 'escudos/escudo-sao-paulo.png', sigla: 'sao', nome: 'São Paulo', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let atleticoMg = {escudo: 'escudos/escudo-atletico-mg.png', sigla: 'cam', nome: 'Atlético MG', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let fortaleza = {escudo: 'escudos/escudo-fortaleza.png', sigla: 'for', nome: 'Fortaleza', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let vasco = {escudo: 'escudos/escudo-vasco.png', sigla: 'vas', nome: 'Vasco', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let cuiaba = {escudo: 'escudos/escudo-cuiaba.png', sigla: 'cui', nome: 'Cuiabá', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let coritiba = {escudo: 'escudos/escudo-coritiba.png', sigla: 'cfc', nome: 'Coritiba', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}
let americaMg = {escudo: 'escudos/escudo-america-mg.png', sigla: 'ame', nome: 'América MG', pontos: 0, jogos: 0, vitorias: 0, derrotas: 0, empates: 0}

// lista dos objetos
let listaTimes = [flamengo, palmeiras, gremio, athleticoPr, goias, botafogo, corinthians, internacional, fluminense, santos, bragantino, bahia, cruzeiro, saoPaulo, atleticoMg, fortaleza, vasco, cuiaba, coritiba, americaMg]

let botaoTimeCasa = document.getElementById('btn-time-casa')
let botaoTimeFora = document.getElementById('btn-time-fora')
let botaoEmpate = document.getElementById('btn-empate')
let timeCasa = ''
let timeFora = ''
let qtdTimesInseridos = 0

function AdicionarPartida() {
    //o replace serve para remover espaços digitados sem querer
    let inputTimeCasa = document.getElementById('time-casa').value.trim()
    let inputTimeFora = document.getElementById('time-fora').value.trim()
    // verificador para saber se o usuário digitou os dois times corretamente
    qtdTimesInseridos = 0

    // verifica se o input não está em branco
    if (inputTimeCasa == 0 || inputTimeFora == 0) {
        alert('Preencha todos os campos para continuar.')
    } else {
        for (let i = 0; i < listaTimes.length; i++) {
            //verificação por nome
            if (inputTimeCasa.toLowerCase() == listaTimes[i].nome.toLowerCase() ||
            inputTimeCasa.toLowerCase() == listaTimes[i].nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
                botaoTimeCasa.innerText = listaTimes[i].nome
                timeCasa = listaTimes[i].nome
                qtdTimesInseridos++
            //verificação por sigla
            } else if (inputTimeCasa.toLowerCase() == listaTimes[i].sigla) {
                botaoTimeCasa.innerText = listaTimes[i].nome
                timeCasa = listaTimes[i].nome
                qtdTimesInseridos++
            }
    
            //verificação por nome
            if (inputTimeFora.toLowerCase() == listaTimes[i].nome.toLowerCase() ||
            inputTimeFora.toLowerCase() == listaTimes[i].nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
                botaoTimeFora.innerText = listaTimes[i].nome
                timeFora = listaTimes[i].nome
                qtdTimesInseridos++
            //verificação por sigla
            } else if (inputTimeFora.toLowerCase() == listaTimes[i].sigla) {
                botaoTimeFora.innerText = listaTimes[i].nome
                timeFora = listaTimes[i].nome
                qtdTimesInseridos++
            }
        }

        //verificação para saber se os dois times digitados estão corretos e não são iguais
        if (qtdTimesInseridos != 2) {
            alert('Times inválidos! Insira o nome completo ou a sigla do time.')
            botaoTimeCasa.innerText = 'Time Casa'
            botaoTimeFora.innerText = 'Time Fora'
        } else if (timeCasa == timeFora) {
            alert('Os dois times não podem ser iguais!')
            botaoTimeCasa.innerText = 'Time Casa'
            botaoTimeFora.innerText = 'Time Fora'
        } else {
            botaoTimeCasa.disabled = false
            botaoTimeFora.disabled = false
            botaoEmpate.disabled = false
            document.getElementById('time-fora').value = ''
            document.getElementById('time-casa').value = ''
        }
    }
}

botaoTimeCasa.addEventListener('click', function() {
        console.log(qtdTimesInseridos)
        let vencedor = timeCasa
        let perdedor = timeFora
        DefinirVencedor(vencedor, perdedor)
        // botaoTimeCasa.innerText = 'Time Casa'
        // botaoTimeFora.innerText = 'Time Fora'
})
botaoEmpate.addEventListener('click', function() {
        let perdedor = ''
        let vencedor = [timeCasa, timeFora]
        DefinirVencedor(vencedor, perdedor)
        // botaoTimeCasa.innerText = 'Time Casa'
        // botaoTimeFora.innerText = 'Time Fora'
})
botaoTimeFora.addEventListener('click', function() {
        let vencedor = timeFora
        let perdedor = timeCasa
        DefinirVencedor(vencedor, perdedor)
        // botaoTimeCasa.innerText = 'Time Casa'
        // botaoTimeFora.innerText = 'Time Fora'
})

function DefinirVencedor(vencedor, perdedor) {
    // console.log(vencedor)
    for (let i = 0; i < listaTimes.length; i++) {
        if (vencedor == listaTimes[i].nome) {
            listaTimes[i].vitorias++
            listaTimes[i].jogos++
            for (let i = 0; i < listaTimes.length; i++) {
                if (perdedor == listaTimes[i].nome) {
                    listaTimes[i].derrotas++
                    listaTimes[i].jogos++
                }
            }
        }
    }

    if (Array.isArray(vencedor)) {
        for (let i = 0; i < listaTimes.length; i++) {
            if (vencedor[0] == listaTimes[i].nome) {
                listaTimes[i].empates++
                listaTimes[i].jogos++
                for (let i = 0; i < listaTimes.length; i++) {
                    if (vencedor[1] == listaTimes[i].nome) {
                        listaTimes[i].empates++
                        listaTimes[i].jogos++
                    }
                }
            }
        }
    }

    ExibirTabela()
    document.getElementById('btn-time-casa').disabled = true
    document.getElementById('btn-empate').disabled = true
    document.getElementById('btn-time-fora').disabled = true
    document.getElementById('time-fora').value = ''
    document.getElementById('time-casa').value = ''
}

function CalcularPontos() {
    for (let i = 0; i < listaTimes.length; i++) {
        listaTimes[i].pontos = (listaTimes[i].vitorias * 3) + listaTimes[i].empates
        
        //ordena o array de acordo com os pontos
        listaTimes.sort(function(a, b) {
            if (a.pontos > b.pontos) {
                return -1
            } else {
                return true
            }
        })
    }
}

function ExibirTabela() {
    CalcularPontos()

    let elementoTimes = ''
    for (let i = 0; i < listaTimes.length; i++) {
        elementoTimes += `<tr>`
        elementoTimes += `<td class="time">`
        elementoTimes += `<img class="escudo-time" src="${listaTimes[i].escudo}">`
        elementoTimes += `${listaTimes[i].nome}`
        elementoTimes += `</td>`
        elementoTimes += `<td>${listaTimes[i].pontos}</td>`
        elementoTimes += `<td>${listaTimes[i].jogos}</td>`
        elementoTimes += `<td>${listaTimes[i].vitorias}</td>`
        elementoTimes += `<td>${listaTimes[i].derrotas}</td>`
        elementoTimes += `<td>${listaTimes[i].empates}</td>`
        elementoTimes += `</tr>`
    }
let elementoTabela = document.getElementById('tabela')
elementoTabela.innerHTML = elementoTimes
}

function ZerarTabela() {
    for (let i = 0; i < listaTimes.length; i++) {
        listaTimes[i].pontos = 0
        listaTimes[i].jogos = 0
        listaTimes[i].vitorias = 0
        listaTimes[i].derrotas = 0
        listaTimes[i].empates = 0
    }

    ExibirTabela()
}

//exibe a tabela na primeira vez que executar
ExibirTabela()

//Enter para Adicionar Partida
document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        AdicionarPartida()
    }
})