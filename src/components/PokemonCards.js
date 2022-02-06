import React from 'react';
import Card from './Card';
import { capitalizeName } from '../utils';
import { nanoid } from 'nanoid';

const PokemonCards = ({ pokemons, setIsOpen,setCurrentPokemon }) => {
    return (
        <div className="pokemons-container">
            {
                pokemons.map(pokemon => {
                    const avatarURL = pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other['official-artwork'].front_default;
                    const name = pokemon.name;
                    const types = pokemon.types;
                    const id = pokemon.id;

                    return <Card
                          setIsOpen={ setIsOpen }
                          pokemons={ pokemons }
                          setCurrentPokemon={setCurrentPokemon}
                          avatarURL={ avatarURL } 
                          name={ name } 
                          types={ types } 
                          key={ id }
                          id={ id }
                          />
                })
            }
        </div>
    );
};

export default PokemonCards;