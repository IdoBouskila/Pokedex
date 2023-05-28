import React, { Suspense, useState } from 'react';
import Evolution from './tabs/Evolution';
import About from './tabs/About';
import Stats from './tabs/Stats';

const TabsContainer = () => {
    const tabsButtons = [
        { id: 'About', component: <About /> },
        { id: 'Stats', component: <Stats /> },
        { id: 'Evolution', component: <Evolution /> }
    ];

    const [currentTab, setCurrentTab] = useState(tabsButtons[0]);

    return (
        <>
            <nav>
                {
                    tabsButtons.map(({ id }, index) => (
                        <button
                            key={ id }
                            className={ id === currentTab.id ? 'active' : null }
                            onClick={ () => setCurrentTab((tabsButtons[index])) }
                        >
                            { id }
                        </button>
                    ))
                }
            </nav>
            
            <div className='data-container'>
                <Suspense fallback={<h1>Loading...</h1>}>
                    { currentTab.component }
                </Suspense>
            </div>
        </>
    );
};

export default TabsContainer;