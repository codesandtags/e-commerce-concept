import React from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.actions';
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer,
    PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(addItem(item))} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
}

export default CollectionItem;