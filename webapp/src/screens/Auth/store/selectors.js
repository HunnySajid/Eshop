import { createSelector } from 'reselect';

const authState = (state) => state.auth || null;

export const getUser = createSelector(
    authState,
    (auth) => auth.user,
);

export const getUserLoading = createSelector(
    authState,
    (auth) => auth.loading,
);

export const getUserProfileLoading = createSelector(
    authState,
    (auth) => auth.loadingProfile,
);

export const getUserToken = createSelector(
    authState,
    (auth) => auth.token,
);

export const getUserLoggedIn = createSelector(
    authState,
    (auth) => auth.isLoggedIn,
);

export const getUserAuthError = createSelector(
    authState,
    (auth) => auth.error,
);