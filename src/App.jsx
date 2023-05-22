import './App.css';
import React, { Suspense, useState } from 'react';
import TypesBar from './components/TypesBar';

function App() {
  const [type, setType] = useState('');

  return (
    <Suspense fallback={ <h1>Loading...</h1> }>
        <div className='wrapper'>
          <TypesBar toggleType={ setType }/>
        </div>
    </Suspense>
  )
}

export default App
