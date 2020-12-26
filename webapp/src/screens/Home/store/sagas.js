import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS_REQUEST } from './constants';
import { getProductsSuccess, getProductsFailure } from './actions';
import { getProducts } from '../../../api';
import { parseClientError } from '../../../api/utils';

function* fetchProducts() {
    try {
        const params = {};
        const products = yield call(getProducts, params);
        yield put(getProductsSuccess(products));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(getProductsFailure(message));
    }
}

export default function* () {
    yield all([yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts)]);
}
