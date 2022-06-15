import * as React from 'react';
import { CustomRoutes } from 'ra-core';
import { Route } from 'react-router';
import { SetPasswordPage } from './SetPasswordPage';

export const authRoutes = [
    <CustomRoutes noLayout>
        <Route 
            element={<SetPasswordPage />}
            path="/set-password"
        />
    </CustomRoutes>
];
