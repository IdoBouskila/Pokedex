import React, { createContext, useContext, useState } from 'react';

export const PokemonModalContext = createContext();

export const usePokemonModal = () => {
    return useContext(PokemonModalContext);
};

export const PokemonModalProvider = ({ children }) => {
    const [currentPokemon, setCurrentPokemon] = useState(null);

    const value = {
        currentPokemon,
        handleModalOpen: (pokemon) => setCurrentPokemon(pokemon),
        isModalOpen: !! currentPokemon,
        handleModalClose: () => setCurrentPokemon(null),
    }

    return (
        <PokemonModalContext.Provider value={ value }>
            { children }
        </PokemonModalContext.Provider>
    );
};
