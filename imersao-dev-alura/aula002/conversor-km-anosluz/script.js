document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Converter()
    }
})

let resultado = document.getElementById('resultado')

function Converter() {
    if (document.getElementById('km').checked) {
        let elementoValorInserido = (document.getElementById('valor-inserido'))

        if (elementoValorInserido.value.length == 0) {
            alert('Insira algum valor para converter.')
        } else {
            let valorInserido = parseFloat(elementoValorInserido.value)

            let valorConvertido = valorInserido / 9500000000000
            resultado.innerText = `${valorConvertido} anos-luz`
        }
    } else if (document.getElementById('ano-luz').checked) {
        let elementoValorInserido = (document.getElementById('valor-inserido'))

        if (elementoValorInserido.value.length == 0) {
            alert('Insira algum valor para converter.')
        } else {
            let valorInserido = parseFloat(elementoValorInserido.value)

            let valorConvertido = valorInserido * 9500000000000
            resultado.innerText = `${valorConvertido} km`
        }
    } else {

    }
}