import actionTypes from '../action.types';
import { addCartItemUtil, decreaseItemFromCart } from './cart.util';

const INITIAL_STATE = {
    dropdownHidden: true,
    cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                dropdownHidden: !state.dropdownHidden
            }

        case actionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cart: addCartItemUtil(state.cart, action.payload)
            }

        case actionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        case actionTypes.DECREASE_ITEM_FROM_CART:
            return {
                ...state,
                cart: decreaseItemFromCart(state.cart, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;