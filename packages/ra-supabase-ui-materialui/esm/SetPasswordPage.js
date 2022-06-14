import * as React from 'react';
import { AuthLayout } from './AuthLayout';
import { SetPasswordForm } from './SetPasswordForm';
export var SetPasswordPage = function (props) {
    var _a = props.children, children = _a === void 0 ? React.createElement(SetPasswordForm, null) : _a;
    return React.createElement(AuthLayout, null, children);
};
