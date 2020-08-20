import memoize from 'lodash.memoize';

export const selectCollections = memoize(state => {
    console.log('State in Shop => ', state);

    return state.shop.collections;
});

export const selectCollectionsForPreview = state => {
    const collections = selectCollections(state);

    return Object.keys(collections).map(key => collections[key]);
}

export const selectCollection = (state, collectionUrlParam) => {
    return selectCollections(state)[collectionUrlParam]
};