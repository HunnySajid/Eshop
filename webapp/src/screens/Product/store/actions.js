import {
    SET_PRODUCT_ID,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_REQUEST
} from './constants';

const setProductId = (productId) => {
    return {
        type: SET_PRODUCT_ID,
        productId
    }
}

const getProductRequest = () => {
    return {
        type: GET_PRODUCT_REQUEST
    }
}

const getProductSuccess = (product) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    }
}

const getProductFailure = (error) => {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}

export {
    setProductId,
    getProductRequest,
    getProductSuccess,
    getProductFailure
}