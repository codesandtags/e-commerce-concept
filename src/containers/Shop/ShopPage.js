import React from 'react';

import './ShopPage.scss';
import { Route, withRouter } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

export const ShopPage = ({match}) => {
    console.log('Match => ', match);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default withRouter(ShopPage);