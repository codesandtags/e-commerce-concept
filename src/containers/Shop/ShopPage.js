import React, { useState } from 'react';

import './ShopPage.scss';
import { SHOP_DATA } from '../../api/shop';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

export const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                collections
                    .map(collection => {
                    return (
                        <CollectionPreview
                            key={collection.id}
                            title={collection.title}
                            items={collection.items}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShopPage;