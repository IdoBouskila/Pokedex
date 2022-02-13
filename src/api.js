const apiURL = 'https://pokeapi.co/api/v2/';

export const callAPI = async (endpoint) => {
    return fetch(apiURL + endpoint)
    .then(response => response.json());
}

export const pokemonsNamesByTypes = async (type) => {
    return callAPI('type/' + type);
}

export const fetchPokemonsData = async (type) => {
    const pokemons = []
    pokemonsNamesByTypes(type)
    .then(data => {
        
        (data.pokemon).map(item => {
            fetch(item.pokemon.url)
            .then(response => response.json())
            .then(data => {
                pokemons.push(data);
            })
        })
    })

    return pokemons;
}

export const fetchEvolution = async (pokemonID) => {
    callAPI('pokemon-species/' + pokemonID)
    .then(response => response.json())
    .then(data => {
        data.id
    })
}
