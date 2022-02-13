import React, { useState } from 'react';
import PokemonCards from './components/PokemonCards';
import Form from './components/Form.js';
import { usePokemon } from './hooks/usePokemon';
import Modal from './components/Modal/Modal';
import './App.css'
import { useTypes as useTypes } from './hooks/useTypes';

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState( {} );
  const [type, setType] = useState( 'dark' );
  const [isOpen, setIsOpen] = useState( false );
  const {pokemons, isLoading} = usePokemon( type );

  // fix that
  const [ types, isTypesLoading ] = useTypes();
  
  return (
    <div className="wrapper">
      {
        isLoading || isTypesLoading
        ? <div className="loader">
            <div></div>
          </div>

        : 
          <> 
            <h1 className="logo-pokemon">Pokédex</h1>
            <Form types={ types } setType={ setType }/>
            <PokemonCards 
              pokemons={ pokemons }
              setIsOpen={ setIsOpen }
              setCurrentPokemon={ setCurrentPokemon }
            />
          </>
      }

      <Modal isOpen={isOpen} onClose={ () => { setIsOpen(false) } } currentPokemon={ currentPokemon }/>
    </div>
  );
};

export default App;