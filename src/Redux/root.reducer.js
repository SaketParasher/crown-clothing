
import { combineReducers } from 'redux';
import userReducer from './Reducers/user.reducer';


export default combineReducers({
    user: userReducer
})