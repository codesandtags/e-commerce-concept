import React, { useState } from 'react';

import './CheckoutPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartTotal } from '../../store/cart/cart.selector';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

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
            <StripeCheckoutButton price={total} />
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                <br />4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                <br />4256 2391 3373 3177 - Exp: 01/22 - CVV: 123
            </div>
        </div>
    )
}

export default CheckoutPage;