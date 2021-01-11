import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserLoggedIn, getUserToken } from '../screens/Auth/store/selectors';
import { setAuthToken } from '../api/utils';
import {LOGIN_ROUTE} from './routes';

function ProtectedRoute({
    children,
    ...rest
}) {
    const isUserLoggedIn = useSelector(getUserLoggedIn);
    const userToken = useSelector(getUserToken);

    // setting Auth token for the http client
    if (isUserLoggedIn) setAuthToken(userToken);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isUserLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            ...location,
                            pathname: LOGIN_ROUTE,
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

ProtectedRoute.propTypes = {
    // components to be rendered inside
    children: PropTypes.node,
};

ProtectedRoute.defaultProps = {
    children: null
};

export default ProtectedRoute;
