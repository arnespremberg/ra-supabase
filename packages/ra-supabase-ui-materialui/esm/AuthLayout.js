var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { createElement, useRef, useEffect, useMemo, } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card, Avatar } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LockIcon from '@material-ui/icons/Lock';
import { defaultTheme, Notification } from 'ra-ui-materialui';
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
export var AuthLayout = function (props) {
    var theme = props.theme, title = props.title, classesOverride = props.classes, className = props.className, children = props.children, notification = props.notification, backgroundImage = props.backgroundImage, rest = __rest(props, ["theme", "title", "classes", "className", "children", "notification", "backgroundImage"]);
    var muiTheme = useMemo(function () { return createTheme(theme); }, [theme]);
    return (React.createElement(ThemeProvider, { theme: muiTheme },
        React.createElement(AuthCard, __assign({}, props))));
};
export var AuthCard = function (props) {
    var theme = props.theme, title = props.title, classesOverride = props.classes, className = props.className, children = props.children, notification = props.notification, backgroundImage = props.backgroundImage, rest = __rest(props, ["theme", "title", "classes", "className", "children", "notification", "backgroundImage"]);
    var classes = useStyles(props);
    var containerRef = useRef(null);
    var backgroundImageLoaded = false;
    var updateBackgroundImage = function () {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = "url(".concat(backgroundImage, ")");
            backgroundImageLoaded = true;
        }
    };
    // Load background image asynchronously to speed up time to interactive
    var lazyLoadBackgroundImage = function () {
        if (backgroundImage) {
            var img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };
    useEffect(function () {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (React.createElement("div", __assign({ className: classnames(classes.main, className) }, rest, { ref: containerRef }),
        React.createElement(Card, { className: classes.card },
            React.createElement("div", { className: classes.avatar },
                React.createElement(Avatar, { className: classes.icon },
                    React.createElement(LockIcon, null))),
            children),
        notification ? createElement(notification) : null));
};
AuthLayout.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    theme: PropTypes.object,
};
AuthLayout.defaultProps = {
    theme: defaultTheme,
    notification: Notification,
};
var useStyles = makeStyles(function (theme) { return ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.grey[500],
    },
}); });
