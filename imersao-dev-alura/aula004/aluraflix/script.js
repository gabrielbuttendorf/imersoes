let listaFilmes = [
    'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/Martian_poster_2015.jpg/250px-Martian_poster_2015.jpg',
    'https://jardimdasamericas.com.br/uploads/2023/02/capa-filme-gato-de-botas-2-o-ultimo-pedido-1f766-large.jpg',
]

let elementoListaFilmes = document.getElementById('lista-filmes')
let inputFilme = document.getElementById('filme')

// imprime os três primeiros filmes
for (let i = 0; i < listaFilmes.length; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', listaFilmes[i])
    img.setAttribute('class', 'filme')
    elementoListaFilmes.appendChild(img)
}

function AdicionarFilme() {
    let filmeInserido = document.getElementById('filme').value

    if (listaFilmes.includes(filmeInserido)) {
        alert('Esse filme já existe na sua lista')
        inputFilme.value = ''
    } else {
        listaFilmes.push(filmeInserido)
        //limpa a div dos filmes
        elementoListaFilmes.innerHTML = ''
        for (let i = 0; i < listaFilmes.length; i++) {
            let img = document.createElement('img')
            img.setAttribute('src', listaFilmes[i])
            img.setAttribute('class', 'filme')
            elementoListaFilmes.appendChild(img)
        }
        //limpa o input
        inputFilme.value = ''
    }
}