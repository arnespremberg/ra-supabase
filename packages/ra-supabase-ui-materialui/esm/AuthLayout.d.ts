import React, { HtmlHTMLAttributes, ComponentType, ReactNode } from 'react';
import { StaticContext } from 'react-router';
import { TitleComponent } from 'ra-core';
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
export declare const AuthLayout: React.FunctionComponent<LoginProps>;
export interface LoginProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
    backgroundImage?: string;
    children?: ReactNode;
    classes?: object;
    className?: string;
    notification?: ComponentType;
    staticContext?: StaticContext;
    theme?: object;
    title?: TitleComponent;
}
//# sourceMappingURL=AuthLayout.d.ts.map