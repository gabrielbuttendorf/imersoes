// Colocamos o [0] atrás pois se trata de uma classe, se não identificarmos exatamente qual elemento queremos o getElementsByClassName não funciona
let container = document.getElementsByClassName('container')[0]
let pageTitle = document.getElementsByClassName('page-title')[0]
let pageSubtitle = document.getElementsByClassName('page-subtitle')[0]

let divInteraction = document.getElementsByClassName('interaction')[0]
let select01 = document.getElementById('select01')
let select02 = document.getElementById('select02')
let resultado = document.getElementById('result')

let unidade = ''

// as funções Exibe...() apenas modificam os elementos (title, select) de acordo com a escolha do usuário

function ExibeTemperatura() {
    //atribui o valor para depois chamar a função
    unidade = 'temperatura'

    //altera o título
    pageTitle.innerHTML = 'Conversor de Temperatura'

    //habilita o botão converter somente ao selecionar alguma unidade (temp, moeda, comp)
    let btnConvert = document.getElementById('convert').disabled = false

    //limpa o conteúdo dos selects
    select01.innerHTML = ''
    select02.innerHTML = ''
    
    //adiciona as opções do select
    let optionCelsius = document.createElement('option')
    optionCelsius.id = 'optCel'
    optionCelsius.innerHTML = 'Celsius'

    let optionKelvin = document.createElement('option')
    optionKelvin.id = 'optKel'
    optionKelvin.innerHTML = 'Kelvin'

    let optionFarenheit = document.createElement('option')
    optionFarenheit.id = 'optFar'
    optionFarenheit.innerHTML = 'Farenheit'

    // cloneNode serve para clonar os elementos e evitar ter que criar para cada SELECT.
    select01.appendChild(optionCelsius.cloneNode(true))
    select01.appendChild(optionKelvin.cloneNode(true))
    select01.appendChild(optionFarenheit.cloneNode(true))

    select02.appendChild(optionCelsius.cloneNode(true))
    select02.appendChild(optionKelvin.cloneNode(true))
    select02.appendChild(optionFarenheit.cloneNode(true))
}

function ExibeMoeda() {
    //atribui o valor para depois chamar a função
    unidade = 'moeda'

    //altera o título
    pageTitle.innerHTML = 'Conversor de Moeda'
    
    //habilita o botão converter somente ao selecionar alguma unidade (temp, moeda, comp)
    let btnConvert = document.getElementById('convert').disabled = false

    //limpa o conteúdo dos selects
    select01.innerHTML = ''
    select02.innerHTML = ''

    //adiciona as opções do select
    let optionReal = document.createElement('option')
    optionReal.id = 'optReal'
    optionReal.innerHTML = 'Real'

    let optionDolar = document.createElement('option')
    optionDolar.id = 'optDol'
    optionDolar.innerHTML = 'Dólar'

    let optionEuro = document.createElement('option')
    optionEuro.id = 'optEur'
    optionEuro.innerHTML = 'Euro'

    // cloneNode serve para clonar os elementos e evitar ter que criar para cada SELECT.
    select01.appendChild(optionReal.cloneNode(true))
    select01.appendChild(optionDolar.cloneNode(true))
    select01.appendChild(optionEuro.cloneNode(true))

    select02.appendChild(optionReal.cloneNode(true))
    select02.appendChild(optionDolar.cloneNode(true))
    select02.appendChild(optionEuro.cloneNode(true))
}

function ExibeComprimento() {
    //atribui o valor para depois chamar a função
    unidade = 'comprimento'

    //altera o título
    pageTitle.innerHTML = 'Conversor de Comprimento'

    //habilita o botão converter somente ao selecionar alguma unidade (temp, moeda, comp)
    let btnConvert = document.getElementById('convert').disabled = false

    //limpa o conteúdo dos selects
    select01.innerHTML = ''
    select02.innerHTML = ''

    //adiciona as opções do select
    let optionMilimetro = document.createElement('option')
    optionMilimetro.id = 'optMM'
    optionMilimetro.innerHTML = 'Milímetro(mm)'

    let optionCentimetro = document.createElement('option')
    optionCentimetro.id = 'optCM'
    optionCentimetro.innerHTML = 'Centímetro(cm)'
    
    let optionMetro = document.createElement('option')
    optionMetro.id = 'optM'
    optionMetro.innerHTML = 'Metro(m)'
    
    let optionQuilometro = document.createElement('option')
    optionQuilometro.id = 'optKM'
    optionQuilometro.innerHTML = 'Quilômetro(km)'

    // cloneNode serve para clonar os elementos e evitar ter que criar para cada SELECT.
    select01.appendChild(optionMilimetro.cloneNode(true))
    select01.appendChild(optionCentimetro.cloneNode(true))
    select01.appendChild(optionMetro.cloneNode(true))
    select01.appendChild(optionQuilometro.cloneNode(true))

    select02.appendChild(optionMilimetro.cloneNode(true))
    select02.appendChild(optionCentimetro.cloneNode(true))
    select02.appendChild(optionMetro.cloneNode(true))
    select02.appendChild(optionQuilometro.cloneNode(true))
}

