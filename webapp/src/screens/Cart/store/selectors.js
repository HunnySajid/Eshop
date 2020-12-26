import { createSelector } from 'reselect';

const cartState = (state) => state.cart || null;

export const getCartItems = createSelector(
    cartState,
    (cart) => cart.cartItems,
);
