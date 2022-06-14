import * as React from 'react';
import { useLogin, useNotify, useTranslate } from 'ra-core';
import { Field, Form } from 'react-final-form';
import { Button, CardActions, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from './Input';
export var LoginForm = function () {
    var classes = useStyles();
    var login = useLogin();
    var notify = useNotify();
    var translate = useTranslate();
    var validate = function (values) {
        var errors = { email: undefined, password: undefined };
        if (!values.email) {
            errors.email = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    var submit = function (values) {
        return login(values).catch(function (error) {
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        });
    };
    return (React.createElement(Form, { onSubmit: submit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit, submitting = _a.submitting;
            return (React.createElement("form", { onSubmit: handleSubmit, noValidate: true },
                React.createElement("div", { className: classes.form },
                    React.createElement("div", { className: classes.input },
                        React.createElement(Field, { autoFocus: true, id: "email", name: "email", type: "email", component: Input, label: translate('ra-supabase.auth.email', {
                                _: 'Email',
                            }), disabled: submitting })),
                    React.createElement("div", null,
                        React.createElement(Field, { id: "password", name: "password", type: "password", component: Input, label: translate('ra.auth.password'), disabled: submitting, autoComplete: "current-password" }))),
                React.createElement(CardActions, null,
                    React.createElement(Button, { variant: "contained", type: "submit", color: "primary", disabled: submitting, className: classes.button },
                        submitting && (React.createElement(CircularProgress, { className: classes.icon, size: 18, thickness: 2 })),
                        translate('ra.auth.sign_in')))));
        } }));
};
var useStyles = makeStyles(function (theme) { return ({
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    button: {
        width: '100%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}); }, {
    name: 'RaSupabaseLoginForm',
});
