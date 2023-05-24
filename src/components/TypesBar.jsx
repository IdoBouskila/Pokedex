import React from 'react';
import useTypes from '../hooks/useTypes';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const TypesBar = ({ toggleType }) => {
    const types = useTypes(); 

    return (
        <nav className='types-bar'>
            {
                types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                        <a
                            key={ name }
                            className={ name }
                            onClick={ () => toggleType(name) }
                        >
                            <img src={ typeImg } alt={ name } />
                        </a>
                    );
                })
            }
            </nav>
    );
};

export default TypesBar;