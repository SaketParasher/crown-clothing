
import { createSelector } from 'reselect';

// INPUT SELECTOR
const selectCart = state => state.cart;

// This is a memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cart
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
)