"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRedirectIfAuthenticated = void 0;
var ra_core_1 = require("ra-core");
var react_1 = require("react");
var react_router_1 = require("react-router");
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
var useRedirectIfAuthenticated = function (redirectTo) {
    if (redirectTo === void 0) { redirectTo = '/'; }
    var navigate = (0, react_router_1.useNavigate)();
    var checkAuth = (0, ra_core_1.useCheckAuth)();
    (0, react_1.useEffect)(function () {
        checkAuth({}, false)
            .then(function () {
            // already authenticated, redirect to the home page
            navigate(redirectTo);
        })
            .catch(function () {
            // not authenticated, stay on the login page
        });
    }, [checkAuth, history, redirectTo]);
};
exports.useRedirectIfAuthenticated = useRedirectIfAuthenticated;
