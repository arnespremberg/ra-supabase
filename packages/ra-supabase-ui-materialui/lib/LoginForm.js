"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var React = __importStar(require("react"));
var ra_core_1 = require("ra-core");
var react_final_form_1 = require("react-final-form");
var core_1 = require("@material-ui/core");
var styles_1 = require("@mui/styles");
var Input_1 = require("./Input");
var LoginForm = function () {
    var classes = useStyles();
    var login = (0, ra_core_1.useLogin)();
    var notify = (0, ra_core_1.useNotify)();
    var translate = (0, ra_core_1.useTranslate)();
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
                    : error.message, {
                type: 'warning',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                }
            });
        });
    };
    return (React.createElement(react_final_form_1.Form, { onSubmit: submit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit, submitting = _a.submitting;
            return (React.createElement("form", { onSubmit: handleSubmit, noValidate: true },
                React.createElement("div", { className: classes.form },
                    React.createElement("div", { className: classes.input },
                        React.createElement(react_final_form_1.Field, { autoFocus: true, id: "email", name: "email", type: "email", component: Input_1.Input, label: translate('ra-supabase.auth.email', {
                                _: 'Email',
                            }), disabled: submitting })),
                    React.createElement("div", null,
                        React.createElement(react_final_form_1.Field, { id: "password", name: "password", type: "password", component: Input_1.Input, label: translate('ra.auth.password'), disabled: submitting, autoComplete: "current-password" }))),
                React.createElement(core_1.CardActions, null,
                    React.createElement(core_1.Button, { variant: "contained", type: "submit", color: "primary", disabled: submitting, className: classes.button },
                        submitting && (React.createElement(core_1.CircularProgress, { className: classes.icon, size: 18, thickness: 2 })),
                        translate('ra.auth.sign_in')))));
        } }));
};
exports.LoginForm = LoginForm;
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
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
