const apiURL = 'https://pokeapi.co/api/v2/';

export const callAPI = (endpoint) => {
    return fetch(apiURL + endpoint)
    .then(response => response.json());
}

export const pokemonsNamesByTypes = (type) => {
    return callAPI('type/' + type);
}

export const fetchPokemonsData = (type) => {
    const pokemons = []
    pokemonsNamesByTypes(type)
    .then(data => {
        data.pokemon.forEach((item, index) => {
            fetch(item.pokemon.url)
            .then(response => response.json())
            .then(data => {
                pokemons[index] = data;
            })
        })
    })

    return pokemons;
}

export const fetchEvolution = (pokemonID) => {
    return callAPI('pokemon-species/' + pokemonID)
    .then( ( data ) => fetch( data.evolution_chain.url ).then( res => res.json() ) );
}
