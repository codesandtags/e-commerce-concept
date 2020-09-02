import React, { useEffect, useState } from 'react';

import './ShopPage.scss';
import { Route, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionPageContainer from '../Collection/CollectionContainer';
import CollectionsOverviewContainer
    from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import { fetchCollectionsStart } from '../../store/shop/shop.actions';

export const ShopPage = ({ match }) => {
    const dispatch = useDispatch();
    const [isFetchedCollections, setIsFetchedCollections] = useState(false);

    useEffect(() => {
        console.log('Calling effect');
        if (!isFetchedCollections) {
            setIsFetchedCollections(true);
            dispatch(fetchCollectionsStart());
        }
    }, [dispatch, isFetchedCollections]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    );
}

export default withRouter(ShopPage);