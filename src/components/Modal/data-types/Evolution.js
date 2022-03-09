import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvolution } from '../../../api';


function normalizeEvolutionsData( evolutionChain ) {
    if(!evolutionChain.evolves_to.length) {
        return [];
    }
    
    const { evolves_to, species } = evolutionChain;

    const evolutions = evolves_to.reduce( ( all, evolution ) => {
        return [ ...all, {
            level: evolution.evolution_details[0].min_level,
            currentEvolution: {
                name: species.name,
                imageSRC: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${species.url.split("species/").pop().slice(0, -1)}.svg`,
            },
            nextEvolution: {
                name: evolution.species.name,
                imageSRC: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.species.url.split("species/").pop().slice(0, -1)}.svg`,
            }
        }, ...normalizeEvolutionsData(evolution) ];
    }, [] );

    return evolutions;
}

const Evolution = ({ id }) => {
    const [evolutions, setEvolutions] = useState([]);

    useEffect(async () => {
        const data = await fetchEvolution(id);
        const normalized = normalizeEvolutionsData(data.chain);
        
        setEvolutions(normalized);
    }, []);

    return (
        <>
            <div className="evolution-tab">
                {
                    evolutions.map(evolution => (
                        <div key={ evolution.currentEvolution.name + '-' + evolution.nextEvolution.name} className="evolution-container">
                            <div className="current-evolution">
                                <div className="poke-img">
                                    <div className="pokeball-bg"></div>
                                    <img src={ evolution.currentEvolution.imageSRC } alt="" />
                                </div>
                                
                                <span>{ evolution.currentEvolution.name }</span>
                            </div>    
                            
                            <div className="level-container">
                                <span className="evolution-level">{ evolution.level }</span>
                                <span className="arrow"></span>
                            </div>

                            <div className="next-evolution">
                                <div className="poke-img">
                                    <div className="pokeball-bg"></div>
                                    <img src={ evolution.nextEvolution.imageSRC } alt="" />
                                </div>

                                <span>{ evolution.nextEvolution.name }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Evolution;