import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './CartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../store/cart/cart.actions';

const CartIcon = () => {
    const dispatch = useDispatch();

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;