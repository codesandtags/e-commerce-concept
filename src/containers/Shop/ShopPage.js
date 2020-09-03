import React, { lazy, Suspense, useEffect } from 'react';

import { Route, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../store/shop/shop.actions';
import { ShopPageContainer } from './ShopPage.styles';
import Spinner from '../../components/Spinner/Spinner';

const CollectionPageContainer = lazy(() => import('../Collection/CollectionContainer'))
const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverviewContainer'));

export const ShopPage = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <div className="shop-page">
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}/>
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionPageContainer}/>
                </div>
            </Suspense>
        </ShopPageContainer>
    );
}

export default withRouter(ShopPage);