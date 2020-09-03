import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './CartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../store/cart/cart.actions';
import { selectCartItemsCount } from '../../store/cart/cart.selector';

const CartIcon = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartItemsCount);

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

export default CartIcon;