import * as React from 'react';
import { useRedirectIfAuthenticated } from 'ra-supabase-core';
import { AuthLayout } from './AuthLayout';
import { LoginForm } from './LoginForm';
export var LoginPage = function (_a) {
    var _b = _a.children, children = _b === void 0 ? React.createElement(LoginForm, null) : _b;
    useRedirectIfAuthenticated();
    return React.createElement(AuthLayout, null, children);
};
