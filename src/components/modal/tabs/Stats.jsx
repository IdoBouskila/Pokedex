import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import DataRow from '../DataRow';
import { formatStats } from '../../../utils/pokemon-helper';

const Stats = () => {
    const { currentPokemon } = usePokemonModal();
    const stats = formatStats(currentPokemon.stats)
    
    return (
        <>
            <h4>Base Stats</h4>

            <table>
                <tbody>
                    {
                        stats.map(stat => {
                            const { name, value, max } = stat;

                            return <DataRow key={ name } catergory={ name } value={ value } max={ max } />
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default Stats;