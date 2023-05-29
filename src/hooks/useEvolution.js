import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api-fetch";
import { normalizeEvolutionChain } from "../utils/pokemon-helper";

const useEvolution = (id) => {
    const { data } = useQuery({
        queryKey: ['chain', id],
        queryFn: async () => {
            try {
                const { evolution_chain } = await apiFetch(`/pokemon-species/${ id }/`);
    
                const res = await fetch(evolution_chain.url);
                const { chain } = await res.json();
    
                return normalizeEvolutionChain(chain);
            } catch (error) {
                if(error.status === 404) {
                    return [];
                }

                throw error;
            }
        },
    });

    return data;
};

export default useEvolution;
