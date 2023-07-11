document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Converter()
    }
})

function Converter() {
    let moeda01 = document.getElementById('moeda-1')
    let moedaSelecionada01 = moeda01.options[moeda01.selectedIndex].value

    let moeda02 = document.getElementById('moeda-2')
    let moedaSelecionada02 = moeda02.options[moeda02.selectedIndex].value

    let valorInserido = parseFloat(document.getElementById('valor-inserido').value)
    let elementoValorConvertido = document.getElementById('valor-convertido')

    let valorConvertido = ''

    if (moedaSelecionada01 == 'real') {
        if (moedaSelecionada02 == 'dolar') {
            valorConvertido = (valorInserido / 5).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'euro') {
            valorConvertido = (valorInserido / 5.50).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'bitcoin') {
            valorConvertido = (valorInserido / 150000).toFixed(5)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    } else if (moedaSelecionada01 == 'dolar') {
        if (moedaSelecionada02 == 'real') {
            valorConvertido = (valorInserido * 5).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'euro') {
            valorConvertido = (valorInserido * 0.90).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'bitcoin') {
            valorConvertido = (valorInserido * 0.000034).toFixed(5)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    } else if (moedaSelecionada01 == 'euro') {
        if (moedaSelecionada02 == 'dolar') {
            valorConvertido = (valorInserido / 0.90).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'real') {
            valorConvertido = (valorInserido * 5.50).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'bitcoin') {
            valorConvertido = (valorInserido * 0.000038).toFixed(5)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }
    } else {
        if (moedaSelecionada02 == 'dolar') {
            valorConvertido = (valorInserido / 0.000034).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'euro') {
            valorConvertido = (valorInserido / 0.000038).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else if (moedaSelecionada02 == 'real') {
            valorConvertido = (valorInserido / 0.0000068).toFixed(2)
            elementoValorConvertido.value = valorConvertido
        } else {
            valorConvertido = valorInserido
            elementoValorConvertido.value = valorConvertido
        }        
    }
}