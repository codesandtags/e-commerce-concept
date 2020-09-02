import React from 'react';

import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartTotal } from '../../store/cart/cart.selector';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import {
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './Checkout.styles';

export const CheckoutPage = () => {
    const cartItems = useSelector((state) => {
        return state.cart.cartItems;
    });
    const total = useSelector(selectCartTotal);

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br/>
                <br/>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                <br/>4256 2391 3373 3177 - Exp: 01/22 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

export default CheckoutPage;