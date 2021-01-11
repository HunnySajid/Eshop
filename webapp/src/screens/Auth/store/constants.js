const AUTH_PREFIX = 'AUTH_PREFIX';
const PROFILE_PREFIX = 'PROFILE_PREFIX';

const LOGIN_REQUEST = `${AUTH_PREFIX}/LOGIN_REQUESTED`;
const LOGIN_SUCCESS = `${AUTH_PREFIX}/LOGIN_SUCCESS`;
const LOGIN_FAILURE = `${AUTH_PREFIX}/LOGIN_FAILURE`;
const SIGNUP_REQUEST = `${AUTH_PREFIX}/SIGNUP_REQUESTED`;
const SIGNUP_SUCCESS = `${AUTH_PREFIX}/SIGNUP_SUCCESS`;
const SIGNUP_FAILURE = `${AUTH_PREFIX}/SIGNUP_FAILURE`;
const LOGOUT_REQUEST = `${AUTH_PREFIX}/LOGOUT_REQUESTED`;

const GET_PROFILE_REQUEST = `${PROFILE_PREFIX}/GET_PROFILE_REQUESTED`;
const GET_PROFILE_SUCCESS = `${PROFILE_PREFIX}/GET_PROFILE_SUCCESS`;
const GET_PROFILE_FAILURE = `${PROFILE_PREFIX}/GET_PROFILE_FAILURE`;
const UPDATE_PROFILE_REQUEST = `${PROFILE_PREFIX}/UPDATE_PROFILE_REQUESTED`;
const UPDATE_PROFILE_SUCCESS = `${PROFILE_PREFIX}/UPDATE_PROFILE_SUCCESS`;
const UPDATE_PROFILE_FAILURE = `${PROFILE_PREFIX}/UPDATE_PROFILE_FAILURE`;


const user_info = 'user_info';
const user_token = 'user_token';

export {
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
}