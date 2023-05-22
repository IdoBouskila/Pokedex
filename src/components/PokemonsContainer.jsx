import React from 'react';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';

const PokemonsContainer = ({ type }) => {
    const pokemons = usePokemons(type);
    
    return (
        <div className='pokemons-container'>
            { pokemons.map((pokemon) => <PokemonCard key={ pokemon.id } pokemon={ pokemon } />) }
        </div>
    );
};


export default PokemonsContainer;