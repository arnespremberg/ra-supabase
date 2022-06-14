"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.LoginPage = void 0;
var React = __importStar(require("react"));
var ra_supabase_core_1 = require("ra-supabase-core");
var AuthLayout_1 = require("./AuthLayout");
var LoginForm_1 = require("./LoginForm");
var LoginPage = function (_a) {
    var _b = _a.children, children = _b === void 0 ? React.createElement(LoginForm_1.LoginForm, null) : _b;
    ra_supabase_core_1.useRedirectIfAuthenticated();
    return React.createElement(AuthLayout_1.AuthLayout, null, children);
};
exports.LoginPage = LoginPage;
