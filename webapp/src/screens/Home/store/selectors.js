import { createSelector } from 'reselect';

const productsState = (state) => state.products || null;

export const getProducts = createSelector(
    productsState,
    (products) => products.products,
);

export const getProductsLoading = createSelector(
    productsState,
    (products) => products.loading,
);

export const getProductsError = createSelector(
    productsState,
    (products) => products.error,
);