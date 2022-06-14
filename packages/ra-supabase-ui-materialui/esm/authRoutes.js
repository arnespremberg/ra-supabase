import * as React from 'react';
import { RouteWithoutLayout } from 'ra-core';
import { SetPasswordPage } from './SetPasswordPage';
export var authRoutes = [
    React.createElement(RouteWithoutLayout, { noLayout: true, path: "/set-password", render: function () { return React.createElement(SetPasswordPage, null); } }),
];
