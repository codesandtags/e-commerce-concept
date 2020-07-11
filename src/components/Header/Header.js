import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from '../../assets/images/logo-blue.png';

const Header = () => {

    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src={Logo}/>
                Cloting Center
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </header>
    );
}

export default Header;