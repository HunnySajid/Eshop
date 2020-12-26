import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT_REQUEST } from './constants';
import { getProductDetail } from '../../../api';
import { parseClientError } from '../../../api/utils';
import { getProductSuccess, getProductFailure } from './actions';
import { getProductId } from './selectors';

function* fetchProduct() {
    try {
        const productId = yield select(getProductId);
        const product = yield call(getProductDetail, { productId });
        yield put(getProductSuccess(product));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(getProductFailure(message));
    }
}

export default function* () {
    yield all([yield takeLatest(GET_PRODUCT_REQUEST, fetchProduct)]);
}
