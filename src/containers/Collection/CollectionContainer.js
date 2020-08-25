import { compose } from 'redux';
import CollectionPage from './Collection';
import { connect, useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../store/shop/shop.selector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { withRouter } from 'react-router-dom';

const CollectionPageContainer = (props) => {
    const isLoading = !useSelector(selectIsCollectionsLoaded);

    return WithSpinner(CollectionPage, { isLoading, ...props });
};

export default withRouter(CollectionPageContainer);