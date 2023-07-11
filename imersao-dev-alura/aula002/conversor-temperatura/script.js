document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Converter()
    }
})

function Converter() {
    let temp01 = document.getElementById('temp-1')
    let tempSelecionada01 = temp01.options[temp01.selectedIndex].value

    let temp02 = document.getElementById('temp-2')
    let tempSelecionada02 = temp02.options[temp02.selectedIndex].value

    let valorInserido = parseFloat(document.getElementById('valor-inserido').value)
    let elementoValorConvertido = document.getElementById('valor-convertido')

    let valorConvertido = ''

    if (tempSelecionada01 == 'celsius') {
        if (tempSelecionada02 == 'kelvin') {
            valorConvertido = (valorInserido + 273.15).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else if (tempSelecionada02 == 'farenheit') {
            valorConvertido = ((valorInserido * 9 / 5) + 32).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    } else if (tempSelecionada01 == 'kelvin') {
        if (tempSelecionada02 == 'celsius') {
            valorConvertido = (valorInserido - 273.15).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else if (tempSelecionada02 == 'farenheit') {
            valorConvertido = (((valorInserido - 273.15) * 9 / 5) + 32).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    } else {
        if (tempSelecionada02 == 'celsius') {
            valorConvertido = ((valorInserido - 32) * 5 / 9).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else if (tempSelecionada02 == 'kelvin') {
            valorConvertido = ((valorInserido - 32) * 5 / 9 + 273.15).toFixed(1)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    }
}