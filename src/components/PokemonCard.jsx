import React from 'react';
import { getPokemonImageSrc } from '../utils/pokemon-card';

const PokemonCard = ({ pokemon }) => {
    const { id, name, types, sprites } = pokemon;

    const PokemonImageSrc = getPokemonImageSrc(sprites);
    const paddedId = String(id).padStart(3, '0');
    const nameWithoutHyphens = name.replace(/-/g, ' ');

    return (
        <div className={ `pokemon-card ${ types[0].type.name }` }>
            <div>
                <span className='id-number'>{ '#' + paddedId }</span>
                <span className='pokemon-name'>{ nameWithoutHyphens }</span>

                <div className='types'>
                    {
                        types.map(({ type }) => {
                            const { name } = type;

                            return (
                                <div key={ name } className={ name }>
                                    <img src={ `./assets/images/navbar/${ name }.svg` } alt={ name } />
                                    <span className='type-name'>{ name }</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='pokeball-bg'></div>
            <img className='pokemon-image' src={ PokemonImageSrc } alt='pokemon-image' />
        </div>
    );
};

export default PokemonCard;