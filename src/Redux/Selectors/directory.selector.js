import { createSelector } from 'reselect';


const selectDirectory = state => state.directory;

export const selectAllDirectory = createSelector(
    [selectDirectory],
    (directory) => directory.directory
)