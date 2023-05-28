import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import { getTypeIconSrc } from '../../../utils/pokemon-helper';
import DataRow from '../DataRow';

const About = () => {
    const { currentPokemon } = usePokemonModal();
    const data = [
        {
            name: 'height',
            value: currentPokemon.height
        },
        {
            name: 'weight',
            value: currentPokemon.weight
        },
    ];
    
    return (
        <>
            <h4>Pokédex Data</h4>
                
            <table>
                <tbody>
                    {
                        data.map(row => 
                            <DataRow key={ row.name } catergory={ row.name } value={ row.value }/>
                        )
                    }

                    <tr>
                        <td className='category'>Abilities</td>
                        <td>
                            <ol>
                                {
                                    currentPokemon.abilities.map(({ ability, is_hidden }) => {
                                        if(is_hidden) {
                                            return <small key={ ability.name }>{ ability.name } (hidden ability)</small>
                                        }
                                        
                                        return <li key={ ability.name }>{ ability.name}</li>
                                    })
                                }
                            </ol>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Types</td>
                        <td>
                            {
                                currentPokemon.types.map(({ name }) => {
                                    const typeImage = getTypeIconSrc(name);

                                    return <img key={ name } className={ name } src={ typeImage } alt={ name } />
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default About;