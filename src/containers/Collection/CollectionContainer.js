import { compose } from 'redux';
import CollectionPage from './Collection';
import { connect, useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../store/shop/shop.selector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionPageContainer = () => {
    const isLoading = !useSelector(selectIsCollectionsLoaded);
    debugger;

    return compose(
        WithSpinner
    )(CollectionPage);
};

export default CollectionPageContainer;