import React from 'react';

import './App.scss';

import Homepage from '../Homepage/Homepage';
import { Route } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route path="/hats" component={HatsPage} />
        </div>
    );
}

export default App;
