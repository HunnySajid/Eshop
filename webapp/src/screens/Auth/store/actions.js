import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from './constants';

const loginRequest = (email, password) => {
    return {
        type: LOGIN_REQUEST,
        email,
        password
    }
}

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}

const signupRequest = (name, email, password) => {
    return {
        type: SIGNUP_REQUEST,
        name, email, password
    }
}

const signupSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        user
    }
}

const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        error
    }
}

const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}


const getProfileRequest = () => {
    return {
        type: GET_PROFILE_REQUEST
    }
}

const getProfileSuccess = (user) => {
    return {
        type: GET_PROFILE_SUCCESS,
        user
    }
}

const getProfileFailure = (error) => {
    return {
        type: GET_PROFILE_FAILURE,
        error
    }
}

const updateProfileRequest = (updates) => {
    return {
        type: UPDATE_PROFILE_REQUEST,
        updates
    }
}

const updateProfileSuccess = (user) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        user
    }
}

const updateProfileFailure = (error) => {
    return {
        type: UPDATE_PROFILE_FAILURE,
        error
    }
}

export {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logoutRequest,
    getProfileRequest,
    getProfileSuccess,
    getProfileFailure,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailure
}