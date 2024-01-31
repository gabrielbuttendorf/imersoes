// API ARTISTS --
const searchInput = document.getElementById('search-input')
const resultArtists = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    })

    resultArtists.classList.remove('hidden')
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden')
        resultArtists.classList.add('hidden')
        return
    }
    requestApi(searchTerm)
})
// FIM - API ARTISTS --

// H1 GREETING --
const greetingH1 = document.getElementById('greeting')
const currentHour = new Date().getHours()

if (currentHour > 0 && currentHour < 12) {
    greetingH1.textContent = 'Bom dia'
} else if (currentHour > 12 && currentHour < 18) {
    greetingH1.textContent = 'Boa tarde'
} else {
    greetingH1.textContent = 'Boa noite'
}
// FIM - H1 GREETING --

