import {
    SET_PRODUCT_ID,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_REQUEST
} from './constants';

const initialState = {
    productId: '',
    loading: false,
    product: {},
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_ID: {
            return {
                ...state,
                productId: action.productId
            }
        }
        case GET_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true

            };
        }
        case GET_PRODUCT_SUCCESS: {
            const { product } = action
            return {
                ...state,
                loading: false,
                product
            };
        }
        case GET_PRODUCT_FAILURE: {
            const { error } = action
            return {
                ...state,
                loading: false,
                error
            };
        }
        default:
            return state;
    }
}
