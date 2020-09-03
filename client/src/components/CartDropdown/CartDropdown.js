import React from 'react';

import './CartDropdown.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../store/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../store/cart/cart.selector';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({history}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

export default withRouter(CartDropdown);