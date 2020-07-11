import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
