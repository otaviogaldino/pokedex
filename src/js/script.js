let pokemon_image = document.getElementById('pokemon_image')
let pokemon_number = document.getElementById('pokemon_number')
let pokemon_name = document.getElementById('pokemon_name')

const buscarPokemon = (pokemonDigitado) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDigitado}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            // console.log(data.name)
            // console.log(data.id)
            // console.log(data.sprites.versions['generation-v']['black-white'].animated.front_default)

            pokemon_image.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
            pokemon_number.innerText = data.id
            indice = data.id
            pokemon_name.innerText = data.name
        })
        .catch((err) => {
            alert('pokemon não encontrado')
        })
}

let input_search = document.getElementById('input_search')
let btn_search = document.getElementById('btn-search')

btn_search.addEventListener('click', function (event) {
    buscarPokemon(input_search.value)
    event.preventDefault()
})

let btn_prev = document.getElementById('btn-prev')
let btn_next = document.getElementById('btn-next')
let indice = 0

btn_next.addEventListener('click', function () {
    indice++
    buscarPokemon(indice)
})
btn_prev.addEventListener('click', function () {
    if (indice > 1) {
        indice--
        buscarPokemon(indice)
    }
})

buscarPokemon('pikachu')