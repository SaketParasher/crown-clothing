import actionTypes from '../action.types';

export const toggleCartDropdown = () => {
    return {
        type: actionTypes.TOGGLE_CART_DROPDOWN
    }
}

export const addCartItem = (item) => {
    return {
        type: actionTypes.ADD_CART_ITEM,
        payload: item
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        payload: id
    }
}

export const decreaseItemFromCart = (item) => {
    return {
        type: actionTypes.DECREASE_ITEM_FROM_CART,
        payload: item
    }
}