import React from 'react';
import ReactDom from 'react-dom';
import DataContainer from './DataContainer';

const Modal = ({ isOpen, onClose, currentPokemon }) => {
    if (!isOpen) return(null);

    const avatarURL = currentPokemon.sprites.other.dream_world.front_default || currentPokemon.sprites.other['official-artwork'].front_default;
    const name = currentPokemon.name;
    const types = currentPokemon.types;
    const id = currentPokemon.id;
    
    const padID = String(id).padStart(3, '0')
    const firstType = types[0].type.name;


    return ReactDom.createPortal(
            <>
                <div onClick={ onClose } className="overlay"></div>

                <div className={ `modal ${ firstType }` } data-content={ name }>
                    <div className="pokemon-intro">
                        <a onClick={ onClose } className="arrow-back"></a>

                        <div className="current-pokemon">
                            <img src={ avatarURL } alt="Pokemon-Image" />

                            <div>
                                <span className='id-number'>#{ padID }</span>
                                <span className="pokemon-name">{ name }</span>

                                <div className="types">
                                { 
                                    (types).map(type => {
                                        const typeName = type.type.name;
                                        const imageSRC = "./assets/img/" + typeName + ".svg";

                                        return <div key={ typeName } className={ typeName }>
                                                    <img src={ imageSRC } alt={ typeName } />
                                                    <span className="type-name">{ typeName }</span>
                                               </div>
                                    })
                                }
                                </div>
                            </div>
                        </div>

                    </div>

                    <DataContainer currentPokemon={ currentPokemon }/>

                </div>
            </>,
            document.getElementById('root')
    )
    
};

export default Modal;