// a função converter é acionada quando o botão Converter for clicado, e de acordo com a escolha do usuário, chama a função de conversão para cada unidade
function Converter() {
    if (unidade == 'temperatura') {
        ConverterTemperatura()
    } else if (unidade == 'moeda') {
        ConverterMoeda()
    } else if (unidade == 'comprimento') {
        ConverterComprimento()
    }
}

// as funções Converter...() convertem e exibem o valor de acordo com a escolha escolha do usuário
function ConverterTemperatura() {
    //pega o valor digitado
    let valor = Number(document.getElementById('valor').value)

    //verifica qual foi o option selecionado e armazena o texto do mesmo
    let selectedOption01 = select01.options[select01.selectedIndex].text
    let selectedOption02 = select02.options[select02.selectedIndex].text
    
    if (selectedOption01 == 'Celsius') {
        //Celsius para outra unidade
        if (selectedOption02 == 'Kelvin') {
            let valorConvertido = (valor + 273.15).toFixed(1)
            resultado.innerText = `${valor}°C é igual a ${valorConvertido} K`
        } else if (selectedOption02 == 'Farenheit') {
            let valorConvertido = (((valor * 9) / 5) + 32).toFixed(1)
            resultado.innerText = `${valor}°C é igual a ${valorConvertido}°F`
        } else {
            resultado.innerText =  `Não é possível converter ${selectedOption01} para ${selectedOption02}`
        }

    } else if (selectedOption01 == 'Kelvin') {
        //Kelvin para outra unidade
        if (selectedOption02 == 'Celsius') {
            let valorConvertido = (valor - 273.15).toFixed(1)
            resultado.innerText =  `${valor} K é igual a ${valorConvertido}°C`
        } else if (selectedOption02 == 'Farenheit') {
            let valorConvertido = (((valor - 273.15) * 9) / 5 + 32).toFixed(1)
            resultado.innerText =  `${valor} K é igual a ${valorConvertido}°F`
        } else {
            resultado.innerText =  `Não é possível converter ${selectedOption01} para ${selectedOption02}`
        }

    } else {
        //Farenheit para outra unidade
        if (selectedOption02 == 'Celsius') {
            let valorConvertido = (((valor - 32) * 5) / 9).toFixed(1)
            resultado.innerText = `${valor}°F é igual a ${valorConvertido}°C`
        } else if (selectedOption02 == 'Kelvin') {
            let valorConvertido = (((valor - 32) * 5) / 9 + 273.15).toFixed(1)
            resultado.innerText = `${valor}°F é igual a ${valorConvertido} K`
        } else {
            resultado.innerText =  `Não é possível converter ${selectedOption01} para ${selectedOption02}`
        }
    }  
}

