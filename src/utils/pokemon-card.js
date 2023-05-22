export const getPokemonImageSrc = (sprites) => {
    return sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;
}