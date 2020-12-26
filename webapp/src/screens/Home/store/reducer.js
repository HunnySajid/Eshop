import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_REQUEST
} from './constants';

const initialState = {
    loading: false,
    products: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            const { products } = action
            return {
                ...state,
                loading: false,
                products
            };
        }
        case GET_PRODUCTS_FAILURE: {
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