function ConverterMoeda() {
    //pega o valor digitado
    let valor = Number(document.getElementById('valor').value).toFixed(2)

    //verifica qual foi o option selecionado e armazena o texto do mesmo
    let selectedOption01 = select01.options[select01.selectedIndex].text
    let selectedOption02 = select02.options[select02.selectedIndex].text

    if (selectedOption01 == 'Real') {
        //Real para outra moeda
        if (selectedOption02 == 'Dólar') {
            let valorConvertido = (valor / 5.10).toFixed(2)
            resultado.innerText = `R$ ${valor} equivalem a U$ ${valorConvertido}`
        } else if (selectedOption02 == 'Euro') {
            let valorConvertido = (valor / 5.50).toFixed(2)
            resultado.innerText = `R$ ${valor} equivalem a € ${valorConvertido}`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    } else if (selectedOption01 == 'Dólar') {
        //Dólar para outra moeda
        if (selectedOption02 == 'Real') {
            let valorConvertido = (valor * 5.10).toFixed(2)
            resultado.innerText = `U$ ${valor} equivalem a R$ ${valorConvertido}`
        } else if (selectedOption02 == 'Euro') {
            let valorConvertido = (valor * 0.95).toFixed(2)
            resultado.innerText = `U$ ${valor} equivalem a € ${valorConvertido}`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    } else {
        //Euro para outra moeda
        if (selectedOption02 == 'Real') {
            let valorConvertido = (valor * 5.50).toFixed(2)
            resultado.innerText = `€ ${valor} equivalem a R$ ${valorConvertido}`
        } else if (selectedOption02 == 'Dólar') {
            let valorConvertido = (valor / 0.95).toFixed(2)
            resultado.innerText = `€ ${valor} equivalem a U$ ${valorConvertido}`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    }
}

function ConverterComprimento() {
    //pega o valor digitado
    let valor = Number(document.getElementById('valor').value)

    //verifica qual foi o option selecionado e armazena o texto do mesmo
    let selectedOption01 = select01.options[select01.selectedIndex].text
    let selectedOption02 = select02.options[select02.selectedIndex].text

    if (selectedOption01 == 'Milímetro(mm)') {
        //mm para outra unidade
        if (selectedOption02 == 'Centímetro(cm)') {
            let valorConvertido = (valor / 10)
            resultado.innerText = `${valor} mm equivalem a ${valorConvertido} cm`
        } else if (selectedOption02 == 'Metro(m)') {
            let valorConvertido = (valor / 1000)
            resultado.innerText = `${valor} mm equivalem a ${valorConvertido} m`
        } else if (selectedOption02 == 'Quilômetro(km)') {
            let valorConvertido = (valor / 1000000)
            resultado.innerText = `${valor} mm equivalem a ${valorConvertido} km`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    } else if (selectedOption01 == 'Centímetro(cm)') {
        //cm para outra unidade
        if (selectedOption02 == 'Milímetro(mm)') {
            let valorConvertido = (valor * 10)
            resultado.innerText = `${valor} cm equivalem a ${valorConvertido} mm`
        } else if (selectedOption02 == 'Metro(m)') {
            let valorConvertido = (valor / 100)
            resultado.innerText = `${valor} cm equivalem a ${valorConvertido} m`
        } else if (selectedOption02 == 'Quilômetro(km)') {
            let valorConvertido = (valor / 100000)
            resultado.innerText = `${valor} cm equivalem a ${valorConvertido} km`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    } else if (selectedOption01 == 'Metro(m)') {
        //m para outra unidade
        if (selectedOption02 == 'Milímetro(mm)') {
            let valorConvertido = (valor * 1000)
            resultado.innerText = `${valor} m equivalem a ${valorConvertido} mm`
        } else if (selectedOption02 == 'Centímetro(cm)') {
            let valorConvertido = (valor * 100)
            resultado.innerText = `${valor} m equivalem a ${valorConvertido} cm`
        } else if (selectedOption02 == 'Quilômetro(km)') {
            let valorConvertido = (valor / 1000)
            resultado.innerText = `${valor} m equivalem a ${valorConvertido} km`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}` 
        }
    } else {
        //km para outra unidade
        if (selectedOption02 == 'Milímetro(mm)') {
            let valorConvertido = (valor * 1000000)
            resultado.innerText = `${valor} km equivalem a ${valorConvertido} mm`
        } else if (selectedOption02 == 'Centímetro(cm)') {
            let valorConvertido = (valor * 100000)
            resultado.innerText = `${valor} km equivalem a ${valorConvertido} cm`
        } else if (selectedOption02 == 'Metro(m)') {
            let valorConvertido = (valor * 1000)
            resultado.innerText = `${valor} km equivalem a ${valorConvertido} m`
        } else {
            resultado.innerText = `Não é possível conveter ${selectedOption01} para ${selectedOption02}`
        }
    }
}

// trocar tema

let checkButton = document.getElementById('btn-theme')
let pTheme = document.getElementsByClassName('p-theme')[0]
let theme = ''

checkButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList == 'light-theme') {
        theme = 'light'
        localStorage.setItem("theme", theme)
    } else {
        theme = 'dark'
        localStorage.setItem("theme", theme)
    }
})

// pega o tema armazenado
theme = localStorage.getItem('theme');

if (theme == 'dark') {
    document.body.classList.add('dark-theme')
    checkButton.checked = true
} else {
    document.body.classList.add('light-theme')
}







