import React from 'react';

const Stats = ({ currentPokemon }) => {
    const hp        = currentPokemon.stats[0].base_stat;
    const attack    = currentPokemon.stats[1].base_stat;
    const defense   = currentPokemon.stats[2].base_stat;
    const spAttack  = currentPokemon.stats[3].base_stat;
    const spDefense = currentPokemon.stats[4].base_stat;
    const speed     = currentPokemon.stats[5].base_stat;
    
    const total     = hp + attack + defense + spAttack + spDefense + speed;

    return (
        <>
            <h4>Pokedex Data</h4>

            <table>
                <tbody>
                    <tr>
                        <td className='category'>HP</td>
                        <td className="stats-number">{ hp }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": hp + "%"}}></div>
                        </td>
                    </tr>
        
                    <tr>
                        <td className='category'>Attack</td>
                        <td className="stats-number">{ attack }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": attack + "%"}}></div>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Defense</td>
                        <td className="stats-number">{ defense }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": defense + "%"}}></div>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Sp. Atk</td>
                        <td className="stats-number">{ spAttack }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": spAttack + "%"}}></div>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Sp. Def</td>
                        <td className="stats-number">{ spDefense }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": spDefense + "%"}}></div>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Speed</td>
                        <td className="stats-number">{ speed }</td>
                        <td className="range-slide">
                            <div className="range-slide-fill" style={{"width": speed + "%"}}></div>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Total</td>
                        <td className="stats-number">{ total }</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Stats;