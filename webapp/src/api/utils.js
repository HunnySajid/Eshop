import axios from 'axios';

// client for sending REST based requested {post, get, put/patch, delete/destroy}
const client = axios;

export function post(url, data) {
    return client({
        method: 'post',
        url: url,
        data: data,
    });
}

export function get(url, data) {
    return client({
        method: 'get',
        url: url,
        params: data,
    });
}

export function patch(url, data, attr = 'params') {
    return client({
        method: 'patch',
        url: url,
        [attr]: data,
    });
}

export function destroy(url, data) {
    return client({
        method: 'delete',
        url: url,
        data: data,
    });
}

export function setAuthToken(token = null) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function parseClientError(error) {
    let parsed = 'Seems like a cog stopped moving.';

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        parsed = error.response.data;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        parsed = error.request;
    } else {
        // Something happened in setting up the request that triggered an Error
        parsed = error.message;
    }

    return parsed;
}
