import React, { useState } from 'react';

import './CheckoutPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartTotal } from '../../store/cart/cart.selector';

export const CheckoutPage = () => {
    const cartItems = useSelector((state) => {
        return state.cart.cartItems;
    });
    const dispatch = useDispatch();
    const total = useSelector(selectCartTotal);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

export default CheckoutPage;