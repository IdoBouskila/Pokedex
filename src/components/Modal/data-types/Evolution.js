import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvolution } from '../../../api';


async function normalizeEvolutionsData( evolutionChain ) {
    const { chain } = evolutionChain;
    const { evolves_to, species } = chain;


    // if(evolves_to.length === 0) {
    //     return;
    // }

    // const evolution = [
    //     {
    //         currentOrNextEvolution: {
    //             name: species.name,
    //             level: evolves_to.evolution_details.min_level,
    //             imageSRC: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${2}.svg`,
    //         }
    //     }
    // ];

    // evolutionArray.push(evolution);

    // normalizeEvolutionsData()
}


const data = {
    evolves_to: [
        {
            species: {
                level: 1,
                name: 'next-evolution-1',
            },
            evolves_to: [
                {
                    species: {
                        level: 2,
                        name: 'next-evolution-2',
                    },
                    evolves_to: [],
                },
            ],
        },
        {
            species: {
                level: 3,
                name: 'next-evolution-3',
            },
            evolves_to: [],
        },
     
    ],
    species: {
        level: 10,
        name: 'current-evolution',
    },
};

const Evolution = ({ id }) => {
    const [evolutions, setEvolutions] = useState( [] );

    useEffect( async () => {
        const data = await fetchEvolution(id);
        console.log( data );

        const normalized = normalizeEvolutionsData( data );


        setEvolutions( normalized );
    }, [] );

    // console.log(evolutionArray);

    return (
        <>
            {/* {
                evolutions.map(evolution => {
                    <div className="evolution-container">
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
                })
            } */}
        </>
    );
};

export default Evolution;