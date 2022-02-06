import { useEffect, useState } from "react";
import { pokemonsNamesByTypes } from "../api";

export const usePokemon = (type) => {
    const [pokemons, setPokemons] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )


    // TODO: Fix Optimization
    useEffect((prev) => {
        setPokemons([]);
        setIsLoading(true);
        let tmp = [];

        pokemonsNamesByTypes(type)
        .then(async data => {
            await Promise.all( (data.pokemon).map(item =>
                fetch(item.pokemon.url)
                .then(response => response.json())
                .then(data => {
                    tmp.push( data );
                })
            ) );

            setPokemons( tmp );
            setIsLoading(false);

        })

    }, [type]);
    

    return {
        pokemons,
        isLoading,
    };
    
}

