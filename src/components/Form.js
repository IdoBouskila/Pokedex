import { TapAndPlayTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const Form = ({ types, setType }) => {
    return (
        <>
            <nav className="types-bar">
                {
                    types.map(type => {
                        const typeName = type.name;
                        const imageSRC = "./assets/img/" + typeName + ".svg";
                        
                        // won't create type buttons for those non relevance
                        if(['shadow', 'unknown'].includes(typeName)) {
                            return null;
                        }

                        return <a key={ typeName } className={ typeName } onClick={ () => setType(typeName) }>
                            <img src={ imageSRC } alt={ typeName } />
                        </a>
                    })
                }
            </nav>
        </>
    );
};

export default Form;