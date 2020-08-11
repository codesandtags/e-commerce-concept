import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';
import Header from '../../components/Header/Header';
import SignInAndSignUp from '../SingInAndSignUp/SignInAndSignUp';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/sign-in" component={SignInAndSignUp} />
            </Switch>
        </div>
    );
}

export default App;
