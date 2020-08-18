import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from '../../assets/images/logo-blue.png';

import { auth } from '../../firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.actions';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        console.log('State => ', state);
        return state.user;
    });
    const onSignOut = async () => {
        await auth.signOut();
        dispatch(setCurrentUser(null));
    };

    const getSignInLink = () => {
        if (user.currentUser) {
            return (
                <div className="option" onClick={onSignOut}>SIGN OUT</div>
            );
        }

        return <Link className="option" to="/sign-in">SIGN IN</Link>;
    }

    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src={Logo} alt="Clothing Center"/>
                Clothing Center
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {getSignInLink()}
            </div>
        </header>
    );
}

export default Header;