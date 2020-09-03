import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../global.styles';

import { auth } from '../../firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession, setCurrentUser } from '../../store/user/user.actions';
import Spinner from '../../components/Spinner/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('../Homepage/HomePage'));
const CheckoutPage = lazy(() => import('../Checkout/CheckoutPage'));
const ShopPage = lazy(() => import('../Shop/ShopPage'));
const SignInAndSignUp = lazy(() => import('../SingInAndSignUp/SignInAndSignUp'));

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user;
    });

    useEffect(() => {
        const authSubscription = auth.onAuthStateChanged(async userAuth => {
            dispatch(checkUserSession());
        });

        return () => {
            console.log('Doing unsubscribe....');
            authSubscription();
        }
    }, [setCurrentUser]);

    return (
        <HashRouter basename="/">
            <div className="App">
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner/>}>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/shop" component={ShopPage}/>
                            <Route exact path='/checkout' component={CheckoutPage}/>
                            <Route exact path="/sign-in" render={() => {
                                return (user.currentUser) ? <Redirect to="/"/> : <SignInAndSignUp/>
                            }}/>
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
