import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from '../../assets/images/logo-blue.png';

import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {

    const onSignOut = async () => {
        await auth.signOut();
    };

    const getSignInLink = () => {
        if (currentUser) {
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