import React from 'react';
import { withRouter } from 'react-router-dom';

import './CollectionOverview.scss';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../store/shop/shop.selector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ title, items }) => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default withRouter(CollectionOverview);