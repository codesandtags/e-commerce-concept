import React from 'react';
import { withRouter } from 'react-router-dom';

import './CollectionsOverview.scss';
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../store/shop/shop.selector';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const CollectionsOverviewContainer = (props) => {
    const isLoading = !useSelector(selectIsCollectionsLoaded);

    return WithSpinner(CollectionsOverview, { isLoading, ...props });
}

export default withRouter(CollectionsOverviewContainer);