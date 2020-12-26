import { all, call } from 'redux-saga/effects';
import productsSaga from '../screens/Home/store/sagas';
import productSaga from '../screens/Product/store/sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        // all of the app related sagas will go here
        call(productsSaga),
        call(productSaga)
    ]);
}
