import React from 'react';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.actions';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(item))} inverted>
                Add to cart
            </CustomButton>
        </div>
    );
}

export default CollectionItem;