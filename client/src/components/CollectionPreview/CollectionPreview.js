import React from 'react';
import { withRouter } from 'react-router-dom';

import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 3)
                        .map((item) => {
                            return (
                                <CollectionItem key={item.id} item={item} />
                            )
                        })
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);