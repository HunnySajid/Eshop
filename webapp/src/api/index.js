import {
    LOGIN_URL,
    SIGNUP_URL,
    PRODUCTS_URL,
    USER_PROFILE_URL
} from './constants';
import { get, post, put } from './utils';

export async function login(params = {}) {
    const { email, password } = params;
    return post(LOGIN_URL, { email, password }).then((res) => res.data);
}

export async function signup(params = {}) {
    const { name, email, password } = params;
    return post(SIGNUP_URL, { name, email, password }).then((res) => res.data);
}

export async function getProfile() {
    return get(USER_PROFILE_URL).then((res) => res.data);
}

export async function updateProfile(params = {}) {
    return put(USER_PROFILE_URL, params).then((res) => res.data);
}

export async function getProducts(params = {}) {
    params = { limit: 20, ...params };
    return get(PRODUCTS_URL, params).then((res) => res.data);
}

export async function getProductDetail(params = {}) {
    const { productId, ...restParams } = params;
    return get(`${PRODUCTS_URL}/${productId}`, restParams).then((res) => res.data);
}
