import React, { useEffect, useState } from 'react';

import './ShopPage.scss';
import { Route, withRouter } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../store/shop/shop.actions';
import CollectionPageContainer from '../Collection/CollectionContainer';

export const ShopPage = ({ match }) => {
    const dispatch = useDispatch();
    const [isFetchedCollections, setIsFetchedCollections] = useState(false);

    useEffect(() => {
        console.log('Calling effect');
        if (!isFetchedCollections) {
            setIsFetchedCollections(true);
            dispatch(fetchCollectionsStart());
        }
    }, [isFetchedCollections]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    );
}

export default withRouter(ShopPage);