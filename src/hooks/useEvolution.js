import React from 'react';
import { useState, useEffect } from 'react';
import { fetchEvolution } from "../api";
import { normalizeEvolutionsData } from "../components/Modal/data-types/Evolution.js"

function useEvolution(id) {
    const [evolutions, setEvolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(async () => {
        const data = await fetchEvolution(id);
        const normalized = normalizeEvolutionsData(data.chain);
        setEvolutions(normalized);
        setIsLoading(false);
    }, []);
    
    return {
        isLoading,
        evolutions,
    }
}

export default useEvolution;