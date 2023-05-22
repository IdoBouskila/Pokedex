import React from 'react';
import useTypes from '../hooks/useTypes';

const TypesBar = ({ toggleType }) => {
    const types = useTypes(); 

    return (
        <nav className='types-bar'>
            {
                types.map(({ name}) => {
                    return (
                        <a
                            key={ name }
                            className={ name }
                            onClick={ () => toggleType(name) }
                        >
                            <img src={ `./assets/images/navbar/${ name }.svg` } alt={ name } />
                        </a>
                    );
                })
            }
            </nav>
    );
};

export default TypesBar;