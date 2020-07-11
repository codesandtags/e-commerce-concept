import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';
import Header from '../../components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
