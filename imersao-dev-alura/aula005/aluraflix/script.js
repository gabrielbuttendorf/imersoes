let inputFilme = document.getElementById('url-filme')
let inputTitulo = document.getElementById('titulo-filme')
let listaFilmes = [
    'https://3.bp.blogspot.com/-tCBmjw7ti_M/VGDla6PAW_I/AAAAAAAAM8c/7vaEVkmio4g/s1600/Interestelar%2B01.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b8/Furious_7_poster.jpg/250px-Furious_7_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg'
]
let listaTituloFilmes = [
    'Interestelar',
    'Velozes e Furiosos 7',
    'Vingadores: Ultimato'
]

ListarFilmes()

// ---------------------- Adicionar Filme ---------------------- 
function AdicionarFilme() {
    let filme = document.getElementById('url-filme').value
    let tituloFilme = document.getElementById('titulo-filme').value

    if (filme.endsWith('png') || filme.endsWith('jpg') || filme.endsWith('jpeg')) {
        if (tituloFilme.length == 0) {
            alert('Insira o nome do filme!')
        } else {
            if (listaFilmes.includes(filme) == false && listaTituloFilmes.includes(tituloFilme) == false) {
                listaFilmes.push(filme)
                listaTituloFilmes.push(tituloFilme)
                ListarFilmes(filme, tituloFilme)
            } else {
                alert('Filme já adicionando.')
            }
        }
    } else {
        alert('Formato de imagem inválido!')
    }

    inputFilme.value = ''
    inputTitulo.value = ''
}

// ---------------------- Exibir Filme ---------------------- 
function ListarFilmes(filme, tituloFilme) {
    let elementoListaFilmes = document.getElementById('lista-filmes') 
    elementoListaFilmes.innerHTML = ''

    for (let i = 0; i < listaFilmes.length; i++) {
        //criando a div de cada filme
        var elementoDivFilme = document.createElement('div')
        elementoDivFilme.setAttribute('class', 'div-filme')
        //criando o elemento onde fica a capa e a lixeira
        var elementoCapaFilme = document.createElement('div')
        elementoCapaFilme.setAttribute('class', 'capa-filme')
        //criando o elemento do filme
        var elementoFilme = document.createElement('img')
        elementoFilme.setAttribute('class', 'filme')
        //criando o elemento da lixeira
        var elementoTrash = document.createElement('img')
        elementoTrash.src = 'images/white-trash.svg'
        elementoTrash.setAttribute('class', 'trash-svg')
        elementoTrash.setAttribute('onclick', 'ExcluirFilme()')
        //criando o elemento do título
        var elementoTitulo = document.createElement('p')
        elementoTitulo.setAttribute('class', 'titulo-filme')

        elementoFilme.src = listaFilmes[i]
        elementoTitulo.innerText = listaTituloFilmes[i]

        elementoCapaFilme.appendChild(elementoFilme)
        elementoCapaFilme.appendChild(elementoTrash)

        elementoDivFilme.appendChild(elementoCapaFilme)
        elementoDivFilme.appendChild(elementoTitulo)

        elementoListaFilmes.appendChild(elementoDivFilme)
    }
}

// ---------------------- Excluir Filme ---------------------- 
// verifica se o click foi em algum item que possui essa classe (trash-svg)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('trash-svg')) {
        ExcluirFilme(event.target)
    }
})

function ExcluirFilme(botaoClicado) {
    let botaoExcluir = document.getElementsByClassName('trash-svg')
    // pega o índice desse botão
    let indiceBotao = Array.from(botaoExcluir).indexOf(botaoClicado)

    // remove o filme
    if (indiceBotao != -1) {
        listaFilmes.splice(indiceBotao, 1)
        listaTituloFilmes.splice(indiceBotao, 1)
        ListarFilmes()
    }
}

// ---------------------- Acionar com ENTER ---------------------- 
document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        AdicionarFilme()
    }
})