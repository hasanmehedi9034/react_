import './App.css';
import React from 'react';
import Clock from './components/Clock';
import ClockList from './components/ClockList';

function App() {
    const quantities = [1, 2, 3];

    return (
        <ClockList quantity={quantities} />
        // <Clock />
    );
}




export default App;
