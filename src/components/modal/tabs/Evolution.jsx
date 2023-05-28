import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import useEvolution from '../../../hooks/useEvolution';

const Evolution = () => {
    const { currentPokemon } = usePokemonModal();
    const chain = useEvolution(currentPokemon.id);
    
    return (
        <>
                {
                    ! chain.length ?
                        <strong className='error-msg'>This Pokémon doesn't Evolve</strong>
                    :
                    chain.map((evolution) => {
                        const { current, next } = evolution;

                        return (
                            <div className='evolution-container' key={ next.name }>
                                <div>
                                    <div className='poke-img'>
                                        <div className='pokeball-bg'></div>

                                        <img src={ current.image } alt='pokemon-image' />
                                    </div>

                                    <span>{ current.name }</span>
                                </div>

                                <span className='arrow'></span>

                                <div>
                                    <div className='poke-img'>
                                        <div className='pokeball-bg'></div>

                                        <img src={ next.image } alt='pokemon-image' />
                                    </div>

                                    <span>{ next.name }</span>
                                </div>
                            </div>
                        );
                    })
                }
            </>
    );
};

export default Evolution;
