import React from 'react';
import { useState } from 'react';
import Stats from './data-types/Stats';
import Evolution from './data-types/Evolution';
import About from './data-types/About';
import { SettingsSystemDaydreamRounded } from '@material-ui/icons';

const DataContainer = ({ currentPokemon }) => {
    const [dataType, setDataType] = useState('About');
    const [buttons, setButtons] = useState([
        {
            id: 'About'
        },
        
        {
            id: 'Stats'
        },
        
        {
            id: 'Evolution'
        },
    ]);

    const renderData = () => {
        switch (dataType) {
            case 'About':
                return <About currentPokemon={ currentPokemon }/>

            case 'Stats':
                return <Stats currentPokemon={ currentPokemon }/>;
                
            case 'Evolution':
                return <Evolution currentPokemon={ currentPokemon }/>;

            default:
                return null;
        }
    }

    const toggleClass = (id) => {
        if(dataType === id) {
            return 'active';
        }

        return null;
    }

    const renderButtons = () => {
        return buttons.map(button => {
            return <button 
                    key={ button.id } 
                    className={ toggleClass(button.id) }
                    onClick={ (e) => setDataType(e.target.innerText) }>{ button.id }</button>
        })
    }

    return (
        <>
            <nav>
                {
                    renderButtons()
                }
            </nav>

            <div className="data-container">
                {
                    renderData()
                }
            </div>
        </>
    );
};

export default DataContainer;