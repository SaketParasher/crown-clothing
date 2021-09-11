import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectAllCollection = createSelector(
    [selectCollection],
    (collection) => collection.collection
)

export const getCollectionsArray = createSelector(
    [selectAllCollection],
    (collection) => Object.keys(collection).map(key => collection[key])
)

export const getCollectionFromId = collectionId => createSelector(
    [selectAllCollection],
    (collection) => collection[collectionId]
)