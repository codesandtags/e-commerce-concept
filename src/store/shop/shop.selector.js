export const selectCollections = state => {
    return state.shop.collections;
}

export const selectCollectionsForPreview = state => {
    const collections = selectCollections(state);

    return Object.keys(collections).map(key => collections[key]);
}

export const selectCollection = (state, collectionUrlParam) => {
    return selectCollections(state)[collectionUrlParam]
};