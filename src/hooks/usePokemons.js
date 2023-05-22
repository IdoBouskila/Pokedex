import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api-fetch";

const usePokemons = (type) => {
    const { data } = useQuery({
        queryKey: ['pokemons', type],
        queryFn: async () => {
            const { pokemon: pokemonList } = await apiFetch(`/type/${ type }`);
            
            const pokemons = await Promise.all(
                pokemonList.map(async ({ pokemon }) => {
                    const res = await fetch(pokemon.url);
                    return res.json();
                })
            );

            return pokemons;
        }
    });

    return data;
};

export default usePokemons;