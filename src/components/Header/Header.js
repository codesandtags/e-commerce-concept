import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from '../../assets/images/logo-blue.png';

const Header = () => {

    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src={Logo} alt="Clothing Center"/>
                Clothing Center
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <Link className="option" to="/sign-in">SIGN IN</Link>
            </div>
        </header>
    );
}

export default Header;