import memoize from 'lodash.memoize';

export const selectCollections = memoize(state => {
    console.log('State in Shop => ', state);

    return state.shop.collections;
});

export const selectCollectionsForPreview = state => {
    const collections = selectCollections(state);

    return collections ? Object.keys(collections).map(key => collections[key]) : [];
}

export const selectCollection = (state, collectionUrlParam) => {
    return selectCollections(state) ? selectCollections(state)[collectionUrlParam] : null;
};

export const selectIsCollectionFetching = state => {
    return state.shop.isFetching;
};

export const selectIsCollectionsLoaded = state => {
    return !!state.shop.collections;
};