import React, {
    HtmlHTMLAttributes,
    ComponentType,
    createElement,
    ReactNode,
    useRef,
    useEffect,
    useMemo,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card, Avatar } from '@material-ui/core';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LockIcon from '@material-ui/icons/Lock';

import { TitleComponent } from 'ra-core';
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
export const AuthLayout: React.FunctionComponent<LoginProps> = props => {
    const {
        theme,
        title,
        classes: classesOverride,
        className,
        children,
        notification,
        backgroundImage,
        ...rest
    } = props;
    const muiTheme = useMemo(() => createTheme(theme), [theme]);

    return (
        <ThemeProvider theme={muiTheme}>
                <AuthCard {...props} />
        </ThemeProvider>
    );
};

export const AuthCard = props => {
    const {
        theme,
        title,
        classes: classesOverride,
        className,
        children,
        notification,
        backgroundImage,
        ...rest
    } = props;

    const classes = useStyles(props);
    const containerRef = useRef<HTMLDivElement>(null);
    let backgroundImageLoaded = false;

    const updateBackgroundImage = () => {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };

    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = () => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };

    useEffect(() => {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });

    return (
        <div
            className={classnames(classes.main, className)}
            {...rest}
            ref={containerRef}
        >
            <Card className={classes.card}>
                <div className={classes.avatar}>
                    <Avatar className={classes.icon}>
                        <LockIcon />
                    </Avatar>
                </div>
                {children}
            </Card>
            {notification ? createElement(notification) : null}
        </div>
    )
}

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

export interface LoginProps
    extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
    backgroundImage?: string;
    children?: ReactNode;
    classes?: object;
    className?: string;
    notification?: ComponentType;
    // staticContext?: StaticContext;
    theme?: object;
    title?: TitleComponent;
}

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme {}
  }

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
            'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
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
}));
