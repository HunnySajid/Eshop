import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_REQUEST
} from './constants';

const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

const getProductsFailure = (error) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export {
    getProductsRequest,
    getProductsSuccess,
    getProductsFailure
}