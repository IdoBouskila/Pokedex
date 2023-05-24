import React from 'react';
import { getPokemonImageSrc } from '../utils/pokemon-card';

const PokemonCard = ({ pokemon, pokemon: { id, name, types, imgSrc } }) => {

    return (
        <div
            className={ `pokemon-card ${ types[0].name }` }
        >
            <div>
                <span className='id-number'>{ '#' + id }</span>
                <span className='pokemon-name'>{ name }</span>

                <div className='types'>
                    {
                        types.map(({ name }) => {
                            const typeImg = getTypeIconSrc(name);
                            
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
            <img className='pokemon-image' src={ imgSrc } alt='pokemon-image' />
        </div>
    );
};

export default PokemonCard;