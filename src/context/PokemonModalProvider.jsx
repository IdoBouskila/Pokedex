import React, { createContext, useContext, useState } from 'react';

export const PokemonModalContext = createContext();

export const usePokemonModal = () => {
    return useContext(PokemonModalContext);
};

export const PokemonModalProvider = ({ children }) => {
    const [modal, setModal] = useState({ isOpen: false, pokemon: null });

    const value = {
        currentPokemon: modal.pokemon,
        openModal: (pokemon) => setModal({ isOpen: true, pokemon }),
        isModalOpen: modal.isOpen,
        closeModal: () => setModal((prev => ({ ...prev, isOpen: false }))),
    };

    return (
        <PokemonModalContext.Provider value={ value }>
            { children }
        </PokemonModalContext.Provider>
    );
};
