import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';
import Header from '../../components/Header/Header';
import SignInAndSignUp from '../SingInAndSignUp/SignInAndSignUp';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.actions';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        console.log('State => ', state);
        return state.user;
    });

    useEffect(() => {
        console.log('Calling auth...');
        const authSubscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                console.log('User logged ', userAuth);
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    dispatch(setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }))
                });
            }

            setCurrentUser(userAuth)
        });

        return () => {
            console.log('Doing unsubscribe....');
            authSubscription();
        }
    }, [setCurrentUser]);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route exact path="/sign-in" render={() => {
                    return (user.currentUser) ? <Redirect to="/" /> : <SignInAndSignUp />
                }}/>
            </Switch>
        </div>
    );
}

export default App;
