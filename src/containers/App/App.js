import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';
import Header from '../../components/Header/Header';
import SignInAndSignUp from '../SingInAndSignUp/SignInAndSignUp';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

function App() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log('Calling auth...');
        const authSubscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                console.log('User logged ', userAuth);
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
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
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/sign-in" component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
