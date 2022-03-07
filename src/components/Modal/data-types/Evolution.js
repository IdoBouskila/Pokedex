import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvolution } from '../../../api';


function normalizeEvolutionsData( evolutionChain ) {
    if(!evolutionChain.evolves_to.length) {
        return [];
    }
    
    const { evolves_to, species, evolution_details } = evolutionChain;
    const evolutions = evolves_to.reduce( ( all, evolution ) => {
        return [ ...all, {
            level: evolution.evolution_details[0].min_level,
            currentEvolution: {
                name: species.name,
                imageSRC: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${2}.svg`,
            },
            nextEvolution: {
                name: evolution.species.name,
                imageSRC: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${2}.svg`,
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

        console.log(normalized);
    }, []);

    return (
        <>
            {

                evolutions.map(evolution => (
                    <div key={ evolution.currentEvolution.name + '-' + evolution.nextEvolution.name} className="evolution-container">
                        <div className="current-evolution">
                            <img src={ evolution.currentEvolution.imageSRC } alt="" />
                            <span>{ evolution.currentEvolution.name }</span>
                        </div>    
                        
                        <span className="evolution-level">{ evolution.level }</span>

                        <div className="next-evolution">
                            <img src={ evolution.nextEvolution.imageSRC } alt="" />
                            <span>{ evolution.nextEvolution.name }</span>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Evolution;