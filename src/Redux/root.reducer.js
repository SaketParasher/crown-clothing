
import { combineReducers } from 'redux';
import userReducer from './Reducers/user.reducer';
import cartReducer from './Reducers/cart.reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})