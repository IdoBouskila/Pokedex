import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api-fetch";

const useTypes = () => {
    const { data } = useQuery({
        queryKey: ['types'],
        queryFn: async () => {
            const { results } = await apiFetch('/type');

            // Return only necessary types
            return results.filter(({ name }) => name !== 'unknown' && name !== 'shadow');
        }
    });

    return data
};

export default useTypes;
