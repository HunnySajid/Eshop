import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, SIGNUP_REQUEST, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST } from './constants';
import { loginSuccess, loginFailure, signupSuccess, signupFailure, getProfileSuccess, getProfileFailure, updateProfileSuccess, updateProfileFailure } from './actions';
import { login, signup, getProfile, updateProfile } from '../../../api';
import { parseClientError } from '../../../api/utils';

function* performLogin(action) {
    try {   
        const {email, password} = action;
        const user = yield call(login, {email, password});
        yield put(loginSuccess(user));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(loginFailure(message));
    }
}

function* performSignup(action) {
    try {
        const {name, email, password} = action;
        const user = yield call(signup, {name, email, password});
        yield put(signupSuccess(user));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(signupFailure(message));
    }
}

function* performFetchProfile() {
    try {
        const user = yield call(getProfile);
        yield put(getProfileSuccess(user));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(getProfileFailure(message));
    }
}

function* performUpdateProfile(action) {
    try {
        const {updates} = action;
        const user = yield call(updateProfile, {...updates});
        yield put(updateProfileSuccess(user));
    } catch (e) {
        const error = parseClientError(e);
        const message = error && error.message ? error.message : error;
        yield put(updateProfileFailure(message));
    }
}

export default function* () {
    yield all([
        yield takeLatest(LOGIN_REQUEST, performLogin), 
        yield takeLatest(SIGNUP_REQUEST, performSignup),
        yield takeLatest(GET_PROFILE_REQUEST, performFetchProfile),
        yield takeLatest(UPDATE_PROFILE_REQUEST, performUpdateProfile),
        
    ]);
}
