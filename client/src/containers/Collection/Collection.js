import React from 'react';

import { useSelector } from 'react-redux';
import { selectCollection } from '../../store/shop/shop.selector';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import {
    CollectionItemsContainer,
    CollectionPageContainer,
    CollectionTitle
} from './CollectionStyles';

export const Collection = (props) => {
    const { title, items } = useSelector((state) => {
        return selectCollection(state, props.match.params.collectionId);
    });

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export default Collection;