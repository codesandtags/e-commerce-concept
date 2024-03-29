import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';
import {
    BackgroundImageContainer,
    ContentContainer, ContentSubtitle,
    ContentTitle,
    MenuItemContainer
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer
            size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);