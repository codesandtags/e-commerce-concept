import React from 'react';

import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePage.styles';

export const HomePage = () => {
    return (
        <div className={HomePageContainer}>
            <Directory/>
        </div>
    )
}

export default HomePage;