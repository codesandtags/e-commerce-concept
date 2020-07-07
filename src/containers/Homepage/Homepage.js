import React from 'react';

import './Homepage.scss';

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>JACKETS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>SHOES</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>WOMENS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>MENS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage;