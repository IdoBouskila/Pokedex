import './App.css';
import React, { Suspense, useState } from 'react';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';

function App() {
  const [type, setType] = useState('');

  return (
    <Suspense fallback={ <h1>Loading...</h1> }>
        <div className='wrapper'>
          <TypesBar toggleType={ setType }/>
          <PokemonsContainer type={ type } />
        </div>
    </Suspense>
  )
}

export default App
