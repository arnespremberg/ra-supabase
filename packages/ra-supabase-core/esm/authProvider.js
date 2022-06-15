var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
export var supabaseAuthProvider = function (client, _a) {
    var getIdentity = _a.getIdentity;
    return ({
        login: function (_a) {
            var email = _a.email, password = _a.password;
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, client.auth.signIn({ email: email, password: password })];
                        case 1:
                            error = (_b.sent()).error;
                            if (error) {
                                throw error;
                            }
                            return [2 /*return*/, undefined];
                    }
                });
            });
        },
        setPassword: function (_a) {
            var access_token = _a.access_token, password = _a.password;
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, client.auth.api.updateUser(access_token, {
                                password: password,
                            })];
                        case 1:
                            error = (_b.sent()).error;
                            if (error) {
                                throw error;
                            }
                            return [2 /*return*/, undefined];
                    }
                });
            });
        },
        logout: function () {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client.auth.signOut()];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        checkError: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        },
        checkAuth: function () {
            return __awaiter(this, void 0, void 0, function () {
                var urlSearchParams, access_token, type;
                return __generator(this, function (_a) {
                    // Users are on the set-password page, nothing to do
                    if (window.location.pathname === '/set-password') {
                        return [2 /*return*/];
                    }
                    urlSearchParams = new URLSearchParams(window.location.hash.substr(1));
                    access_token = urlSearchParams.get('access_token');
                    type = urlSearchParams.get('type');
                    // Users have reset their password and must set a new one
                    if (access_token && type === 'recovery') {
                        // eslint-disable-next-line no-throw-literal
                        throw new CheckAuthError('Users have reset their password and must set a new one', "set-password?access_token=".concat(access_token));
                    }
                    // Users have have been invited and must set their password
                    if (access_token && type === 'invite') {
                        // eslint-disable-next-line no-throw-literal
                        throw new CheckAuthError('Users have have been invited and must set their password', "set-password?access_token=".concat(access_token));
                    }
                    if (client.auth.session() == null) {
                        throw new Error();
                    }
                    return [2 /*return*/, Promise.resolve()];
                });
            });
        },
        getPermissions: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        },
        getIdentity: function () {
            return __awaiter(this, void 0, void 0, function () {
                var user, identity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = client.auth.user();
                            if (!user) {
                                throw new Error();
                            }
                            if (!(typeof getIdentity === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, getIdentity(user)];
                        case 1:
                            identity = _a.sent();
                            return [2 /*return*/, identity];
                        case 2: return [2 /*return*/, undefined];
                    }
                });
            });
        },
    });
};
var CheckAuthError = /** @class */ (function (_super) {
    __extends(CheckAuthError, _super);
    function CheckAuthError(message, redirectTo) {
        var _this = _super.call(this, message) || this;
        _this.redirectTo = redirectTo;
        return _this;
    }
    return CheckAuthError;
}(Error));
