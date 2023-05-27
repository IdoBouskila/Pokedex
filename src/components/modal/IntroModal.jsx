import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';
import { getTypeIconSrc } from '../../utils/pokemon-helper';

const IntroModal = () => {
    const { currentPokemon, handleModalClose } = usePokemonModal?.() || {};

    return (
        <div className='pokemon-intro'>
            <a
                className='arrow-back'
                onClick={ () => handleModalClose }
            ></a>

            <div className='current-pokemon'>
                <img src={ currentPokemon?.imgSrc } alt='Pokemon-Image' />

                <div>
                    <span className='id-number'>#{ currentPokemon?.id }</span>
                    <span className='pokemon-name'>{ currentPokemon?.name }</span>

                    <div className='types'>
                        {
                            currentPokemon?.types.map(({ name }) => {
                                const typeImg = getTypeIconSrc(name)

                                return (
                                    <div key={ name } className={ name }>
                                        <img src={ typeImg } alt={ name } />
                                        <span className='type-name'>{ name }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroModal;
