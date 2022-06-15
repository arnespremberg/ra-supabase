import * as React from 'react';
import { CustomRoutes } from 'ra-core';
import { Route } from 'react-router';
import { SetPasswordPage } from './SetPasswordPage';
export var authRoutes = [
    React.createElement(CustomRoutes, { noLayout: true },
        React.createElement(Route, { element: React.createElement(SetPasswordPage, null), path: "/set-password" }))
];
