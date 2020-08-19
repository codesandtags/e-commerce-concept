import React from 'react';

import './ShopPage.scss';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../store/shop/shop.selector';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

export const Collection = (props) => {
    const { title, items } = useSelector((state) => {
        return selectCollection(state, props.match.params.collectionId);
    });

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Collection;