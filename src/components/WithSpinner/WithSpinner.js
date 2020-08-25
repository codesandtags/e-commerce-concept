import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => {
    debugger;
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;