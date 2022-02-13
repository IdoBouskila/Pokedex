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

// export const fetchEvolution = async (pokemonID) => {
//     callAPI('pokemon-species/' + pokemonID)
//     .then(response => response.json())
//     .then(data => {
//         callAPI('evolution-chain/' + data.id)
//         .then(response => response.json())
//         .then(data => {
//             const pokeEvolution = [
//                 {
//                     name: pokemonID,
//                     level: data.chain.evolves_to[0].evolution_details[0].min_level,
//                 },
//                 {
//                     name: data.chain.evolves_to[0].evolves_to[0].evolution_details[0].species.name,
//                     level: data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
//                 },
//                 {
//                     name: 
//                 }
//             ]
//         })
//     })
// }
