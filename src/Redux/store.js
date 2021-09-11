
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// persist store is used to store redux state in browser storage
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

// to persist the store we need to wrap the store in persistStore
export const persistor = persistStore(store);

//export default { store, persistor };