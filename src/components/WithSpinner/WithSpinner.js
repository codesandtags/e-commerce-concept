import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = (WrappedComponent, props) => {
    const { isLoading, ...otherProps } = props;

    const Spinner = isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );

    return Spinner;
};

export default WithSpinner;