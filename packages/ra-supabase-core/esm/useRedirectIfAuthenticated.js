import { useCheckAuth } from 'ra-core';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
/**
 * This hook redirect the user to the provided path (/ by default) if they are authenticated.
 *
 * @example
 * import { useRedirectIfAuthenticated } from 'react-admin';
 * const MyLoginPage = () => {
 *     useRedirectIfAuthenticated();
 *     // UI and logic for authentication
 * }
 **/
export var useRedirectIfAuthenticated = function (redirectTo) {
    if (redirectTo === void 0) { redirectTo = '/'; }
    var history = useHistory();
    var checkAuth = useCheckAuth();
    useEffect(function () {
        checkAuth({}, false)
            .then(function () {
            // already authenticated, redirect to the home page
            history.push(redirectTo);
        })
            .catch(function () {
            // not authenticated, stay on the login page
        });
    }, [checkAuth, history, redirectTo]);
};
