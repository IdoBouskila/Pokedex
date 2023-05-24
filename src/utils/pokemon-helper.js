export const getTypeIconSrc = (type) => `./assets/images/types-icons/${ type }.svg`;

export const formatPokemonData = (pokemon) => {
    const { id, name, sprites, weight, height, stats, types } = pokemon;
    
    const weightToKg = (weight / 10 ) + 'kg';
    const heightToMeter = (height / 10 ) + 'm';
    const paddedId = String(id).padStart(3, '0');
    const nameWithoutHyphens = name.replace(/-/g, ' ');
    const formattedTypes = types.map(({ type }) => type);
    const pokemonImg = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;

    return {
        ...pokemon,
        id: paddedId,
        weight: weightToKg,
        imgSrc: pokemonImg,
        height: heightToMeter,
        types: formattedTypes,
        name: nameWithoutHyphens,
        stats: formatStats(stats),
    };
}

function formatStats(stats) {
    // create well structured object from stats array for easier usage
    const formattedStats = Object.fromEntries(
        stats.map(({ stat, base_stat }) => [stat.name, base_stat])
    );

    const totalStats = stats.reduce((total, { base_stat }) => {
        return total + base_stat;
    }, 0);
    
    return {
        ...formattedStats,
        total: totalStats
    };
}
