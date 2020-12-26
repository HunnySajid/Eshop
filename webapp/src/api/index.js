import { PRODUCTS_URL } from './constants';
import { get } from './utils';

export async function getProducts(params = {}) {
    params = { limit: 20, ...params };
    return get(PRODUCTS_URL, params).then((res) => res.data);
}

export async function getProductDetail(params = {}) {
    const { productId, ...restParams } = params;
    return get(`${PRODUCTS_URL}/${productId}`, restParams).then((res) => res.data);
}