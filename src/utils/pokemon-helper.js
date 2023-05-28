export const getTypeIconSrc = (type) => `./assets/images/types-icons/${ type }.svg`;

export const formatPokemonData = (pokemon) => {
    const { id, name, sprites, weight, height, stats, types } = pokemon;
    
    const weightToKg = (weight / 10 ) + 'kg';
    const heightToMeter = (height / 10 ) + 'm';
    const paddedId = String(id).padStart(3, '0');
    const formattedTypes = types.map(({ type }) => type);
    const pokemonImg = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;

    return {
        ...pokemon,
        paddedId,
        weight: weightToKg,
        imgSrc: pokemonImg,
        height: heightToMeter,
        types: formattedTypes,
        name: removeHyphens(name),
    };
}

function removeHyphens(string) {
    return string.replace(/-/g, ' ');
}

// create well structured object from api stats array for easier usage
export function formatStats(stats) {
    const statsMaxValues = {
        hp: 714,
        attack: 714,
        defense: 614,
        "special-attack": 504,
        "special-defense": 614,
        speed: 504,
    }

    const statsObject = stats.map(({ stat, base_stat }) => {
        return {
            name: removeHyphens(stat.name),
            value: base_stat,
            max: statsMaxValues[stat.name]
        }
    });

    const totalStats = stats.reduce((total, { base_stat }) => {
        return {
            ...total,
            value: total.value + base_stat
        };
    }, { name: 'total', value: 0 });
    
    return [
        ...statsObject,
        totalStats
    ];
}

export function normalizeEvolutionChain(evolutionChain) {
    const { species, evolves_to } = evolutionChain;
    
    if(! evolves_to.length) {
        return [];
    }
    
    // The evolution-chain endpoint doesn't provide the ID and image source of each evolved pokémon
    const getPokemonImage = (url) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ url.match(/\/(\d+)\//)[1] }.svg`;
    
    const evolutions = evolves_to.reduce((chain, evolution) => {
        return [
            ...chain,
            {
                current: {
                    name: species.name,
                    image: getPokemonImage(species.url),
                },
                next: {
                    name: evolution.species.name,
                    image: getPokemonImage(evolution.species.url),
                },
            },
            ...normalizeEvolutionChain(evolution)
        ];
    }, []);

    return evolutions;
}
