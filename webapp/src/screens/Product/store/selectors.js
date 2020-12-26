import { createSelector } from 'reselect';

const productState = (state) => state.product || null;

export const getProductId = createSelector(
    productState,
    (product) => product.productId,
);

export const getProduct = createSelector(
    productState,
    (product) => product.product,
);

export const getProductLoading = createSelector(
    productState,
    (product) => product.loading,
);

export const getProductError = createSelector(
    productState,
    (product) => product.error,
);