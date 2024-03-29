import React from 'react';

import Logo from '../../assets/images/logo-blue.png';

import { auth } from '../../firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.actions';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../store/cart/cart.selector';
import {
    AppLogo,
    HeaderContainer,
    LogoContainer,
    LogoText,
    OptionLink,
    OptionsContainer
} from './Header.styles';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user;
    });
    const cartHidden = useSelector(selectCartHidden);

    const onSignOut = async () => {
        await auth.signOut();
        dispatch(signOutStart());
    };

    const getSignInLink = () => {
        if (user.currentUser) {
            return (
                <OptionLink as='div' onClick={onSignOut}>SIGN OUT</OptionLink>
            );
        }

        return <OptionLink to="/sign-in">SIGN IN</OptionLink>;
    }

    const getShoppingIcon = () => {
        return <CartIcon/>
    }

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <AppLogo src={Logo} alt="Clothing Center"/>
                <LogoText>Clothing Center</LogoText>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {getSignInLink()}
                {getShoppingIcon()}
            </OptionsContainer>
            {!cartHidden ? <CartDropdown/> : null}
        </HeaderContainer>
    );
}

export default Header;