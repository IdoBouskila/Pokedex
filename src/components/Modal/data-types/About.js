import React from 'react';

const About = ({ currentPokemon }) => {
    const heightDecimeter = currentPokemon.height;
    const weightHectogram = currentPokemon.weight;
    const abilities       = currentPokemon.abilities;
    const types           = currentPokemon.types;
    
    const weightKG = (weight) => {
        return ( weight / 10 ) + 'kg'
    }

    const heightMeter = (height) => {
        return ( height / 10 ) + 'm'
    }

    const renderAbilities = () => {
        return abilities.map(ability => {
            if(ability.is_hidden){
                return <small key={ ability.ability.name }>{ ability.ability.name } (hidden ability)</small>
            }
            
            return <li key={ ability.ability.name }>{ ability.ability.name}</li>
        })
    }

    const renderTypes = () => {
        return (types).map(type => {
            const typeName = type.type.name;
            const imageSRC = "./assets/img/" + typeName + ".svg";
            
            return <img key={ typeName } className={ typeName } src={ imageSRC } alt={ typeName } />
        })
    }

    return (
        <>
            <h4>Base Stats</h4>
                
            <table>
                <tbody>
                    <tr>
                        <td className='category'>Height</td>
                        <td>{ heightMeter(heightDecimeter) }</td>
                    </tr>

                    <tr>
                        <td className='category'>Weight</td>
                        <td>{ weightKG(weightHectogram) }</td>
                    </tr>

                    <tr>
                        <td className='category'>Abilities</td>
                        <td>
                            <ol>{ renderAbilities() }</ol>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Types</td>
                        <td>{ renderTypes() }</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default About;