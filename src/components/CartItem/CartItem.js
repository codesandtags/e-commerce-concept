import React from 'react';


import './CartItem.scss';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
        {quantity} x ${price}
      </span>
            </div>
        </div>
    );
}

export default CartItem;