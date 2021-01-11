import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_REQUEST,
    LOGOUT_REQUEST,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    user_info,
    user_token
} from './constants';

const initialState = {
    loading: false,
    isLoggedIn: !!localStorage.getItem(user_token),
    user: JSON.parse(localStorage.getItem(user_info)),
    token: localStorage.getItem(user_token),
    error: null,
    loadingProfile: false
    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }

        case GET_PROFILE_REQUEST:
        case UPDATE_PROFILE_REQUEST: {
            return {
                ...state,
                loadingProfile: true
            };
        }
        
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS: {
            const { user } = action;
            localStorage.setItem(user_info,JSON.stringify(user));
            localStorage.setItem(user_token, user.token);
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                user,
                token: user.token,
                loadingProfile: false
            };
        }
        case LOGOUT_REQUEST: {
            localStorage.removeItem(user_info);
            localStorage.removeItem(user_token);
            return {
                loading: false,
                isLoggedIn: null,
                user: null,
                token: null,
                error: null
            };
        }
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case GET_PROFILE_FAILURE: {
            const { error } = action
            return {
                ...state,
                loading: false,
                loadingProfile: false,
                error
            };
        }
        default:
            return state;
    }
}
