import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import React from 'react';
import { render } from '@testing-library/react';
import ThemeContext from './contexts/ThemeContext';

export default class App extends React.Component {
    state = {
        theme: 'orange'
    }

    render() {
        const {theme} = this.state;

        return (
            <div className="App">
                <Counter>
                    {
                        (counter, incrementCount) => (
                            <ClickCounter
                                counter={counter}
                                incrementCount={incrementCount}
                            />
                        )
                    }
                </Counter>

                <ThemeContext.Provider value={{theme: theme}}>
                    <Section/>
                </ThemeContext.Provider>
                
            </div>
        )
    }
}
