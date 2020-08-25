import React, { useEffect } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import ShopPage from '../Shop/ShopPage';
import HomePage from '../Homepage/HomePage';
import Header from '../../components/Header/Header';
import SignInAndSignUp from '../SingInAndSignUp/SignInAndSignUp';
import { CheckoutPage } from '../Checkout/CheckoutPage';

import {
    addCollectionAndDocuments,
    auth,
    createUserProfileDocument
} from '../../firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.actions';
import { selectCollectionsForPreview } from '../../store/shop/shop.selector';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user;
    });
    const collection = useSelector(selectCollectionsForPreview);

    useEffect(() => {
        const authSubscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    dispatch(setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }), [setCurrentUser])
                });
            }

            setCurrentUser(userAuth);

            // console.log('Collections: ', collection);
            // addCollectionAndDocuments('collections', collection);
        });

        return () => {
            console.log('Doing unsubscribe....');
            authSubscription();
        }
    }, [setCurrentUser]);

    return (
        <HashRouter basename="/">
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path="/sign-in" render={() => {
                        return (user.currentUser) ? <Redirect to="/"/> : <SignInAndSignUp/>
                    }}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
