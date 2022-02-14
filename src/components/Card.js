import React from 'react';


const Card = ({ avatarURL, name, types, id, pokemons, setIsOpen, setCurrentPokemon }) => {   
    const padID = String(id).padStart(3, '0')
    const firstType = types[0].type.name;
    
    const renderTypes = () => {
        return (types).map(type => {
            const typeName = type.type.name;
            const imageSRC = "./assets/img/" + typeName + ".svg";
            
            return <div key={ typeName } className={ typeName }>
                        <img src={ imageSRC } alt={ typeName } />
                        <span className="type-name">{ typeName }</span>
                   </div>
        })
    }
    
    const PokemonCardClickHandler = (e) => {
        const targetPokemon = name;
        
        setCurrentPokemon( 
            pokemons.find(item => item.name === targetPokemon)
        );
        
        setIsOpen(true)
    }
    
    return (
        <div id={ name } className={ `pokemon-card ${firstType}` } onClick={ PokemonCardClickHandler }>
            <div>
                <span className="id-number">#{padID}</span>
                <span className="pokemon-name">{ name }</span>

                <div className="types">
                    {
                        renderTypes()
                    }
                </div>
            </div>
            <div className="pokeball-bg"></div>
            <img className="pokemon-image" src={ avatarURL } alt="pokemonImage" />
        </div>
    );
};

export default Card;