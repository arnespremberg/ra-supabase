"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseDataProvider = void 0;
var supabaseDataProvider = function (client, resources) { return ({
    getList: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceOptions;
        return __generator(this, function (_a) {
            resourceOptions = getResourceOptions(resource, resources);
            return [2 /*return*/, getList({ client: client, resource: resource, resourceOptions: resourceOptions, params: params })];
        });
    }); },
    getOne: function (resource, _a) {
        var id = _a.id;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .select(resourceOptions.fields.join(', '))
                                .match({ id: id })
                                .single()];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        if (resourceOptions.primaryKey === 'id') {
                            return [2 /*return*/, { data: data }];
                        }
                        return [2 /*return*/, __assign(__assign({}, data), { id: data[resourceOptions.primaryKey] })];
                }
            });
        });
    },
    getMany: function (resource, _a) {
        var ids = _a.ids;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .select(resourceOptions.fields.join(', '))
                                .in('id', ids)];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        return [2 /*return*/, { data: data !== null && data !== void 0 ? data : [] }];
                }
            });
        });
    },
    getManyReference: function (resource, originalParams) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceOptions, target, id, params;
        var _a;
        return __generator(this, function (_b) {
            resourceOptions = getResourceOptions(resource, resources);
            target = originalParams.target, id = originalParams.id;
            params = __assign(__assign({}, originalParams), { filter: __assign(__assign({}, originalParams.filter), (_a = {}, _a[target] = id, _a)) });
            return [2 /*return*/, getList({ client: client, resource: resource, resourceOptions: resourceOptions, params: params })];
        });
    }); },
    create: function (resource, _a) {
        var data = _a.data;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, record, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .insert(data)
                                .single()];
                    case 1:
                        _b = _c.sent(), record = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        if (resourceOptions.primaryKey === 'id') {
                            return [2 /*return*/, { data: record }];
                        }
                        return [2 /*return*/, __assign(__assign({}, record), { id: record[resourceOptions.primaryKey] })];
                }
            });
        });
    },
    update: function (resource, _a) {
        var id = _a.id, data = _a.data;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, record, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .update(data)
                                .match({ id: id })
                                .single()];
                    case 1:
                        _b = _c.sent(), record = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        if (resourceOptions.primaryKey === 'id') {
                            return [2 /*return*/, { data: record }];
                        }
                        return [2 /*return*/, __assign(__assign({}, record), { id: record[resourceOptions.primaryKey] })];
                }
            });
        });
    },
    updateMany: function (resource, _a) {
        var ids = _a.ids, data = _a.data;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, records, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .update(data)
                                .in('id', ids)];
                    case 1:
                        _b = _c.sent(), records = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        return [2 /*return*/, {
                                data: records === null || records === void 0 ? void 0 : records.map(function (record) { return record[resourceOptions.primaryKey]; }),
                            }];
                }
            });
        });
    },
    delete: function (resource, _a) {
        var id = _a.id;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, record, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .delete()
                                .match({ id: id })
                                .single()];
                    case 1:
                        _b = _c.sent(), record = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        if (resourceOptions.primaryKey === 'id') {
                            return [2 /*return*/, { data: record }];
                        }
                        return [2 /*return*/, __assign(__assign({}, record), { id: record[resourceOptions.primaryKey] })];
                }
            });
        });
    },
    deleteMany: function (resource, _a) {
        var ids = _a.ids;
        return __awaiter(void 0, void 0, void 0, function () {
            var resourceOptions, _b, records, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        resourceOptions = getResourceOptions(resource, resources);
                        return [4 /*yield*/, client
                                .from(resourceOptions.table)
                                .delete()
                                .in('id', ids)];
                    case 1:
                        _b = _c.sent(), records = _b.data, error = _b.error;
                        if (error) {
                            throw error;
                        }
                        return [2 /*return*/, {
                                data: records === null || records === void 0 ? void 0 : records.map(function (record) { return record[resourceOptions.primaryKey]; }),
                            }];
                }
            });
        });
    },
}); };
exports.supabaseDataProvider = supabaseDataProvider;
var getList = function (_a) {
    var client = _a.client, resource = _a.resource, resourceOptions = _a.resourceOptions, params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var pagination, sort, _b, q, filter, rangeFrom, rangeTo, query, fullTextSearchFields, _c, data, error, count;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    pagination = params.pagination, sort = params.sort, _b = params.filter, q = _b.q, filter = __rest(_b, ["q"]);
                    rangeFrom = (pagination.page - 1) * pagination.perPage;
                    rangeTo = rangeFrom + pagination.perPage;
                    query = client
                        .from(resourceOptions.table)
                        .select(resourceOptions.fields.join(', '), { count: 'exact' })
                        .order(sort.field, { ascending: sort.order === 'ASC' })
                        .match(filter)
                        .range(rangeFrom, rangeTo);
                    if (q) {
                        fullTextSearchFields = Array.isArray(resourceOptions)
                            ? resourceOptions
                            : resourceOptions.fullTextSearchFields;
                        fullTextSearchFields.forEach(function (field) {
                            query = query.ilike(field, "%" + q + "%");
                        });
                    }
                    return [4 /*yield*/, query];
                case 1:
                    _c = _e.sent(), data = _c.data, error = _c.error, count = _c.count;
                    if (error) {
                        throw error;
                    }
                    return [2 /*return*/, {
                            data: resourceOptions.primaryKey === 'id'
                                ? data
                                : (_d = data.map(function (item) { return (__assign(__assign({}, item), { id: item[resourceOptions.primaryKey] })); })) !== null && _d !== void 0 ? _d : [],
                            total: count !== null && count !== void 0 ? count : 0,
                        }];
            }
        });
    });
};
var getResourceOptions = function (resource, options) {
    var _a, _b, _c;
    var resourceOptions = options[resource];
    if (Array.isArray(resourceOptions)) {
        return {
            table: resource,
            primaryKey: 'id',
            fields: resourceOptions,
            fullTextSearchFields: resourceOptions,
        };
    }
    return {
        table: (_a = resourceOptions.table) !== null && _a !== void 0 ? _a : resource,
        primaryKey: (_b = resourceOptions.primaryKey) !== null && _b !== void 0 ? _b : 'id',
        fields: resourceOptions.fields,
        fullTextSearchFields: (_c = resourceOptions.fullTextSearchFields) !== null && _c !== void 0 ? _c : resourceOptions.fields,
    };
};
