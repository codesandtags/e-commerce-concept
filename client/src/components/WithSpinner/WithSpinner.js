import React from 'react';
import Spinner from '../Spinner/Spinner';

const WithSpinner = (WrappedComponent, props) => {
    const { isLoading, ...otherProps } = props;

    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;