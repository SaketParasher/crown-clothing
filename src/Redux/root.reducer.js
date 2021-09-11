
import { combineReducers } from 'redux';

import userReducer from './Reducers/user.reducer';
import cartReducer from './Reducers/cart.reducer';
import directoryReducer from './Reducers/directory.reducer'
import collectionReducer from './Reducers/collection.reducer';

import { persistReducer } from 'redux-persist';
// importing storage means we want to use localStorage. to use session storage we need to import sessionStorage.
import storage from 'redux-persist/lib/storage';

// persistConfig tells redux to store which slice of state in our case cart slice
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collection: collectionReducer
});

export default persistReducer(persistConfig, rootReducer);